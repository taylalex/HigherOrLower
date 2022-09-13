import styled from "styled-components"

import GameButton from './GameButton'

const Button = styled(GameButton)`
    background-color: #34C800;
`

function LowerButton(props) {
    return(
        <>
            <Button onClick={props.onClick}>
                Lower
            </Button>
        </>
    )
}

export default LowerButton;