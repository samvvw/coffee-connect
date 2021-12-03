import { StyledButton } from './buttonBookMark.styles'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import BookmarkEmptyIcon from '@material-ui/icons/TurnedInNot'

const ButtonBookMark = ({
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
            {liked ? <BookmarkIcon /> : <BookmarkEmptyIcon />}
            <span>Save</span>
        </StyledButton>
    )
}

export default ButtonBookMark
