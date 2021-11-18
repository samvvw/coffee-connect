import { useHistory } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { Container } from './product.styles'
import { theme } from '../../theme/theme'
import placeHolder from '../../assets/images/placeholder.png'
import { UserContext } from '../../context/userContext/userContext'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pencil from '@material-ui/icons/Create'
import ArrowBack from '@material-ui/icons/ArrowBack'
import ProductDetailHeader from '../../components/productDetail/header/productDetailHeader'
import ProductDetailImages from '../../components/productDetail/imagesGroup/productDetailImages'
import ProductDetailCard from '../../components/productDetail/productDetailCard/productDetailCard'
import OffCanvas from '../../components/productDetail/Offcanvas/offcanvas'

// import ConnectWithFarmer from '../../components/productDetail/connectWithFarmerCard/connectWithFarmerCard'
// import OtherProducts from '../../components/productDetail/otherProducts/otherProducts'

// import Map from '../../components/map/map'
// import CircleButton from '../../components/circleButton/circleButton'

const Product = (props) => {
    const history = useHistory()
    const { user, isTokenExpired } = useContext(UserContext)
    const [productData, setProductData] = useState()
    const [farmID, setFarmID] = useState()

    /*variables to control offcanvas - new product*/
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    /*----------------------------------------------*/

    const [totalProducts, setTotalProducts] = useState(0)
    useEffect(() => {
        if (isTokenExpired()) {
            history.replace('/sign-in')
        }
    })

    useEffect(() => {
        if (Object.keys(user).length > 0) {
            setFarmID(user.farms[0])
        }
    }, [user])

    // console.log('ID', props.location.state.id)
    // console.log('farmID', farmID)
    // console.log(
    //     'url:',
    //     `/api/farm/${farmID}/product/${props.location.state.id}`
    // )

    function convert(str) {
        var date = new Date(str),
            mnth = ('0' + (date.getMonth() + 1)).slice(-2),
            day = ('0' + date.getDate()).slice(-2)
        return [day, mnth, date.getFullYear()].join('-')
    }

    useEffect(() => {
        if (Object.keys(user).length > 0 && farmID) {
            axios
                .get(`/api/farm/${farmID}/product/${props.location.state.id}`)
                .then((res) => {
                    // console.log('infor of product', res.data.data)
                    setProductData(res.data.data)
                })
                .catch((error) => {
                    console.log('Product Detail:', error)
                })
        }
    }, [user, farmID, totalProducts])

    //no more than 4 images
    // const urlsArray = [placeHolder, placeHolder, placeHolder, placeHolder]

    // const objArraySizes = [
    //     {
    //         id: '1',
    //         option: '340gr',
    //     },
    //     {
    //         id: '2',
    //         option: '454gr',
    //     },
    //     {
    //         id: '3',
    //         option: '680gr',
    //     },
    // ]
    // const objProductValues = {
    //     productName: 'Fire Dept. Coffe Original',
    //     taste: 'Sweet',
    //     roastLevel: 'Medium dark',
    //     process: 'Dry',
    //     variety: 'Arabica',
    //     roastDate: ' 2/10/2021',
    //     objPriceUnitSize: [
    //         {
    //             size: '340',
    //             unit: 'gr',
    //             price: '10us',
    //         },
    //         {
    //             size: '454',
    //             unit: 'gr',
    //             price: '12us',
    //         },
    //         {
    //             size: '680',
    //             unit: 'gr',
    //             price: '15us',
    //         },
    //     ],
    // }

    // const objProductDescription = {
    //     coffeProcess: productData.coffeProcess,
    //     coffeType: productData.coffeeType,
    //     coffeVariety: productData.coffeVariety,
    //     roast: productData.roastLevel,
    //     taste: productData.taste,
    //     aroma: productData.aromas,
    //     flavor: '',
    //     residuals: 'Sweet, Prolonged',
    //     acidity: 'Juicy',
    //     body: 'Creamy',
    //     description: productData.description,
    // }
    // const arrObjProductDetails = [
    //     {
    //         productName: 'Whirlwind Coffe Co. Ethiopia',
    //         productPrice: '18.99 CAD',
    //         productUnit: '100gr',
    //         productDescription: 'Yirgacheffe',
    //     },
    //     {
    //         productName: 'Fire Dept. Coffe Original',
    //         productPrice: '18.99 CAD',
    //         productUnit: '100g',
    //         productDescription: 'Medium Roast',
    //     },
    //     {
    //         productName: 'Howler Coffee Co. Bucksaw',
    //         productPrice: '18.99 CAD',
    //         productUnit: '100g',
    //         productDescription: 'Blend',
    //     },
    //     {
    //         productName: 'Onyx Coffee Lab Colombia',
    //         productPrice: '18.99',
    //         productUnit: '100g',
    //         productDescription: 'Aponte Village',
    //     },
    // ]

    // const data = [
    //     {
    //         coordinates: [4.11, -72.93],
    //     },
    // ]
    // const objMemberSince = {
    //     imgUrl: placeHolder,
    //     farmName: 'Finca LomaVerde',
    //     memberSince: '2018',
    // }

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
            {productData && (
                <>
                    <Container>
                        <div id="subContainer">
                            <div id="headerDesktop">
                                {matches && (
                                    <>
                                        <div id="divBannerHeader">
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
                                        </div>

                                        <ProductDetailHeader
                                            backgroundColor="white"
                                            productName={
                                                productData.productName
                                            }
                                            farmName={productData.farmName}
                                            origin={productData.origin}
                                            location={productData.location}
                                            altitude={productData.altitude}
                                            handleShow={handleShow}
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

                                            <button
                                                onClick={handleShow}
                                                style={{
                                                    fill: theme.pallette
                                                        .black[400],
                                                }}
                                            >
                                                <Pencil
                                                    style={{
                                                        fill: theme.pallette
                                                            .black[400],
                                                    }}
                                                />
                                                Edit
                                            </button>
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
                            <div id="description">
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
                                {/* Map
                        <div>
                            <p>Location</p>
                        </div>
                        <Map
                            data={data}
                            style={{ width: '100%', height: '300px' }}
                        /> */}
                            </div>
                            {/* 4 Connect with farmer */}
                            {/* <div id="connectWFarmer">
                            <ConnectWithFarmer
                                objMemberSince={objMemberSince}
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis tempora animi eveniet ipsam minima quia provident eligendi delectus "
                            />
                        </div> */}
                        </div>
                        {/* 10 Other products card */}
                    </Container>

                    <OffCanvas
                        handleClose={handleClose}
                        handleShow={handleShow}
                        show={show}
                        productData={productData}
                        setTotalProducts={setTotalProducts}
                    />
                </>
            )}
        </>
    )
}

export default Product
