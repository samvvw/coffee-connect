import { useState, useEffect, useRef, useContext } from 'react'
import lottie from 'lottie-web'
import SearchBar from '../../components/searchBar/searchBar'
import SortBy from '../../components/marketDirectoryComponents/sortBy/sortBy'
import ProductCardDirectory from '../../components/marketDirectoryComponents/productCardDirectory/productCardDirectory'
import Map from '../../components/map/map'
import { UserContext } from '../../context/userContext/userContext'
import { Container } from './farmDirectory.styles'
import { useFarms } from '../../hooks'

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
    const [coordinates, setCoordinates] = useState()
    const [querySearch, setQuerySearch] = useState('')
    const [queryFilters, setQueryFilters] = useState('')
    const [loading, setLoading] = useState(true)
    const container = useRef()

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
                <SortBy
                    data={filters}
                    onChange={handleFilterChange}
                    type="directory"
                />
                <div className="main__results">
                    <div className="main__results__query">
                        <p>Search results for:</p>
                        <p>{querySearch}</p>
                    </div>
                    <div className="main__results__quantity">
                        <p>
                            <span>{farms.length}</span>+ coffee products
                        </p>
                    </div>
                </div>
                {user?.id && (
                    <div className="farms">
                        {farms.map(({ data }) => {
                            return (
                                <ProductCardDirectory
                                    key={data._id}
                                    data={data}
                                    userId={user ? user.id : null}
                                />
                            )
                        })}
                    </div>
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
        </Container>
    )
}

export default FarmDirectory
