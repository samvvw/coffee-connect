import { useContext } from 'react'
import { UserContext } from '../../../context/userContext/userContext'
import FarmDashboardProductCardSection from '../../farmDashboardComponents/farmDashboardProductCardSection/farmDashboardProductCardSection'
import { DashboardProductCard } from './dashboardProducts.styles'
import axios from 'axios'
export default function DashboardProducts({ likedProducts, setLikedProducts }) {
    const { token } = useContext(UserContext)
    async function handleLike(farmId, productId) {
        try {
            const data = {
                token: token,
            }
            const request = await axios.put(
                `/api/farm/${farmId}/product/${productId}/likes`,
                data
            )

            if (request) {
                const getProducts = await axios.get(
                    `/api/product/list?token=${token}`
                )

                if (getProducts) {
                    setLikedProducts(getProducts.data)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <FarmDashboardProductCardSection>
                {likedProducts?.map((product, i) => {
                    return product.sizePrice.map((size, j) => {
                        if (j === 0) {
                            if (size.size && size.price) {
                                const productProps = {
                                    image: product.picture[0],
                                    name: product.productName,
                                    location: product.location,
                                    taste: product.taste.join(', '),
                                    roastLevel: product.roastLevel,
                                    price: size.price,
                                    size: size.size,
                                    farmId: product.farmId,
                                    id: product._id,
                                }
                                return (
                                    <DashboardProductCard
                                        product={productProps}
                                        key={'product-dashboard-' + i + 1 * j}
                                        handleLike={() =>
                                            handleLike(
                                                product.farmId,
                                                product._id
                                            )
                                        }
                                    />
                                )
                            } else {
                                return ''
                            }
                        } else {
                            return ''
                        }
                    })
                })}
            </FarmDashboardProductCardSection>
        </>
    )
}
