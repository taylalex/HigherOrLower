import styled from 'styled-components'

const Card = styled.img`
    width:20%;
`


function CardViewer(props) {
    var cardImage = require('../assets/cards/'+ props.card + '.png')
    return(
        <>
            <Card src={cardImage} />
        </>
    )
}

export default CardViewer;
