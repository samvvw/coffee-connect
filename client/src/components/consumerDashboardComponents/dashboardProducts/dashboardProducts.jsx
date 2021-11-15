import FarmDashboardProductCardSection from '../../farmDashboardComponents/farmDashboardProductCardSection/farmDashboardProductCardSection'
import { DashboardProductCard } from './dashboardProducts.styles'
export default function DashboardProducts({ likedProducts }) {
    return (
        <>
            <FarmDashboardProductCardSection>
                {likedProducts?.map((product) => {
                    return product.sizePrice.map((size) => {
                        if (size.size && size.price) {
                            const productProps = {
                                image: product.picture[0],
                                name: product.productName,
                                location: product.location,
                                taste: product.taste.join(', '),
                                roastLevel: product.roastLevel,
                                price: size.price,
                                size: size.size,
                            }
                            return (
                                <DashboardProductCard product={productProps} />
                            )
                        } else {
                            return ''
                        }
                    })
                })}
            </FarmDashboardProductCardSection>
        </>
    )
}
