import { useContext } from 'react'
import { UserContext } from '../../../context/userContext/userContext'
import FarmDashboardProductCardSection from '../../farmDashboardComponents/farmDashboardProductCardSection/farmDashboardProductCardSection'
import { DashboardFarmCard } from './dashboardFarms.styles'
import axios from 'axios'
export default function DashboardFarms({
    bookmarkedFarms,
    setBookmarkedFarms,
}) {
    const { token } = useContext(UserContext)

    async function handleBookmark(farmId) {
        try {
            const data = { token: token }

            const response = await axios.put(
                `/api/farm/${farmId}/bookmarks`,
                data
            )
            if (response) {
                const getFarms = await axios.get(
                    `/api/farm/list?token=${token}`
                )

                if (getFarms) {
                    setBookmarkedFarms(getFarms.data)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
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
                            handleBookmark={() => handleBookmark(farm._id)}
                        />
                    )
                })}
            </FarmDashboardProductCardSection>
        </>
    )
}
