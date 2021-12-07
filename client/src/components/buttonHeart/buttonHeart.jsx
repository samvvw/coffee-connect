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
    hover,
    onMouseEnter,
    onMouseLeave
}) => {
    return (
        <StyledButton
            type={type}
            onClick={onClick}
            backgroundColor={backgroundColor}
            textColor={textColor}
            borderColor={borderColor}
            hover={hover}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {liked || hover ? <Favorite /> : <FavoriteEmptyIcon />}
            <span>Save</span>
        </StyledButton>
    )
}

export default ButtonHeart
