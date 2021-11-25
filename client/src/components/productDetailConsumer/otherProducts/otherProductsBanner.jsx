import { Container } from './otherProductsBanner.styles'
import ProductCard from '../productCard/productCard'

const OtherProductsBanner = ({ products, farmID }) => {
    return (
        <Container>
            <h3>Other products from this farmer</h3>
            <div className="productList">
                {products.map((product) => (
                    <ProductCard
                        key={product.data._id}
                        width={'270px'}
                        height="auto"
                        product={product}
                        farmID={farmID}
                    />
                ))}
            </div>
        </Container>
    )
}

export default OtherProductsBanner
