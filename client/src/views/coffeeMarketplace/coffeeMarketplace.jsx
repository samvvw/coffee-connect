import SortBy from '../../components/coffeeMarketplaceComponents/sortBy/sortBy'
import SearchBar from '../../components/searchBar/searchBar'

const CoffeeMarketplace = (props) => {
    return (
        <>
            <h1>Coffee Marketplace</h1>
            <SearchBar placeholder="Search" />
            <SortBy />
        </>
    )
}

export default CoffeeMarketplace
