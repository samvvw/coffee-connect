import { FarmMyProductsWrapper } from './farmDashboardMyProducts.styles'
import Button from '../../button/button'
import { theme } from '../../../theme/theme'
import { useEffect, useState } from 'react'
import axios from 'axios'

import OffCanvas from '../farmDashboardOffcanvas/farmDashboardOffcanvas'

import FarmDashboardProductCardSection from '../farmDashboardProductCardSection/farmDashboardProductCardSection'
// import FarmDashboardProductCard from '../farmDashboardProductCard/farmDashboardProductCard'

import ProductCard from '../productCard/productCard'

// import placeholder from '../../../assets/images/placeholder.png'

export default function FarmDashboardMyProducts() {
    const [myProducts, setMyProducts] = useState()
    const [totalProducts, setTotalProducts] = useState()
    /*Delete farmID after conect*/
    const farmID = '61808eb787ad9fd90a35acdd'
    /**************************** */

    const [matches, setMatches] = useState(
        window.matchMedia(`(min-width: ${theme.layout.desktop})`).matches
    )
    useEffect(() => {
        const handler = (e) => setMatches(e.matches)
        window
            .matchMedia(`(min-width: ${theme.layout.desktop})`)
            .addListener(handler)
    }, [])

    /*Calling all products*************************/

    useEffect(() => {
        let arrObjProductDetails1 = []
        axios
            .get(`/api/farm/${farmID}`)
            .then((res) => {
                const data = res.data.allProducts
                //the array in data contains the product with max 3 sizes each, it needs to be splitted into different products depending on sizes/prices
                // console.log('respuesta data', res.data.allProducts)
                arrObjProductDetails1 = data.map((product) => {
                    return product.data.sizePrice.map((presentation) => ({
                        id: product.data._id,
                        urlImage: product.data.picture[0],
                        productName: product.data.productName,
                        productPrice: presentation.price,
                        productUnit: presentation.size,
                        productLocation: product.data.location,
                        productTaste: product.data.taste,
                        productRoastLevel: product.data.roastLevel,
                    }))
                })
                //map return as many arrays as products, need to merge them
                let merged = [].concat.apply([], arrObjProductDetails1)
                setTotalProducts(merged.length)
                setMyProducts(merged)

                // console.log('Respuesta variable', arrObjProductDetails1)
            })
            .catch((error) => console.log(error))
    }, [totalProducts])
    /********************************************** */

    /*variables to control offcanvas - new product*/
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    /*----------------------------------------------*/

    function handleRenderProducts(productList) {
        return productList
            .filter((product) => product.productPrice !== 0)
            .map((product) => {
                return (
                    <ProductCard objProductDetails={product} key={product.id} />
                )
            })
    }

    let hasProducts = false

    if (myProducts) {
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
                {hasProducts && (
                    <FarmDashboardProductCardSection>
                        {handleRenderProducts(myProducts)}
                    </FarmDashboardProductCardSection>
                )}
                <>
                    <OffCanvas
                        handleClose={handleClose}
                        handleShow={handleShow}
                        show={show}
                        setTotalProducts={setTotalProducts}
                    />
                </>
            </FarmMyProductsWrapper>
        </>
    )
}
