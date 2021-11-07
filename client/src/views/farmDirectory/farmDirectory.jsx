import SearchBar from '../../components/searchBar/searchBar'
import SortBy from '../../components/marketDirectoryComponents/sortBy/sortBy'
import ProductCardDirectory from '../../components/marketDirectoryComponents/productCardDirectory/productCardDirectory'
import Map from '../../components/map/map'
import { Container } from './farmDirectory.styles'
import { useState } from 'react'

const filters = [
    {
        value: 'roastLevel',
        id: 1,
        label: 'Roast Level',
    },
    {
        value: 'origin',
        id: 2,
        label: 'Country',
    },
]

const farms = [
    {
        id: 1,
        name: 'Farm Name # 1',
        origin: 'South America',
        location: 'Colombia',
        altitude: '1200 masl',
    },
    {
        id: 2,
        name: 'Farm Name # 2',
        origin: 'North America',
        location: 'Canada',
        altitude: '90 masl',
    },
]

const countries = [
    [35.652832, 139.839478],
    [40.416775, -3.70379],
]

const FarmDirectory = (props) => {
    const [querySearch, setQuerySearch] = useState('')

    const handleKeyUp = (e) => {
        if (e.keyCode === 13) setQuerySearch(e.target.value)
    }
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
                <SortBy data={filters} />
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
                <div className="farms">
                    {farms.map((farm) => (
                        <ProductCardDirectory key={farm.id} data={farm} />
                    ))}
                </div>
            </div>
            <div className="map-container">
                <Map
                    data={countries}
                    style={{ width: '100%', height: '80vh' }}
                />
            </div>
        </Container>
    )
}

export default FarmDirectory
