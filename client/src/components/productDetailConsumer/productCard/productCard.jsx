import CircleButton from '../../circleButton/circleButton'
import axios from 'axios'
import placeHolder from '../../../assets/images/placeholder.png'
import {
    Container,
    DetailsContainer,
    DetailsContainerChild,
    Label,
} from './productCard.styles'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../../context/userContext/userContext'
import { useState } from 'react'
import { useEffect } from 'react'
import { api } from '../../../config/api'

const ProductCard = ({ width, height, product, farmID }) => {
    const { user } = useContext(UserContext)
    const [liked, setLiked] = useState(false)

    const handleLike = () => {
        const token = localStorage.getItem('token')
        axios
            .put(`${api.farms}/${farmID}/product/${product.data._id}/likes`, {
                token,
            })
            .then((res) => {
                setLiked((prevLiked) => !prevLiked)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        if (user?.id && product?.data?.likes?.includes(user?.id)) {
            setLiked(true)
        }
    }, [])

    return (
        <Container width={width} height={height}>
            <div id="imageContainer">
                <div>
                    <Link
                        to={{
                            pathname: '/product-detail',
                            state: {
                                idProduct: product.data._id,
                                farmID: farmID,
                            },
                        }}
                    >
                        <img
                            src={product.data.picture[0] || placeHolder}
                            alt=""
                        />
                    </Link>
                </div>
                {user.id && (
                    <div onClick={handleLike}>
                        {!liked ? (
                            <CircleButton IconName="FavoriteEmpty" />
                        ) : (
                            <CircleButton IconName="FavoriteFull" />
                        )}
                    </div>
                )}
            </div>
            <DetailsContainer>
                <DetailsContainerChild gridColumn="1/2" gridRow="1/2">
                    <Label fontSize="1rem" fontWeight="Bold">
                        {product.data.productName}
                    </Label>
                </DetailsContainerChild>
                <DetailsContainerChild gridColumn="1/2" gridRow="2/3">
                    <div className="description">
                        <Label fontSize=".7rem">
                            {product.data.description}
                        </Label>
                    </div>
                </DetailsContainerChild>
                <DetailsContainerChild gridColumn="1/2" gridRow="3/4">
                    <Label fontSize="1rem" fontWeight="Bold">
                        ${product.data.sizePrice[0].price}
                        <Label fontSize=".6rem">
                            /{product.data.sizePrice[0].size}g
                        </Label>
                    </Label>
                </DetailsContainerChild>
            </DetailsContainer>
        </Container>
    )
}

export default ProductCard
