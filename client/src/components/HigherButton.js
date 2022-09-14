import styled from "styled-components"

import GameButton from './GameButton'

const Button = styled(GameButton)`
    background-color: #FC5454;
`

function HigherButton(props) {
    return(
        <>
            <Button onClick={props.onClick}>
                Higher
            </Button>
        </>
    )
}

export default HigherButton;