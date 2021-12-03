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
                    setProductData(res.data.data)
                })
                .catch((error) => {
                    console.log('Product Detail:', error)
                })
        }
    }, [user, farmID, totalProducts])

    const [matches, setMatches] = useState(
        window.matchMedia(`(min-width: ${theme.layout.desktop}`).matches
    )

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            `(min-width: ${theme.layout.desktop})`
        )

        mediaQuery.onchange = () => {
            setMatches(mediaQuery.matches)
        }
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
