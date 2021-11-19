import Image from '../../image/image'
import CircleButton from '../../circleButton/circleButton'
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
    console.log('product', urlImage)

    return (
        <Container width={width} height={height}>
            <div id="imageContainer">
                <div>
                    <Image
                        urlImg={urlImage}
                        imageWidth={imageWidth}
                        imageHeight={imageHeight}
                    />
                </div>
                <div>
                    <CircleButton IconName="FavoriteEmpty" />
                </div>
            </div>
            <DetailsContainer>
                <DetailsContainerChild gridColumn="1/2" gridRow="1/2">
                    <Label fontSize="1rem" fontWeight="Bold">
                        {objProductDetails.productName}
                    </Label>
                </DetailsContainerChild>
                <DetailsContainerChild gridColumn="1/2" gridRow="2/3">
                    <Label fontSize=".7rem">
                        {objProductDetails.productDescription}
                    </Label>
                </DetailsContainerChild>
                <DetailsContainerChild gridColumn="1/2" gridRow="3/4">
                    <Label fontSize="1rem" fontWeight="Bold">
                        ${objProductDetails.productPrice}
                        <Label fontSize=".6rem">
                            /{objProductDetails.productUnit}
                        </Label>
                    </Label>
                </DetailsContainerChild>
            </DetailsContainer>
        </Container>
    )
}

export default ProductCard
