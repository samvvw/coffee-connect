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
    height,
    border,
    borderRadius,
    padding,
    hoverBackgroundColor,
    hoverTextColor,
    hoverBorderColor,
    activeBackgroundColor,
    activeBorderColor
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
            border={border}
            borderRadius={borderRadius}
            padding={padding}
            height={height}
            hoverBackgroundColor={hoverBackgroundColor}
            hoverTextColor={hoverTextColor}
            hoverBorderColor={hoverBorderColor}
            activeBackgroundColor={activeBackgroundColor}
            activeBorderColor={activeBorderColor}
        >
            {title}
        </StyledButton>
    )
}

export default Button
