import { useState, useEffect, useRef, useContext } from 'react'
import lottie from 'lottie-web'
import Offcanvas from 'react-bootstrap/Offcanvas'
import SearchBar from '../../components/searchBar/searchBar'
import SortBy from '../../components/marketDirectoryComponents/sortBy/sortBy'
import ProductCardDirectory from '../../components/marketDirectoryComponents/productCardDirectory/productCardDirectory'
import Map from '../../components/map/map'
import FilterList from '@material-ui/icons/FilterList'
import MapIcon from '@material-ui/icons/Map'
import ViewList from '@material-ui/icons/ViewListOutlined'
import SortByMobile from '../../components/marketDirectoryComponents/sortByMobile/sortByMobile'
import { UserContext } from '../../context/userContext/userContext'
import { Container } from './farmDirectory.styles'
import { useFarms } from '../../hooks'
import ProductCardDirectoryMobile from '../../components/marketDirectoryComponents/productCardDirectoryMobile/productCardDirectoryMobile'

const filters = [
    {
        value: 'origin',
        id: 1,
        label: 'Origin',
    },
]

const FarmDirectory = (props) => {
    const { user } = useContext(UserContext)
    const [farms, getFarms] = useFarms()
    const [isMapActive, setIsMapActive] = useState(false)
    const [coordinates, setCoordinates] = useState()
    const [querySearch, setQuerySearch] = useState('')
    const [queryFilters, setQueryFilters] = useState('')
    const [loading, setLoading] = useState(true)
    const container = useRef()
    const [matches, setMatches] = useState(
        window.matchMedia(`(min-width: 1000px`).matches
    )
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)

    const handleOffCanvasFilter = () => setShow((prev) => !prev)

    useEffect(() => {
        const handler = (e) => setMatches(e.matches)
        window.matchMedia(`(min-width: 1000px`).addListener(handler)
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
                getFarms(`search=${e.target.value}&${queryFilters}`)
            } else {
                getFarms(`${queryFilters}`)
            }
            setQuerySearch(e.target.value)
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
            const result = farms.map(({ data }) => [
                +data.coordinate[0],
                +data.coordinate[1],
            ])
            setCoordinates(result)
        }
        getCoordinates()
    }, [farms])

    useEffect(() => {
        if (querySearch.trim()) {
            getFarms(`search=${querySearch}&${queryFilters}`)
        } else {
            getFarms(`${queryFilters}`)
        }
    }, [queryFilters])

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
    }, [])

    useEffect(() => {}, [user])

    return (
        <Container>
            <div className="main">
                <div className="main__search">
                    <SearchBar
                        placeholder="Search by farm name"
                        width="100%"
                        onKeyUp={(e) => handleKeyUp(e)}
                    />
                </div>
                {matches && (
                    <SortBy
                        data={filters}
                        onChange={handleFilterChange}
                        type="directory"
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
                            <span>{farms.length}</span>+ &nbsp;farmers
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
                            <div className="farms">
                                {farms.map(({ data }) => {
                                    return (
                                        <ProductCardDirectory
                                            key={data._id}
                                            data={data}
                                            userId={user ? user.id : null}
                                            userType={
                                                user ? user.userType : null
                                            }
                                        />
                                    )
                                })}
                            </div>
                        )}
                        {!user?.id && (
                            <div className="farms">
                                {farms.map(({ data }) => {
                                    return (
                                        <ProductCardDirectory
                                            key={data._id}
                                            data={data}
                                            userId={user ? user.id : null}
                                            userType={
                                                user ? user.userType : null
                                            }
                                        />
                                    )
                                })}
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
                        <div className="mobile-farms-container">
                            {farms.map(({ data }) => {
                                return (
                                    <ProductCardDirectoryMobile
                                        key={data._id}
                                        data={data}
                                        userId={user ? user.id : null}
                                        userType={user ? user.userType : null}
                                    />
                                )
                            })}
                        </div>
                    )}
                    {!user?.id && (
                        <div className="mobile-farms-container">
                            {farms.map(({ data }) => {
                                return (
                                    <ProductCardDirectoryMobile
                                        key={data._id}
                                        data={data}
                                        userId={user ? user.id : null}
                                        userType={user ? user.userType : null}
                                    />
                                )
                            })}
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
                        />
                    </Offcanvas.Body>
                </Offcanvas>
            )}
        </Container>
    )
}

export default FarmDirectory
