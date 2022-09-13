import styled from 'styled-components'

import card from '../assets/cards/2_of_clubs.png'
import logo from '../assets/logo.png'

const Card = styled.img`
    width:15%;
`


function CardViewer() {
    return(
        <>
            <Card src={card} />
        </>
    )
}

export default CardViewer;
