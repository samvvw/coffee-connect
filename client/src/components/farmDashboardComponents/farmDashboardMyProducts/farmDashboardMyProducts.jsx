import { FarmMyProductsWrapper } from './farmDashboardMyProducts.styles'
import Button from '../../button/button'

export default function FarmDashboardMyProducts() {
    return (
        <>
            <FarmMyProductsWrapper>
                <h1>My Products</h1>
                <Button title="Add a new product" />
            </FarmMyProductsWrapper>
        </>
    )
}
