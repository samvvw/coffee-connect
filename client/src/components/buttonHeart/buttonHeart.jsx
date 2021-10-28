import { StyledButton } from './buttonHeart.styles'
import FavoriteEmptyIcon from '@material-ui/icons/FavoriteBorder'

const ButtonHeart = ({
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
            <FavoriteEmptyIcon />
            <span>Share</span>
        </StyledButton>
    )
}

export default ButtonHeart
