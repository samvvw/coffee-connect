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

const ProductCard = ({ data }) => {
    return (
        <CardContainer>
            <Image urlImg={placeholder} width="352px" />
            <InfoContainer>
                <Metadata>
                    <Row>
                        <ProductName>{data.name}</ProductName>
                        {data.price && (
                            <ProductPrice>
                                {data.price}
                                <span>/lb</span>
                            </ProductPrice>
                        )}
                    </Row>
                    {data.origin && <p>Origin: {data.origin}</p>}
                    {data.taste && (
                        <p>
                            Location: {data.location} | Taste: {data.taste}
                        </p>
                    )}
                    {!data.taste && <p>Location: {data.location}</p>}
                    {data.roastLevel && <p>Roast Level: {data.roastLevel}</p>}
                    {data.altitude && <p>Altitude: {data.altitude}</p>}
                </Metadata>
                <Description>
                    <p>{data.description}</p>

                    <Row>
                        <p>
                            <StarsReview review={data.review} />
                            <span>({data.totalReviews} reviews)</span>
                        </p>
                        {data.price && <Button title="Learn more" />}
                        {!data.price && <Button title="Explore Profile" />}
                    </Row>
                </Description>
            </InfoContainer>
        </CardContainer>
    )
}

export default ProductCard
