import styled from 'styled-components'
import { useState } from 'react'

import logo from '../assets/logo.png'

import CardViewer from '../components/CardViewer'
import HigherButton from '../components/HigherButton'
import LowerButton from '../components/LowerButton'

import { getState, guessHigher, guessLower } from '../game'

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

const ScoreWrapper = styled.div`
    padding: 10px;

    font-family: Arial;
    text-align: center;
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

function Home() {
    const [card, setCard] = useState(getState().currentCard);
    const [score, setScore] = useState(getState().score);

    return (
        <>
            <Header>
                <Logo src={logo}/>
            </Header>
            <ScoreWrapper>
                {score}
            </ScoreWrapper>
            <CardWrapper>
                <CardViewer card={card} />
            </CardWrapper>
            <ButtonWrapper>
                <HigherButton onClick={() => {
                    guessHigher();
                    setCard(getState().currentCard);
                    setScore(getState().score)
                }}/>
                <LowerButton onClick={() => {
                    guessLower();
                    setCard(getState().currentCard);
                    setScore(getState().score)
                }}/>
            </ButtonWrapper>
            <Footer>
                Created by Taylor Stubbs
            </Footer>
        </>
    )
}



export default Home;