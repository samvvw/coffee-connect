import { useState, useEffect } from 'react'
import axios from 'axios'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import placeholder from '../../../assets/images/placeholder.png'
import { api } from '../../../config/api'
import { theme } from '../../../theme/theme'
import { CardContainer } from './productCardMobile.styles'

const ProductCardMobile = ({ data, userId, userType }) => {
    const [liked, setLiked] = useState(false)

    const handleLike = () => {
        const token = localStorage.getItem('token')
        axios
            .put(`${api.farms}/${data.farmId}/product/${data._id}/likes`, {
                token,
            })
            .then((res) => {
                setLiked((prevLiked) => !prevLiked)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        if (userId && data.likes.includes(userId)) {
            setLiked(true)
        }
    }, [])

    return (
        <CardContainer>
            <div className="image-container">
                {data.picture.length > 0 && (
                    <img src={data.picture[0]} alt="" />
                )}
                {data.picture.length === 0 && <img src={placeholder} alt="" />}
                {userId && userType && userType !== 'farmer' && (
                    <div className="like-container" onClick={handleLike}>
                        {liked ? (
                            <Favorite
                                style={{ fill: theme.pallette.accent2.light }}
                            />
                        ) : (
                            <FavoriteBorder
                                style={{ fill: theme.pallette.accent2.light }}
                            />
                        )}
                    </div>
                )}
            </div>
            <div className="product">
                <p className="product__title">{data.productName}</p>
                <div className="product__price">
                    <p>
                        <span>${data.sizePrice[0]?.price} CAD</span> /{' '}
                        {data.sizePrice[0]?.size}g
                    </p>
                </div>
            </div>
        </CardContainer>
    )
}

export default ProductCardMobile
