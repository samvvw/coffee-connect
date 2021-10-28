import { StyledButton } from './buttonShare.styles'
import ShareIcon from '@material-ui/icons/Share'

const ButtonShare = ({
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
            <ShareIcon />
            <span>Share</span>
        </StyledButton>
    )
}

export default ButtonShare
