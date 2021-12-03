import CircleButton from '../../circleButton/circleButton'
import placeHolder from '../../../assets/images/placeholder.png'
import {
    Container,
    DetailsContainer,
    DetailsContainerChild,
    Label,
} from './productCard.styles'
import { Link } from 'react-router-dom'

const ProductCard = ({ width, height, product, farmID }) => {
    return (
        <Container width={width} height={height}>
            <div id="imageContainer">
                <div>
                    <Link
                        to={{
                            pathname: '/product-detail',
                            state: {
                                idProduct: product.data._id,
                                farmID: farmID,
                            },
                        }}
                    >
                        <img
                            src={product.data.picture[0] || placeHolder}
                            alt=""
                        />
                    </Link>
                </div>
                <div>
                    <CircleButton IconName="FavoriteEmpty" />
                </div>
            </div>
            <DetailsContainer>
                <DetailsContainerChild gridColumn="1/2" gridRow="1/2">
                    <Label fontSize="1rem" fontWeight="Bold">
                        {product.data.productName}
                    </Label>
                </DetailsContainerChild>
                <DetailsContainerChild gridColumn="1/2" gridRow="2/3">
                    <div className="description">
                        <Label fontSize=".7rem">
                            {product.data.description}
                        </Label>
                    </div>
                </DetailsContainerChild>
                <DetailsContainerChild gridColumn="1/2" gridRow="3/4">
                    <Label fontSize="1rem" fontWeight="Bold">
                        ${product.data.sizePrice[0].price}
                        <Label fontSize=".6rem">
                            /{product.data.sizePrice[0].size}g
                        </Label>
                    </Label>
                </DetailsContainerChild>
            </DetailsContainer>
        </Container>
    )
}

export default ProductCard
