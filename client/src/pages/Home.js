import styled from 'styled-components'
import logo from '../assets/logo.png'

const Header = styled.div`
    margin: auto;
    padding: 10px;
`

const Footer = styled.div`
    background-color:#252627;
    color: white;
    font-family: Arial;
    padding: 10px;
    text-align: center;
`
const Logo = styled.img`
    display: block;
    margin: auto;
    width: 20%;
    min-width: 200px;
`

function Home() {
    return (
        <>
            <Header>
                <Logo src={logo}/>
            </Header>
            <Footer>
                Created by Taylor Stubbs
            </Footer>
        </>
    )
}

export default Home;