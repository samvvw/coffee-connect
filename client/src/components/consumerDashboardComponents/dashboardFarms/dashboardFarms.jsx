import FarmDashboardProductCardSection from '../../farmDashboardComponents/farmDashboardProductCardSection/farmDashboardProductCardSection'
import { DashboardFarmCard } from './dashboardFarms.styles'
export default function DashboardFarms({ bookmarkedFarms }) {
    return (
        <>
            <FarmDashboardProductCardSection>
                {bookmarkedFarms?.map((farm, i) => {
                    const farmProps = {
                        image: farm.logo,
                        name: farm.name,
                        location: farm.location,
                        origin: farm.origin,
                        altitude: farm.altitude,
                    }
                    return (
                        <DashboardFarmCard
                            farm={farmProps}
                            key={'farm-dashboard-' + i}
                        />
                    )
                })}
            </FarmDashboardProductCardSection>
        </>
    )
}
