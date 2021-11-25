import { Container } from './otherProductsBanner.styles'
import ProductCard from './productCard/productCard'
import Button from '../button/button'
import { theme } from '../../theme/theme'
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
            <div>
                <Button
                    title="See more products"
                    backgroundColor="white"
                    textColor={theme.pallette.primary[500]}
                    borderColor={theme.pallette.primary[500]}
                />
            </div>
        </Container>
    )
}

export default OtherProductsBanner
