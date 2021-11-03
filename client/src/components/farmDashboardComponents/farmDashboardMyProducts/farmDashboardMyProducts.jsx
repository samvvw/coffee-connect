import { FarmMyProductsWrapper } from './farmDashboardMyProducts.styles'
import Button from '../../button/button'
import { theme } from '../../../theme/theme'
import { useEffect, useState } from 'react'

import OffCanvas from '../farmDashboardOffcanvas/farmDashboardOffcanvas'

import FarmDashboardProductCardSection from '../farmDashboardProductCardSection/farmDashboardProductCardSection'
// import FarmDashboardProductCard from '../farmDashboardProductCard/farmDashboardProductCard'

import ProductCard from '../productCard/productCard'

import placeholder from '../../../assets/images/placeholder.png'

export default function FarmDashboardMyProducts() {
    const [matches, setMatches] = useState(
        window.matchMedia(`(min-width: ${theme.layout.desktop})`).matches
    )
    useEffect(() => {
        const handler = (e) => setMatches(e.matches)
        window
            .matchMedia(`(min-width: ${theme.layout.desktop})`)
            .addListener(handler)
    }, [])

    /*variables to control offcanvas - new product*/
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    /*----------------------------------------------*/

    const arrObjProductDetails = [
        {
            id: 1,
            urlImage: placeholder,
            productName: 'Whirlwind Coffe Co. Ethiopia',
            productPrice: '18.99 CAD',
            productUnit: '100gr',
            productLocation: 'Colombia',
            productTaste: 'Sweet',
            productRoastLevel: 'Medium-dark',
        },
        {
            id: 2,
            urlImage: placeholder,
            productName: 'Fire Dept. Coffe Original',
            productPrice: '18.99 CAD',
            productUnit: '100g',
            productLocation: 'Colombia',
            productTaste: 'Sweet',
            productRoastLevel: 'Medium-dark',
        },
        {
            id: 3,
            urlImage: placeholder,
            productName: 'Howler Coffee Co. Bucksaw',
            productPrice: '18.99 CAD',
            productUnit: '100g',
            productLocation: 'Colombia',
            productTaste: 'Sweet',
            productRoastLevel: 'Medium-dark',
        },
        {
            id: 4,
            urlImage: placeholder,
            productName: 'Onyx Coffee Lab Colombia',
            productPrice: '18.99',
            productUnit: '100g',
            productDescription: 'Aponte Village',
            productLocation: 'Colombia',
            productTaste: 'Sweet',
            productRoastLevel: 'Medium-dark',
        },
    ]
    function handleRenderProducts(productList) {
        return productList.map((product) => {
            return <ProductCard objProductDetails={product} key={product.id} />
        })
    }

    let hasProducts = false
    if (arrObjProductDetails.length > 0) {
        hasProducts = true
    }
    return (
        <>
            <FarmMyProductsWrapper theme={theme}>
                <div id="divMyProducts">
                    <div>
                        <h2>My Products</h2>
                    </div>
                    <div id="divAddProducts">
                        {/* button in the header when there's products */}
                        {matches && hasProducts && (
                            //desktop
                            <Button
                                title="Add a new products"
                                onClick={handleShow}
                            />
                        )}
                        {/* mobile */}
                        {!matches && hasProducts && (
                            <Button title="+" onClick={handleShow} />
                        )}
                    </div>
                </div>

                {/* button when there's no products */}
                {!hasProducts && (
                    <div id="divAddProductsEmpty">
                        <p>Welcome to your newly created farmer's dashboard.</p>
                        <p>To get started, add your first product.</p>
                        {matches && (
                            //desktop
                            <Button
                                title="Add a new product"
                                onClick={handleShow}
                            />
                        )}
                        {/* mobile */}
                        {!matches && <Button title="+" onClick={handleShow} />}
                    </div>
                )}
                <FarmDashboardProductCardSection>
                    {handleRenderProducts(arrObjProductDetails)}
                </FarmDashboardProductCardSection>
                <>
                    <OffCanvas
                        handleClose={handleClose}
                        handleShow={handleShow}
                        show={show}
                    />
                </>
            </FarmMyProductsWrapper>
        </>
    )
}
