import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import placeholder from '../../../assets/images/placeholder.png'
import { CardContainer } from './productCard.styles'

const ProductCard = ({ data }) => {
    return (
        <CardContainer>
            <div className="image-container">
                <img src={placeholder} alt="" />
            </div>
            <div className="product">
                <p className="product__title">{data.productName}</p>
                <div className="product__metadata">
                    <p className="product__metadata__location">
                        Location: <span>{data.location} </span>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                    </p>
                    <p className="product__metadata__taste">
                        Taste: <span>{data.taste[0]} </span>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                    </p>
                    <p className="product__metadata__roastLevel">
                        Roast Level: <span>{data.roastLevel}</span>
                    </p>
                </div>
                <div className="product__info">
                    <p className="product__info__description">
                        {data.description}
                    </p>
                    <ArrowForwardIcon
                        className="product__info__arrow"
                        fontSize="large"
                    />
                </div>
                <div className="product__price">
                    <p>
                        <span>${data.sizePrice[0]?.price} CAD</span> /{' '}
                        {data.sizePrice[0]?.size}g
                    </p>
                </div>
            </div>
        </CardContainer>
    )
}

export default ProductCard
