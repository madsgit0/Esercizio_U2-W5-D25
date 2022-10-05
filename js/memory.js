let card = document.getElementsByClassName("card")
let firstCard
let secondCard

const game = function (eventoClick) {
    eventoClick.target.classList.add("hover")
    if (firstCard === undefined){
        firstCard = eventoClick.target
    } else{
        secondCard = eventoClick.target
        for(let i = 0; i < card.length; i++){
            card[i].removeAttribute("onclick")
        }

        setTimeout(function() {
            let sameCards = cardCheck()
            if(sameCards === true){
                firstCard.classList.replace("hover", "match")
                secondCard.classList.replace("hover", "match")
            }else {
                firstCard.classList.remove("hover")
                secondCard.classList.remove("hover")
            } 
            firstCard = undefined
            secondCard = undefined
            let hiddenCards = document.querySelectorAll(".card:not(.match)")
            for (let i = 0; i < hiddenCards.length; i++) {
               hiddenCards[i].setAttribute("onclick","game(event)")
            }
        }, 1300)
    }
}

const cardCheck = function(){
    if(firstCard.innerHTML === secondCard.innerHTML){
        return true
    } else {
        return false
    }
}