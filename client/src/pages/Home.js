import styled from 'styled-components'
import { useState } from 'react'

import logo from '../assets/logo.png'

import CardViewer from '../components/CardViewer'
import HigherButton from '../components/HigherButton'
import LowerButton from '../components/LowerButton'

const Header = styled.div`
    margin: auto;
    padding: 10px;
`

const Logo = styled.img`
    width: 20%;
    min-width: 200px;

    margin: auto;

    display: block;
`

const CardWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
`

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction:row;
    align-items:center;
    justify-content: center;
`
const Footer = styled.div`
    padding: 10px;

    font-family: Arial;
    text-align: center;

    background-color:#252627;
    color: white;
`

var playerScore = 0;
var currentCard;
var prevCard;

const cardList = new Map([
    ['2S', 2], ['3S', 3], ['4S', 4], ['5S', 5], ['6S', 6], ['7S', 7], ['8S', 8], ['9S', 9], ['10S', 10], ['JS', 11], ['QS', 12], ['KS', 13], ['AS',14],
    ['2H', 2], ['3H', 3], ['4H', 4], ['5H', 5], ['6H', 6], ['7H', 7], ['8H', 8], ['9H', 9], ['10H', 10], ['JH', 11], ['QH', 12], ['KH', 13], ['AH', 14],
    ['2C', 2], ['3C', 3], ['4C', 4], ['5C', 5], ['6C', 6], ['7C', 7], ['8C', 8], ['9C', 9], ['10C', 10], ['JC', 11], ['QC', 12], ['KC', 13], ['AC', 14],
    ['2D', 2], ['3D', 3], ['4D', 4], ['5D', 5], ['6D', 6], ['7D', 7], ['8D', 8], ['9D', 9], ['10D', 10], ['JD', 11], ['QD', 12], ['KD', 13], ['AD', 14]
])


function Home() {
    const [card, setCard] = useState('5H');
    const [score, setScore] = useState(playerScore);

    return (
        <>
            <Header>
                <Logo src={logo}/>
            </Header>
            <CardWrapper>
                {score}
            <CardViewer card={card} />
                </CardWrapper>
            <ButtonWrapper>
                <HigherButton onClick={() => {
                    getNewCard();
                    setCard(currentCard);
                    console.log(isGuessCorrect("higher"));
                    if(isGuessCorrect("higher")){
                        playerScore++
                    }
                    setScore(playerScore)
                }}/>
                <LowerButton onClick={() => {
                    getNewCard();
                    setCard(currentCard)
                    if(isGuessCorrect('lower')){
                        playerScore++
                    }
                    setScore(playerScore)
                }}/>
            </ButtonWrapper>
            
            <Footer>
                Created by Taylor Stubbs
            </Footer>
        </>
    )
}





function isGuessCorrect(guess) {
    if(guess == "higher") {
        return cardList.get(currentCard) >= cardList.get(prevCard);
    }
    return cardList.get(currentCard) <= cardList.get(prevCard);
}

function getNewCard() {
    var cardValues = Array.from(cardList.keys());
    var cardIndex = Math.floor(Math.random() * 52);
    prevCard = currentCard;
    currentCard = cardValues[cardIndex];
}

export default Home;