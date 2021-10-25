import FavoriteFullIcon from '@material-ui/icons/Favorite'
import FavoriteEmptyIcon from '@material-ui/icons/FavoriteBorder'

import ShareIcon from '@material-ui/icons/Share'

import BookmarkIcon from '@material-ui/icons/Bookmark'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'

import { Button } from './circleButton.style'

const CircleButon = ({ IconName, onClick }) => {
    switch (IconName) {
        case 'FavoriteFull':
            return (
                <Button onClick={onClick}>
                    <FavoriteFullIcon
                        fontSize="medium"
                        style={{ fill: 'white' }}
                    />
                </Button>
            )
        case 'FavoriteEmpty':
            return (
                <Button onClick={onClick}>
                    <FavoriteEmptyIcon
                        fontSize="medium"
                        style={{ fill: 'black' }}
                    />
                </Button>
            )
        case 'BookmarkBorderIcon':
            return (
                <Button onClick={onClick}>
                    <BookmarkBorderIcon
                        fontSize="medium"
                        style={{ fill: 'black' }}
                    />
                </Button>
            )
        case 'BookmarkIcon':
            return (
                <Button onClick={onClick}>
                    <BookmarkIcon fontSize="medium" style={{ fill: 'black' }} />
                </Button>
            )
        case 'Share':
            return (
                <Button onClick={onClick}>
                    <ShareIcon fontSize="medium" style={{ fill: 'black' }} />
                </Button>
            )
        default:
            break
    }
}

export default CircleButon
