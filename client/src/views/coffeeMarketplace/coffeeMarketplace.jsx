import { useEffect, useState } from 'react'
import ProductCard from '../../components/marketDirectoryComponents/productCard/productCard'
import SortBy from '../../components/marketDirectoryComponents/sortBy/sortBy'
import Map from '../../components/map/map'
import SearchBar from '../../components/searchBar/searchBar'
import { useProducts } from '../../hooks'
import { Container } from './coffeeMarketplace.styles'
import { api } from '../../config/api'

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

const CoffeeMarketplace = () => {
    const [products, getProducts] = useProducts()
    const [querySearch, setQuerySearch] = useState('')
    const [coordinates, setCoordinates] = useState()
    const [queryFilters, setQueryFilters] = useState('')

    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            //Get products with new search
            if (e.target.value.trim()) {
                getProducts(`search=${e.target.value}&${queryFilters}`)
            } else {
                getProducts(`${queryFilters}`)
            }
            setQuerySearch(e.target.value)
        }
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
    }, [queryFilters])

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
                <SortBy data={filters} onChange={handleFilterChange} />
                <div className="main__results">
                    <div className="main__results__query">
                        <p>Search results for:</p>
                        <p>{querySearch}</p>
                    </div>
                    <div className="main__results__quantity">
                        <p>
                            <span>{products.length}</span>+ coffee products
                        </p>
                    </div>
                </div>
                <div className="products">
                    {products.map(({ data }) => (
                        <ProductCard key={data._id} data={data} />
                    ))}
                </div>
            </div>
            <div className="map-container">
                <Map
                    data={coordinates}
                    style={{ width: '100%', height: '80vh' }}
                />
            </div>
        </Container>
    )
}

export default CoffeeMarketplace
