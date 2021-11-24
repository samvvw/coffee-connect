// import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Container } from './productConsumer.styles'
import { theme } from '../../theme/theme'
import placeHolder from '../../assets/images/placeholder.png'
// import { UserContext } from '../../context/userContext/userContext'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ArrowBack from '@material-ui/icons/ArrowBack'
import ProductDetailHeader from '../../components/productDetailConsumer/header/productDetailHeader'
import ProductDetailImages from '../../components/productDetailConsumer/imagesGroup/productDetailImages'
import ProductDetailCard from '../../components/productDetailConsumer/productDetailCard/productDetailCard'

import ConnectWithFarmer from '../../components/productDetailConsumer/connectWithFarmerCard/connectWithFarmerCard'
import OtherProducts from '../../components/productDetailConsumer/otherProducts/otherProducts'

import Map from '../../components/map/map'

const ProductConsumer = (props) => {
    // const history = useHistory()
    // const { user, isTokenExpired } = useContext(UserContext)
    const [productData, setProductData] = useState()
    // const [farmID, setFarmID] = useState()
    const [coordinates, setCoordinates] = useState()
    const [dataFarn, setDataFarn] = useState()
    const [products, setProducts] = useState()

    /*----------------------------------------------*/

    let farmID = ''
    let idProduct = ''

    if (props.location.state.farmID) {
        idProduct = props.location.state.idProduct
        farmID = props.location.state.farmID
    } else {
        idProduct = '6195a9f8f068810e03726978'
        farmID = '61931107a3a69e9788cba0e8'
    }

    function convert(str) {
        var date = new Date(str),
            mnth = ('0' + (date.getMonth() + 1)).slice(-2),
            day = ('0' + date.getDate()).slice(-2)
        return [day, mnth, date.getFullYear()].join('-')
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [idProduct])

    useEffect(() => {
        if (farmID) {
            axios
                .get(`/api/farm/${farmID}/product/${idProduct}`)
                .then((res) => {
                    // console.log('infor of product', res.data.data)
                    setProductData(res.data.data)

                    const result = [
                        [
                            +res.data.data.coordinate[0],
                            +res.data.data.coordinate[1],
                        ],
                    ]
                    setCoordinates(result)

                    axios
                        .get(`/api/farm/${farmID}`)
                        .then((res) => {
                            // console.log('Farm Data', res.data.allProducts)
                            setProducts(res.data.allProducts)
                            setDataFarn(res.data.data)
                        })
                        .catch((error) => {
                            console.log('Product Detail:', error)
                        })
                })
                .catch((error) => {
                    console.log('Product Detail:', error)
                })
        }
    }, [farmID, idProduct])

    // *******************************************************

    const [matches, setMatches] = useState(
        window.matchMedia(`(min-width: ${theme.layout.desktop}`).matches
    )

    useEffect(() => {
        const handler = (e) => setMatches(e.matches)
        window
            .matchMedia(`(min-width: ${theme.layout.desktop}`)
            .addListener(handler)
    }, [])

    return (
        <>
            {productData && dataFarn && (
                <>
                    <Container>
                        <div id="subContainer">
                            <div id="headerDesktop">
                                {matches && (
                                    <>
                                        {/* <div id="divBannerHeader">
                                            <div id="divLink">
                                                <Link to="/my-products">
                                                    <ArrowBack
                                                        style={{
                                                            fill: theme.pallette
                                                                .black[400],
                                                        }}
                                                    />
                                                    <p>
                                                        My Products /
                                                        <span>
                                                            {'  '}
                                                            {
                                                                productData.productName
                                                            }
                                                        </span>
                                                    </p>
                                                </Link>
                                            </div>
                                        </div> */}

                                        <ProductDetailHeader
                                            backgroundColor="white"
                                            productName={
                                                productData.productName
                                            }
                                            farmName={productData.farmName}
                                            origin={productData.origin}
                                            location={productData.location}
                                            altitude={productData.altitude}
                                        />
                                    </>
                                )}
                            </div>
                            {/* 2 Group of images */}
                            <div id="images">
                                {!matches && (
                                    <div id="divBanner">
                                        <div id="divLink">
                                            <Link to="/my-products">
                                                <ArrowBack
                                                    style={{
                                                        fill: theme.pallette
                                                            .black[400],
                                                    }}
                                                />
                                            </Link>
                                        </div>
                                        <div>
                                            <ProductDetailImages
                                                urlsArray={productData.picture}
                                                width="100%"
                                            />
                                        </div>
                                    </div>
                                )}

                                {matches && (
                                    <div className="imagesWrapper">
                                        <div className="'picture">
                                            <img
                                                src={
                                                    productData.picture[0] ||
                                                    placeHolder
                                                }
                                                alt=""
                                            ></img>
                                        </div>
                                        <div className="'picture">
                                            <img
                                                src={
                                                    productData.picture[1] ||
                                                    placeHolder
                                                }
                                                alt=""
                                            ></img>
                                        </div>
                                        <div className="'picture">
                                            <img
                                                src={
                                                    productData.picture[2] ||
                                                    placeHolder
                                                }
                                                alt=""
                                            ></img>
                                        </div>
                                        <div className="'picture">
                                            <img
                                                src={
                                                    productData.picture[3] ||
                                                    placeHolder
                                                }
                                                alt=""
                                            ></img>
                                        </div>
                                    </div>
                                )}

                                {/* <div>
                                <CircleButton IconName="FavoriteFull" />
                                <CircleButton IconName="Share" />
                            </div> */}
                            </div>
                            {/* 1 header */}
                            <div id="header">
                                {!matches && (
                                    <ProductDetailHeader
                                        backgroundColor="white"
                                        productName={productData.productName}
                                        farmName={productData.farmName}
                                        origin={productData.origin}
                                        location={productData.location}
                                        altitude={productData.altitude}
                                    />
                                )}
                            </div>
                            {/* 3 Product detail card */}
                            <div id="detailCard">
                                <ProductDetailCard
                                    // width="300px"
                                    productName={
                                        productData.productName +
                                        ', ' +
                                        productData.farmName
                                    }
                                    objProductValues={{
                                        roastLevel: productData.roastLevel,
                                        coffeeProcess:
                                            productData.coffeeProcess,
                                        coffeeVariety:
                                            productData.coffeeVariety,
                                        roastDate: convert(
                                            productData.roastDate
                                        ),
                                    }}
                                    objArraySizes={productData.sizePrice}
                                />
                            </div>
                            {/* 5 Product description */}
                            <div id="productDescription">
                                <h5>Product Description</h5>
                                <div id="divTasteAromas">
                                    <div id="divTaste">
                                        <h6>Taste:</h6>
                                        <p>{productData.taste.join(', ')}</p>
                                    </div>
                                    <div id="divAromas">
                                        <h6>Aromas:</h6>
                                        <p>{productData.aromas.join(', ')}</p>
                                    </div>
                                </div>

                                <p>{productData.description}</p>
                            </div>
                            {/* 8 Map */}
                            <div id="map">
                                <div>
                                    <p>Location</p>
                                </div>
                                {coordinates && (
                                    <Map
                                        data={coordinates}
                                        style={{
                                            width: '100%',
                                            height: '300px',
                                        }}
                                    />
                                )}
                            </div>
                            {/* 4 Connect with farmer */}
                            <div id="connectWFarmer">
                                <ConnectWithFarmer
                                    objMemberSince={{
                                        imgUrl: dataFarn.logo,
                                        farmName: dataFarn.name,
                                        memberSince: dataFarn.createAt,
                                    }}
                                    description={dataFarn.description}
                                />
                            </div>
                        </div>
                        {/* 10 Other products card */}
                        <div id="divOtherProducts">
                            <OtherProducts
                                products={products}
                                farmID={farmID}
                            />
                        </div>
                    </Container>
                </>
            )}
        </>
    )
}

export default ProductConsumer