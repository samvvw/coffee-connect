import { FarmMyProductsWrapper } from './farmDashboardMyProducts.styles'
import Button from '../../button/button'
import { theme } from '../../../theme/theme'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../../../context/userContext/userContext'
import { useHistory } from 'react-router-dom'
import OffCanvas from '../farmDashboardOffcanvas/farmDashboardOffcanvas'

import FarmDashboardProductCardSection from '../farmDashboardProductCardSection/farmDashboardProductCardSection'

import ProductCard from '../productCard/productCard'

export default function FarmDashboardMyProducts() {
    const [myProducts, setMyProducts] = useState()
    const [totalProducts, setTotalProducts] = useState()
    const [hasProducts, setHasProducts] = useState(false)
    const { user } = useContext(UserContext)
    const history = useHistory()
    /*Delete farmID after conect*/
    let farmID = '' //'61808eb787ad9fd90a35acdd'

    if (user.farms.length > 0) {
        farmID = user.farms[0]
        // console.log('farmId', farmID)
    } else {
        // console.log('No farms')
        history.push('/my-farm')
    }
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

                if (data.length > 0) {
                    setHasProducts(true)
                }

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
            .map((product, index) => {
                return <ProductCard objProductDetails={product} key={index} />
            })
    }

    // let hasProducts = false

    // if (myProducts) {
    //     hasProducts = true
    // }
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
                                width="221px"
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
                                width="221px"
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
