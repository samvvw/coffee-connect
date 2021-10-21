import Image from '../../image/image'
import Button from '../../button/button'
import StarsReview from '../starsReview/starsReview'
import placeholder from '../../../assets/images/placeholder.png'
import {
    CardContainer,
    InfoContainer,
    Metadata,
    Description,
    Row,
    ProductName,
    ProductPrice,
} from './productCard.styles'

const ProductCard = ({ product }) => {
    return (
        <CardContainer>
            <Image urlImg={placeholder} width="352px" />
            <InfoContainer>
                <Metadata>
                    <Row>
                        <ProductName>{product.name}</ProductName>
                        <ProductPrice>
                            {product.price}
                            <span>/lb</span>
                        </ProductPrice>
                    </Row>
                    <p>
                        Location: {product.location} | Taste: {product.taste}
                    </p>
                    <p>Roast Level: {product.roastLevel}</p>
                </Metadata>
                <Description>
                    <p>{product.description}</p>

                    <Row>
                        <p>
                            <StarsReview review={product.review} />
                            <span>({product.totalReviews} reviews)</span>
                        </p>
                        <Button title="Learn more" />
                    </Row>
                </Description>
            </InfoContainer>
        </CardContainer>
    )
}

export default ProductCard
