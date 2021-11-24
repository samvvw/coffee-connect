import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react'

import { CarouselContainer } from './productDetailImagesCarousel.styles'
import CircleButton from '../../circleButton/circleButton'

const ProductDetailImagesCarousel = ({ urlsArray }) => {
    const [index, setIndex] = useState(0)

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
                    <CircleButton IconName="FavoriteFull" buttonBgc="white" />
                    <CircleButton IconName="Share" buttonBgc="white" />
                </div>
            </CarouselContainer>
        </div>
    )
}

export default ProductDetailImagesCarousel
