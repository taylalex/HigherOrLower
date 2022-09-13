
var score = 0;
var currentCard;
var prevCard;

const cardList = new Map([
    ['2S', 2], ['3S', 3], ['4S', 4], ['5S', 5], ['6S', 6], ['7S', 7], ['8S', 8], ['9S', 9], ['10S', 10], ['JS', 11], ['QS', 12], ['KS', 13], ['AS',14],
    ['2H', 2], ['3H', 3], ['4H', 4], ['5H', 5], ['6H', 6], ['7H', 7], ['8H', 8], ['9H', 9], ['10H', 10], ['JH', 11], ['QH', 12], ['KH', 13], ['AH', 14],
    ['2C', 2], ['3C', 3], ['4C', 4], ['5C', 5], ['6C', 6], ['7C', 7], ['8C', 8], ['9C', 9], ['10C', 10], ['JC', 11], ['QC', 12], ['KC', 13], ['AC', 14],
    ['2D', 2], ['3D', 3], ['4D', 4], ['5D', 5], ['6D', 6], ['7D', 7], ['8D', 8], ['9D', 9], ['10D', 10], ['JD', 11], ['QD', 12], ['KD', 13], ['AD', 14]
])

function isGuessCorrect(guess) {
    if(guess == 'higher') {
        return cardList[currentCard] >= cardList[prevCard];
    }
    return cardList[currentCard] <= cardList[prevCard];
}

function getNewCard() {
    var cardValues = Array.from(cardList.keys());
    var cardIndex = Math.floor(Math.random() * 52);
    
    prevCard = currentCard;
    currentCard = cardValues[cardIndex]
}

console.log(getNewCard());

