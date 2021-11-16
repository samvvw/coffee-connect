import { StyledButton } from './button.styles'

const Button = ({
    title,
    onClick,
    type = 'button',
    backgroundColor,
    textColor,
    disabled = false,
    borderColor,
    width = '100%',
}) => {
    return (
        <StyledButton
            type={type}
            onClick={onClick}
            backgroundColor={backgroundColor}
            textColor={textColor}
            disabled={disabled}
            borderColor={borderColor}
            width={width}
        >
            {title}
        </StyledButton>
    )
}

export default Button
