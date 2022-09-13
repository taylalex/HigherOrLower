import styled from 'styled-components'

import logo from '../assets/logo.png'

import CardViewer from '../components/CardViewer'
import GameButtons from '../components/GameButtons'

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


function Home() {
    return (
        <>
            <Header>
                <Logo src={logo}/>
            </Header>
            <CardWrapper>
            <CardViewer />
                </CardWrapper>
            <ButtonWrapper>
                <GameButtons />
            </ButtonWrapper>
            <Footer>
                Created by Taylor Stubbs
            </Footer>
        </>
    )
}

export default Home;