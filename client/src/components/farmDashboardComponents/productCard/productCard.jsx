import Image from '../../image/image'
import CircleButton from '../../circleButton/circleButton'
import {
    Container,
    DetailsContainer,
    DetailsContainerChild,
    Label,
} from './productCard.styles'

const ProductCard = ({
    imageWidth,
    imageHeight,
    width,
    height,
    objProductDetails,
    key,
}) => {
    const style = { width: '100%', height: imageHeight }
    return (
        <Container width={width} height={height}>
            <div id="imageContainer">
                <div>
                    {/* <Image
                        urlImage={objProductDetails.urlImage}
                        imageWidth={imageWidth}
                        imageHeight={imageHeight}
                    /> */}
                    <img
                        src={objProductDetails.urlImage}
                        alt=""
                        style={style}
                    />
                </div>
                <div>
                    <CircleButton IconName="FavoriteEmpty" onClick="" />
                </div>
            </div>
            <DetailsContainer>
                <DetailsContainerChild gridColumn="1/2" gridRow="1/2">
                    <Label fontSize="1rem" fontWeight="Bold">
                        {objProductDetails.productName}
                    </Label>
                </DetailsContainerChild>
                <DetailsContainerChild gridColumn="1/2" gridRow="2/3">
                    <div id="location">
                        <div>
                            <p>
                                Location:{' '}
                                <span>{objProductDetails.productLocation}</span>
                                | Taste:{' '}
                                <span>{objProductDetails.productTaste}</span>
                            </p>
                        </div>
                        <div>
                            <p>
                                Roast Level:{' '}
                                <span>
                                    {objProductDetails.productRoastLevel}
                                </span>
                            </p>
                        </div>
                    </div>
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
