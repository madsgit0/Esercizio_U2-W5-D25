let card = document.getElementsByClassName("card")
let firstCard
let secondCard

console.log(card)

const game = function (eventoClick) {
    eventoClick.target.classList.add("hover")
    console.log('la prima carta è: ', firstCard)
    if (firstCard === undefined){
        firstCard = eventoClick.target
    } else{
        secondCard = eventoClick.target
        for(let i = 0; i < card.length; i++){
            card[i].removeAttribute("onclick")
        }
    console.log(firstCard, secondCard)
    //  setTimeout(function) {
        let sameCards = ('🦁')
        if(sameCards === true){
            firstCard.classList.replace("hover", "match")
            secondCard.classList.replace("hover", "match")
        }else {
            firstCard.classList.remove("hover")
            secondCard.classList.remove("hover")
            
        } 
    // }
    console.log(firstCard, secondCard)
    }
}