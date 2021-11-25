import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'
import { UserContext } from '../../../context/userContext/userContext'
import { CarouselContainer } from './productDetailImagesCarousel.styles'
import CircleButton from '../../circleButton/circleButton'
import { api } from '../../../config/api'

const ProductDetailImagesCarousel = ({
    urlsArray,
    farmId,
    productId,
    likes,
}) => {
    const { user } = useContext(UserContext)
    const [liked, setLiked] = useState(false)
    const [index, setIndex] = useState(0)

    const handleLike = () => {
        const token = localStorage.getItem('token')
        if (farmId && productId) {
            axios
                .put(`${api.farms}/${farmId}/product/${productId}/likes`, {
                    token,
                })
                .then((res) => {
                    setLiked((prevLiked) => !prevLiked)
                })
                .catch((err) => console.log(err))
        }
    }

    useEffect(() => {
        if (user?.id && likes?.includes(user?.id)) {
            setLiked(true)
        }
    }, [])

    const handleShare = () => {
        const width = 200
        const height = 200
        const left = (window.screen.width - 200) / 2
        const top = (window.screen.height - 200) / 4
        var fbpopup = window.open(
            `https://www.facebook.com/sharer/sharer.php?u=https://qafa.ca/`,
            'Qafa',
            `width=${width}, height=${height}, scrollbars=no, left=${left}, top=${top}`
        )
    }

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }

    return (
        <div>
            <CarouselContainer>
                <Carousel
                    fade
                    // className="h-100"
                    variant="dark"
                    activeIndex={index}
                    onSelect={handleSelect}
                    nextLabel={''}
                    prevLabel={''}
                    id="divCarousel"
                >
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-100"
                            src={urlsArray[0]}
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-100"
                            src={urlsArray[1]}
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-100"
                            src={urlsArray[2]}
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-100"
                            src={urlsArray[3]}
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-100"
                            src={urlsArray[4]}
                            alt=""
                        />
                    </Carousel.Item>
                </Carousel>
                <div id="divCircleButtons">
                    <CircleButton
                        IconName={liked ? 'FavoriteFull' : 'FavoriteEmpty'}
                        buttonBgc="white"
                        onClick={handleLike}
                    />
                    <CircleButton
                        IconName="Share"
                        buttonBgc="white"
                        onClick={handleShare}
                    />
                </div>
            </CarouselContainer>
        </div>
    )
}

export default ProductDetailImagesCarousel
