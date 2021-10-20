import FarmDashboardHeader from '../../components/farmDashboardComponents/farmDashboardHeader/farmDashboardHeader'
import FarmDashboardMyProducts from '../../components/farmDashboardComponents/farmDashboardMyProducts/farmDashboardMyProducts'
import FarmDashboardProductCardSection from '../../components/farmDashboardComponents/farmDashboardProductCardSection/farmDashboardProductCardSection'
import FarmDashboardProductCard from '../../components/farmDashboardComponents/farmDashboardProductCard/farmDashboardProductCard'
import ConnectWithFarmerCard from '../../components/connectWithFarmerCard/connectWithFarmerCard'

export default function FarmDashboard() {
    const SAMPLE_PRODUCTS = [
        {
            id: 1,
            name: 'Honey Bourbon Coffee',
        },
        {
            id: 2,
            name: 'Mild Wash Coffee',
        },
        {
            id: 3,
            name: 'Guatemala Honey Coffee',
        },
        {
            id: 4,
            name: 'El Salvador Bourbon Coffee',
        },
        {
            id: 5,
            name: 'Mexico Arabica Soft Coffee',
        },
        {
            id: 6,
            name: 'Capilla del Rosario ',
        },
    ]
    function handleRenderProducts(productList) {
        return productList.map((product) => {
            return (
                <FarmDashboardProductCard product={product} key={product.id} />
            )
        })
    }
    return (
        <>
            <ConnectWithFarmerCard />
            <FarmDashboardHeader />
            <FarmDashboardMyProducts />
            <FarmDashboardProductCardSection>
                {handleRenderProducts(SAMPLE_PRODUCTS)}
            </FarmDashboardProductCardSection>
        </>
    )
}
