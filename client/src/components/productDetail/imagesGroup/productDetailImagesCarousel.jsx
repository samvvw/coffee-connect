import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react'

import { CarouselContainer } from './productDetailImagesCarousel.styles'

const ProductDetailImagesCarousel = ({ urlsArray }) => {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }

    return (
        <CarouselContainer>
            <Carousel
                fade
                // className="h-100"
                variant="dark"
                activeIndex={index}
                onSelect={handleSelect}
                nextLabel={''}
                prevLabel={''}
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={urlsArray.urlsArray[0]}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={urlsArray.urlsArray[1]}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={urlsArray.urlsArray[2]}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={urlsArray.urlsArray[3]}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={urlsArray.urlsArray[4]}
                        alt=""
                    />
                </Carousel.Item>
            </Carousel>
        </CarouselContainer>
    )
}

export default ProductDetailImagesCarousel
