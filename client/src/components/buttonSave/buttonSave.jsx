import { StyledButton } from './buttonSave.styles'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'

const ButtonSave = ({
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
            <BookmarkBorderIcon />
            <span>Save</span>
        </StyledButton>
    )
}

export default ButtonSave
