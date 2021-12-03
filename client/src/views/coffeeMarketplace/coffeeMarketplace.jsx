import { useContext, useEffect, useRef, useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import ProductCard from '../../components/marketDirectoryComponents/productCard/productCard'
import SortBy from '../../components/marketDirectoryComponents/sortBy/sortBy'
import Map from '../../components/map/map'
import lottie from 'lottie-web'
import SearchBar from '../../components/searchBar/searchBar'
import FilterList from '@material-ui/icons/FilterList'
import MapIcon from '@material-ui/icons/Map'
import ViewList from '@material-ui/icons/ViewListOutlined'
import ProductCardMobile from '../../components/marketDirectoryComponents/productCardMobile/productCardMobile'
import { UserContext } from '../../context/userContext/userContext'
import { useProducts } from '../../hooks'
import { Container } from './coffeeMarketplace.styles'
import SortByMobile from '../../components/marketDirectoryComponents/sortByMobile/sortByMobile'

const filters = [
    {
        value: 'price',
        id: 1,
        label: 'Price',
    },
    {
        value: 'roastLevel',
        id: 2,
        label: 'Roast Level',
    },
    {
        value: 'origin',
        id: 3,
        label: 'Origin',
    },
]

const CoffeeMarketplace = (props) => {
    const { user } = useContext(UserContext)
    const [products, getProducts] = useProducts()
    // const [querySearch, setQuerySearch] = useState('')
    const [isMapActive, setIsMapActive] = useState(false)
    const [coordinates, setCoordinates] = useState()
    const [queryFilters, setQueryFilters] = useState('minPrice=1&maxPrice=1000')
    const [loading, setLoading] = useState(true)
    const container = useRef()
    const { querySearch, setQuerySearch } = props
    const [matches, setMatches] = useState(
        window.matchMedia(`(min-width: 1000px`).matches
    )
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)

    const handleOffCanvasFilter = () => setShow((prev) => !prev)

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(min-width:  1000px)`)

        mediaQuery.onchange = () => {
            setMatches(mediaQuery.matches)
        }
    }, [])

    useEffect(() => {
        if (matches && isMapActive) {
            setIsMapActive(false)
        }
    }, [matches])

    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            //Get products with new search
            if (e.target.value.trim()) {
                // getProducts(`search=${e.target.value}&${queryFilters}`)
                setQuerySearch(e.target.value)
            } else {
                getProducts(`${queryFilters}`)
                setQuerySearch('')
            }
        }
    }

    const handleViewChange = () => {
        setIsMapActive((prev) => !prev)
    }

    const handleFilterChange = (value) => {
        setQueryFilters(value)
    }

    useEffect(() => {
        const getCoordinates = () => {
            const result = products.map(({ data }) => [
                +data.coordinate[0],
                +data.coordinate[1],
            ])
            setCoordinates(result)
        }
        getCoordinates()
    }, [products])

    useEffect(() => {
        if (querySearch.trim()) {
            getProducts(`search=${querySearch}&${queryFilters}`)
        } else {
            getProducts(`${queryFilters}`)
        }
    }, [queryFilters, querySearch, getProducts])

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../assets/cofffee-loading.json'),
            width: '100',
        })
    }, [])

    useEffect(() => {
        let timeout = setTimeout(() => setLoading(false), 1200)

        return () => {
            clearTimeout(timeout)
        }
    }, [products])

    useEffect(() => {}, [user])

    return (
        <Container>
            <div className="main">
                <div className="main__search">
                    <SearchBar
                        placeholder="Search by product name"
                        width="100%"
                        onKeyUp={(e) => handleKeyUp(e)}
                    />
                </div>
                {matches && (
                    <SortBy
                        data={filters}
                        onChange={handleFilterChange}
                        type="marketplace"
                    />
                )}
                <div className="main__results">
                    {matches && (
                        <div className="main__results__query">
                            <p>Search results for:</p>
                            <p>{querySearch}</p>
                        </div>
                    )}
                    <div className="main__results__quantity">
                        <p>
                            <span>{products.length}</span>+ &nbsp;coffee
                            products
                        </p>
                    </div>
                    {!matches && (
                        <div className="actions">
                            <div
                                className="actions__filter"
                                onClick={handleOffCanvasFilter}
                            >
                                <FilterList />
                                <small>FILTER</small>
                            </div>
                            {!isMapActive && (
                                <div
                                    className="actions__map"
                                    onClick={handleViewChange}
                                >
                                    <MapIcon />
                                    <small>MAP</small>
                                </div>
                            )}
                            {isMapActive && (
                                <div
                                    className="actions__map"
                                    onClick={handleViewChange}
                                >
                                    <ViewList />
                                    <small>LIST</small>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                {!matches && (
                    <div className="main__results__query">
                        <p>Search results for:</p>
                        <p>{querySearch}</p>
                    </div>
                )}

                {!isMapActive && (
                    <>
                        {user?.id && (
                            <div className="products">
                                {products.map(({ data }) => (
                                    <ProductCard
                                        key={data._id}
                                        data={data}
                                        userId={user ? user.id : null}
                                        userType={user ? user.userType : null}
                                    />
                                ))}
                            </div>
                        )}
                        {!user?.id && (
                            <div className="products">
                                {products.map(({ data }) => (
                                    <ProductCard
                                        key={data._id}
                                        data={data}
                                        userId={user ? user.id : null}
                                        userType={user ? user.userType : null}
                                    />
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
            <div className="map-container">
                {!loading && (
                    <Map
                        data={coordinates}
                        style={{ width: '100%', height: '80vh' }}
                    />
                )}
                {loading && <div className="container" ref={container}></div>}
            </div>

            {/**
             *  Products and Map components in Mobile version
             */}
            {isMapActive && (
                <div className="mobile-map-container">
                    {!loading && (
                        <Map
                            data={coordinates}
                            style={{ width: '100%', height: '80vh' }}
                        />
                    )}
                    {loading && (
                        <div className="container" ref={container}></div>
                    )}
                </div>
            )}
            {isMapActive && (
                <>
                    {user?.id && (
                        <div className="mobile-products-container">
                            {products.map(({ data }) => (
                                <ProductCardMobile
                                    key={data._id}
                                    data={data}
                                    userId={user ? user.id : null}
                                    userType={user ? user.userType : null}
                                />
                            ))}
                        </div>
                    )}
                    {!user?.id && (
                        <div className="mobile-products-container">
                            {products.map(({ data }) => (
                                <ProductCardMobile
                                    key={data._id}
                                    data={data}
                                    userId={user ? user.id : null}
                                    userType={user ? user.userType : null}
                                />
                            ))}
                        </div>
                    )}
                </>
            )}

            {!matches && (
                <Offcanvas
                    show={show}
                    onHide={handleClose}
                    placement="end"
                    style={{
                        width: '65%',
                        position: 'fixed',
                        top: '188px',
                        zIndex: '10000',
                        borderTopLeftRadius: '8px',
                    }}
                    backdrop={true}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Filters</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <SortByMobile
                            data={filters}
                            onChange={handleFilterChange}
                            type="marketplace"
                        />
                    </Offcanvas.Body>
                </Offcanvas>
            )}
        </Container>
    )
}

export default CoffeeMarketplace
