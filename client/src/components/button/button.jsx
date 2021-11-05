import { StyledButton } from './button.styles'

const Button = ({
    title,
    onClick,
    type = 'button',
    backgroundColor,
    textColor,
    disabled = false,
}) => {
    return (
        <StyledButton
            type={type}
            onClick={onClick}
            backgroundColor={backgroundColor}
            textColor={textColor}
            disabled={disabled}
        >
            {title}
        </StyledButton>
    )
}

export default Button
