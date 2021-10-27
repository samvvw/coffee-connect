import SearchBar from '../../components/searchBar/searchBar'
import SortBy from '../../components/marketDirectoryComponents/sortBy/sortBy'
import ProductCard from '../../components/marketDirectoryComponents/productCard/productCard'
import Map from '../../components/map/map'
import { Container } from './farmDirectory.styles'

const filters = [
    {
        id: 'roast',
        value: 1,
        label: 'Roast Level',
    },
    {
        id: 'origin',
        value: 2,
        label: 'Country',
    },
]

const farms = [
    {
        id: 1,
        name: 'Farm Name',
        origin: 'South America',
        location: 'Colombia',
        altitude: '1200 masl',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eos quod similique sit ipsa, nobis corrupti!',
        review: 3,
        totalReviews: 45,
    },
    {
        id: 2,
        name: 'Farm Name',
        origin: 'Nort America',
        location: 'Canada',
        altitude: '90 masl',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eos quod similique sit ipsa, nobis corrupti!',
        review: 4,
        totalReviews: 100,
    },
]

const countries = [
    {
        name: 'Japan',
        coordinates: [35.652832, 139.839478],
    },
    {
        name: 'Spain',
        coordinates: [40.416775, -3.70379],
    },
]

const FarmDirectory = (props) => {
    return (
        <Container>
            <div className="data-container">
                <SearchBar placeholder="search" />
                <SortBy filters={filters} />
                <div className="results-container">
                    {farms.map((farm) => (
                        <ProductCard key={farm.id} data={farm} />
                    ))}
                </div>
            </div>
            <div className="map-container">
                <Map
                    data={countries}
                    style={{ width: '50vw', height: '100%' }}
                />
            </div>
        </Container>
    )
}

export default FarmDirectory
