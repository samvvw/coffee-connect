import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import placeholder from '../../../assets/images/placeholder.png'
import { api } from '../../../config/api'
import { theme } from '../../../theme/theme'
import { CardContainer } from './productCard.styles'

const ProductCard = ({ data, userId, userType }) => {
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
                    <Link
                        to={{
                            pathname: '/product-detail',
                            state: {
                                farmID: data.farmId,
                                idProduct: data._id,
                            },
                        }}
                    >
                        <img src={data.picture[0]} alt="" />
                    </Link>
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
                <p className="product__title">
                    <Link
                        to={{
                            pathname: '/product-detail',
                            state: {
                                farmID: data.farmId,
                                idProduct: data._id,
                            },
                        }}
                    >
                        {data.productName}
                    </Link>
                </p>
                <div className="product__metadata">
                    <p className="product__metadata__location">
                        Location: <span>{data.location} </span>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                    </p>
                    <p className="product__metadata__taste">
                        Taste: <span>{data.taste[0]} </span>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                    </p>
                    <p className="product__metadata__roastLevel">
                        Roast Level: <span>{data.roastLevel}</span>
                    </p>
                </div>
                <div className="product__info">
                    <p className="product__info__description">
                        {data.description}
                    </p>
                    <ArrowForwardIcon
                        className="product__info__arrow"
                        fontSize="large"
                    />
                </div>
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

export default ProductCard
