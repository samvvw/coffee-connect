import ProductCard from '../../components/coffeeMarketplaceComponents/productCard/productCard'
import SortBy from '../../components/coffeeMarketplaceComponents/sortBy/sortBy'
import SearchBar from '../../components/searchBar/searchBar'

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

const CoffeeMarketplace = (props) => {
    return (
        <>
            <h1>Coffee Marketplace</h1>
            <SearchBar placeholder="Search" />
            <SortBy />
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </>
    )
}

export default CoffeeMarketplace
