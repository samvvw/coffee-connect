import FavoriteFullIcon from '@material-ui/icons/Favorite'
import FavoriteEmptyIcon from '@material-ui/icons/FavoriteBorder'

import ShareIcon from '@material-ui/icons/Share'

import BookmarkIcon from '@material-ui/icons/Bookmark'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'

import { Button } from './circleButton.style'

const CircleButon = ({ IconName, onClick, buttonBgc }) => {
    switch (IconName) {
        case 'FavoriteFull':
            return (
                <Button onClick={onClick} buttonBgc={buttonBgc}>
                    <FavoriteFullIcon
                        fontSize="medium"
                        style={{ fill: 'red' }}
                    />
                </Button>
            )
        case 'FavoriteEmpty':
            return (
                <Button onClick={onClick} buttonBgc={buttonBgc}>
                    <FavoriteEmptyIcon
                        fontSize="medium"
                        style={{ fill: 'red' }}
                    />
                </Button>
            )
        case 'BookmarkBorderIcon':
            return (
                <Button onClick={onClick} buttonBgc={buttonBgc}>
                    <BookmarkBorderIcon
                        fontSize="medium"
                        style={{ fill: 'black' }}
                    />
                </Button>
            )
        case 'BookmarkIcon':
            return (
                <Button onClick={onClick} buttonBgc={buttonBgc}>
                    <BookmarkIcon fontSize="medium" style={{ fill: 'black' }} />
                </Button>
            )
        case 'Share':
            return (
                <Button onClick={onClick} buttonBgc={buttonBgc}>
                    <ShareIcon fontSize="medium" style={{ fill: 'black' }} />
                </Button>
            )
        default:
            break
    }
}

export default CircleButon
