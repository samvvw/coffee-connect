import { StyledButton } from './buttonHeart.styles'
import FavoriteEmptyIcon from '@material-ui/icons/FavoriteBorder'
import Favorite from '@material-ui/icons/Favorite'

const ButtonHeart = ({
    onClick,
    type = 'button',
    backgroundColor,
    textColor,
    borderColor,
    liked,
}) => {
    return (
        <StyledButton
            type={type}
            onClick={onClick}
            backgroundColor={backgroundColor}
            textColor={textColor}
            borderColor={borderColor}
        >
            {liked ? <Favorite /> : <FavoriteEmptyIcon />}
            <span>Save</span>
        </StyledButton>
    )
}

export default ButtonHeart
