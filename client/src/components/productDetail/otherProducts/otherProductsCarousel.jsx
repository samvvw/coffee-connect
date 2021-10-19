import ProductCard from '../../productCard/productCard'
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react'

import { CarouselContainer } from './otherProductsCarousel.styles'

const OtherProductsCarousel = ({
    arrUrlImage,
    imageWidth,
    arrObjProductDetails,
}) => {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }

    const cardWidth = '100%'

    return (
        <CarouselContainer>
            <Carousel
                fade
                variant="dark"
                activeIndex={index}
                onSelect={handleSelect}
                nextLabel={''}
                prevLabel={''}
            >
                <Carousel.Item>
                    <ProductCard
                        urlImage={arrUrlImage[0]}
                        imageWidth={imageWidth}
                        imageHeight="auto"
                        width={cardWidth}
                        height="auto"
                        objProductDetails={arrObjProductDetails[0]}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <ProductCard
                        urlImage={arrUrlImage[1]}
                        imageWidth={imageWidth}
                        imageHeight="auto"
                        width={cardWidth}
                        height="auto"
                        objProductDetails={arrObjProductDetails[1]}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <ProductCard
                        urlImage={arrUrlImage[2]}
                        imageWidth={imageWidth}
                        imageHeight="auto"
                        width={cardWidth}
                        height="auto"
                        objProductDetails={arrObjProductDetails[2]}
                    />
                </Carousel.Item>
            </Carousel>
        </CarouselContainer>
    )
}

export default OtherProductsCarousel
