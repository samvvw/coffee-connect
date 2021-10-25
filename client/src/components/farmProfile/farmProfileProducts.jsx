import Button from '../button/button'
import ProductCard from '../productCard/productCard'
import { Container } from './farmProfileProducts.styles'

const FarmProfileProducts = ({ imageWidth, arrObjProductDetails }) => {
    const cardWidth = '100%'

    return (
        <Container>
            <h5>My Products</h5>
            <div id="divProducts">
                <ProductCard
                    urlImage={
                        arrObjProductDetails[0].productUrlImage.placeHolder
                    }
                    imageWidth={imageWidth}
                    imageHeight="auto"
                    width={cardWidth}
                    height="auto"
                    objProductDetails={arrObjProductDetails[0]}
                />
                <ProductCard
                    urlImage={
                        arrObjProductDetails[1].productUrlImage.placeHolder
                    }
                    imageWidth={imageWidth}
                    imageHeight="auto"
                    width={cardWidth}
                    height="auto"
                    objProductDetails={arrObjProductDetails[1]}
                />
                <ProductCard
                    urlImage={
                        arrObjProductDetails[2].productUrlImage.placeHolder
                    }
                    imageWidth={imageWidth}
                    imageHeight="auto"
                    width={cardWidth}
                    height="auto"
                    objProductDetails={arrObjProductDetails[2]}
                />
            </div>
            <div id="divButton">
                <Button
                    title="See all the products"
                    onClick=""
                    backgroundColor="black"
                    textColor="white"
                />
            </div>
        </Container>
    )
}

export default FarmProfileProducts
