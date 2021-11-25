import OtherProductsBanner from './otherProductsBanner'
import { StyledOtherProductsContainer } from './otherProducts.styles'

const OtherProducts = ({ products, farmID }) => {
    return (
        <StyledOtherProductsContainer width="100%">
            {/* {matches &&  */}
            <OtherProductsBanner products={products} farmID={farmID} />
            {/* } */}
        </StyledOtherProductsContainer>
    )
}

export default OtherProducts
