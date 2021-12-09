import { Link } from 'react-router-dom'
import { Container } from './productCard.styles'

import placeholder from '../../../assets/images/placeholder.png'

const ProductCard = ({ imageHeight, width, height, objProductDetails }) => {
    const style = { width: '100%', height: imageHeight }

    return (
        <Container width={width} height={height}>
            <div className="product-img-wrapper">
                <div>
                    <Link
                        to={{
                            pathname: '/product',
                            state: { id: objProductDetails.id },
                        }}
                    >
                        <img
                            src={objProductDetails.urlImage || placeholder}
                            alt=""
                            // style={style}
                        />
                    </Link>
                </div>
                <div>
                    {/* <CircleButton IconName="FavoriteEmpty" onClick="" /> */}
                </div>
            </div>
            <div className="product-content">
                <h3>{objProductDetails.productName}</h3>
                <div className="product-properties">
                    <p>
                        Location:{' '}
                        <span>{objProductDetails.productLocation}</span> |
                        Taste:{' '}
                        <span>{objProductDetails.productTaste.join()}</span>
                    </p>

                    <p>
                        Roast Level:{' '}
                        <span>{objProductDetails.productRoastLevel}</span>
                    </p>
                </div>
                <div className="product-price">
                    <h4>
                        ${objProductDetails.productPrice} CAD{' '}
                        <span>/ {objProductDetails.productUnit}g</span>
                    </h4>
                </div>
            </div>
        </Container>
    )
}

export default ProductCard
