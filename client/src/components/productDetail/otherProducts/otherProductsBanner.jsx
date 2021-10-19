import { Container } from './otherProductsBanner.styles'
import ProductCard from '../../productCard/productCard'

const OtherProductsBanner = ({
    arrUrlImage,
    imageWidth,
    arrObjProductDetails,
}) => {
    const cardWidth = '33%'

    return (
        <Container>
            <ProductCard
                urlImage={arrUrlImage[0]}
                imageWidth={imageWidth}
                imageHeight="auto"
                width={cardWidth}
                height="auto"
                objProductDetails={arrObjProductDetails[0]}
            />
            <ProductCard
                urlImage={arrUrlImage[1]}
                imageWidth={imageWidth}
                imageHeight="auto"
                width={cardWidth}
                height="auto"
                objProductDetails={arrObjProductDetails[1]}
            />
            <ProductCard
                urlImage={arrUrlImage[2]}
                imageWidth={imageWidth}
                imageHeight="auto"
                width={cardWidth}
                height="auto"
                objProductDetails={arrObjProductDetails[2]}
            />
        </Container>
    )
}

export default OtherProductsBanner
