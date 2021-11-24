import { StyledButton } from './buttonHeart.styles'
import FavoriteEmptyIcon from '@material-ui/icons/FavoriteBorder'

const ButtonHeart = ({
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
            <FavoriteEmptyIcon />
            <span>Save</span>
        </StyledButton>
    )
}

export default ButtonHeart
