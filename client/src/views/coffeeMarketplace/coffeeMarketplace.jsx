import ProductCard from '../../components/coffeeMarketplaceComponents/productCard/productCard'
import SortBy from '../../components/coffeeMarketplaceComponents/sortBy/sortBy'
import Map from '../../components/map/map'
import SearchBar from '../../components/searchBar/searchBar'
import { Row } from './coffeeMarketplace.styles'

const products = [
    {
        id: 1,
        name: 'Product Name',
        price: '$50',
        location: 'Colombia',
        taste: 'Sweet',
        roastLevel: 'Medium - dark',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eos quod similique sit ipsa, nobis corrupti!',
        review: 3,
        totalReviews: 45,
    },
    {
        id: 2,
        name: 'Product Name',
        price: '$50',
        location: 'Vancouver',
        taste: 'Acid',
        roastLevel: 'Medium',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eos quod similique sit ipsa, nobis corrupti!',
        review: 2,
        totalReviews: 87,
    },
]

const countries = [
    {
        name: 'Colombia',
        coordinates: [4.1156735, -72.9301367],
    },
    {
        name: 'Vancouver',
        coordinates: [49.246292, -123.116226],
    },
]

const CoffeeMarketplace = (props) => {
    return (
        <>
            <h1>Coffee Marketplace</h1>
            <SearchBar placeholder="Search" />
            <SortBy />
            <Row>
                <div className="products">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <div className="map">
                    <Map
                        data={countries}
                        style={{ width: '50vw', height: '100%' }}
                    />
                </div>
            </Row>
        </>
    )
}

export default CoffeeMarketplace
