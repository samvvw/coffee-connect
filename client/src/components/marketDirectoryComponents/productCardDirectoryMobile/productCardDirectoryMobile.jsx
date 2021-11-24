import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import BookmarkEmptyIcon from '@material-ui/icons/TurnedInNot'
import placeholder from '../../../assets/images/placeholder.png'
import { CardContainer } from './productCardDirectoryMobile.styles'
import { theme } from '../../../theme/theme'
import { api } from '../../../config/api'

const ProductCardDirectoryMobile = ({ data, userId, userType }) => {
    const [bookmark, setBookmark] = useState(false)

    const handleBookmark = (farmId) => {
        const token = localStorage.getItem('token')
        axios
            .put(`${api.farms}/${farmId}/bookmarks`, { token })
            .then((res) => {
                setBookmark((prevBookmark) => !prevBookmark)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        if (userId && data.bookmarks.includes(userId)) {
            setBookmark(true)
        }
    }, [])

    return (
        <CardContainer>
            <div className="image-container">
                <img
                    src={
                        data.logo === 'Default Picture URL'
                            ? placeholder
                            : data.logo
                    }
                    alt=""
                />
                {userId && userType && userType !== 'farmer' && (
                    <div
                        className="bookmark-container"
                        onClick={() => handleBookmark(data._id)}
                    >
                        {bookmark ? (
                            <BookmarkIcon />
                        ) : (
                            <BookmarkEmptyIcon
                                style={{ fill: theme.pallette.black[400] }}
                            />
                        )}
                    </div>
                )}
            </div>
            <div className="farm">
                <div className="top-container">
                    <p className="farm__title">{data.name}</p>
                </div>
                <div className="farm__metadata">
                    <p className="farm__metadata">
                        Location: <span>{data.location} </span>
                    </p>
                </div>
            </div>
        </CardContainer>
    )
}

export default ProductCardDirectoryMobile
