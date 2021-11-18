import Button from '../button/button'
import { theme } from '../../theme/theme'
import { Container, IconContainer, Input } from './interactiveTextField.styles'


const InteractiveTextField  = ({ onClick, onKeyUp, width, height, placeholder = '' }) => {
    return (
        <Container onClick={onClick}>
            <IconContainer>
                <Button
                    onClick={onClick}
                    title={"Subscribe"}
                    backgroundColor={theme.pallette.secondary.c800}
                    textColor={"#ffffff"}
                    border="none"
                    padding="5px 20px"
                ></Button>
            </IconContainer>
            <Input
            type="text"
            name="searchQuery"
            id="searchQuery"
            email="email"
            placeholder="john@example.com"
            onKeyUp={onKeyUp}
            />
        </Container>
    )
}

export default InteractiveTextField 
