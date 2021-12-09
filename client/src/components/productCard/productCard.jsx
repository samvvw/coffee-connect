import Image from '../image/image'
import {
    Container,
    DetailsContainer,
    DetailsContainerChild,
    Label,
} from './productCard.styles'

const ProductCard = ({
    urlImage,
    imageWidth,
    imageHeight,
    width,
    height,
    objProductDetails,
}) => {
    // console.log('product', urlImage)

    return (
        <Container width={width} height={height}>
            <Image
                urlImg={urlImage}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
            />
            <DetailsContainer>
                <DetailsContainerChild gridColumn="1/4" gridRow="1/2">
                    <Label fontSize="1rem" fontWeight="Bold">
                        {objProductDetails.productName}
                    </Label>
                </DetailsContainerChild>
                <DetailsContainerChild gridColumn="4/5" gridRow="1/2">
                    <Label fontSize="1rem" fontWeight="Bold">
                        ${objProductDetails.productPrice}
                        <Label fontSize=".6rem">
                            /{objProductDetails.productUnit}
                        </Label>
                    </Label>
                </DetailsContainerChild>
                <DetailsContainerChild gridColumn="1/5" gridRow="2/3">
                    <Label fontSize=".7rem">
                        Location: {objProductDetails.productLocation} | Taste:{' '}
                        {objProductDetails.productTaste}
                    </Label>
                </DetailsContainerChild>
                <DetailsContainerChild gridColumn="1/5" gridRow="3/4">
                    <Label fontSize=".7rem">
                        Roast level: {objProductDetails.productRoastLevel}
                    </Label>
                </DetailsContainerChild>
            </DetailsContainer>
        </Container>
    )
}

export default ProductCard
