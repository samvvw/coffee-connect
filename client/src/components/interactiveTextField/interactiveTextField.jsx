import { Input, FieldContainer, Container } from './interactiveTextField.styles'
import Button from '../button/button'

const InteractiveTextField = ({
    onClick,
    onKeyUp,
    width,
    height,
    placeholder,
}) => {
    return (
        <FieldContainer>
            <Input
                type="text"
                name="searchQuery"
                id="searchQuery"
                placeholder={placeholder}
                onKeyUp={onKeyUp}
                width={width}
                height={height}
            />
            <Container>
                <Button title="Subscribe" onClick={onClick} />
            </Container>
        </FieldContainer>
    )
}

export default InteractiveTextField
