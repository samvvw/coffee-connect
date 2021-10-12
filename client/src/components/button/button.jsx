import { StyledButton } from './button.styles'

const Button = ({
    title,
    onClick,
    type = 'button',
    backgroundColor,
    textColor,
}) => {
    return (
        <StyledButton
            type={type}
            onClick={onClick}
            backgroundColor={backgroundColor}
            textColor={textColor}
        >
            {title}
        </StyledButton>
    )
}

export default Button
