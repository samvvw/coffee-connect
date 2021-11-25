import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import BookmarkEmptyIcon from '@material-ui/icons/TurnedInNot'
import placeholder from '../../../assets/images/placeholder.png'
import { Container } from './productCardDirectory.styles'
import { theme } from '../../../theme/theme'
import { api } from '../../../config/api'

const ProductCardDirectory = ({ data, userId, userType }) => {
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
        <Container>
            <div className="image-container">
                <img
                    src={
                        data.logo === 'Default Picture URL'
                            ? placeholder
                            : data.logo
                    }
                    alt=""
                />
            </div>
            <div className="product">
                <div className="top-container">
                    <p className="product__title">{data.name}</p>
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
                <div className="product__metadata">
                    <p className="product__metadata__location">
                        Origin: <span>{data.origin} </span>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                    </p>

                    <p className="product__metadata__taste">
                        Location: <span>{data.location} </span>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                    </p>

                    <p className="product__metadata__roastLevel">
                        Altitude: <span>{data.altitude}</span>
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default ProductCardDirectory
