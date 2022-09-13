import styled from 'styled-components'

const Button = styled.div`
    height: 80px;
    width: 120px;

    margin: 10px;

    display:flex;
    align-items:center;
    justify-content:center;

    font-family: verdana;

    border-radius: 10px;

    color: white;
`
const HigherButton = styled(Button)`
    background-color: #FC5454;
`

const LowerButton = styled(Button)`
    background-color: #34C800;
`

function GameButton() {
    return(
        <>
            <HigherButton>
                Higher
            </HigherButton>
            <LowerButton>
                Lower
            </LowerButton>
        </>
    )
}

export default GameButton;