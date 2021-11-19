import Button from '../button/button'
import { theme } from '../../theme/theme'
import { Container, IconContainer, Input } from './interactiveTextField.styles'


const InteractiveTextField  = (props) => {

    return (
        <Container>
            <IconContainer>
                <Button

                    title={"Subscribe"}
                    backgroundColor={theme.pallette.secondary.c800}
                    textColor={"#ffffff"}
                    border="none"
                    padding="5px 20px"
                ></Button>
            </IconContainer>
            <Input
            type="text"
            placeholder="john@example.com"
            />
        </Container>
    )
}

export default InteractiveTextField 
