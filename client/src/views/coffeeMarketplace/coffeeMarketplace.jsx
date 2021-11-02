import { useEffect, useState } from 'react'
import ProductCard from '../../components/marketDirectoryComponents/productCard/productCard'
import SortBy from '../../components/marketDirectoryComponents/sortBy/sortBy'
import Map from '../../components/map/map'
import SearchBar from '../../components/searchBar/searchBar'
import { useProducts } from '../../hooks'
import { Container } from './coffeeMarketplace.styles'

const countries = [
    {
        coordinates: [4.1156735, -72.9301367],
    },
    {
        coordinates: [8.1156735, -72.9301367],
    },
]

const filters = [
    {
        id: 'roast',
        value: 1,
        label: 'Roast Level',
    },
    {
        id: 'origin',
        value: 2,
        label: 'Origin',
    },
    {
        id: 'price',
        value: 3,
        label: 'Price',
    },
]

const CoffeeMarketplace = () => {
    const products = useProducts()
    const [coordinates, setCoordinates] = useState([[4.1156735, -72.9301367]])

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

    return (
        <Container>
            <div className="main">
                <div className="main__search">
                    <SearchBar
                        placeholder="Search by product name"
                        width="100%"
                    />
                </div>
                <SortBy filters={filters} />
                <div className="main__results">
                    <div className="main__results__query">
                        <p>Search results for:</p>
                        <p>South America </p>
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
                    style={{ width: '100%', height: '100vh' }}
                />
            </div>
        </Container>
    )
}

export default CoffeeMarketplace
