import { StyledButton } from './buttonShare.styles'
import ShareIcon from '@material-ui/icons/Share'

const ButtonShare = ({
    onClick,
    type = 'button',
    backgroundColor,
    textColor,
    borderColor,
}) => {
    return (
        <StyledButton
            type={type}
            onClick={onClick}
            backgroundColor={backgroundColor}
            textColor={textColor}
            borderColor={borderColor}
        >
            <ShareIcon />
            <span>Share</span>
        </StyledButton>
    )
}

export default ButtonShare
