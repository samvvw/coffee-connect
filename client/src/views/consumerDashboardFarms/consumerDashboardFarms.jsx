import { useContext, useEffect, useState } from 'react'
import { LoggedNavBar } from '../../components'
import DashboardFarms from '../../components/consumerDashboardComponents/dashboardFarms/dashboardFarms'
import { UserContext } from '../../context/userContext/userContext'

export default function ConsumerDashboardFarms() {
    const { token } = useContext(UserContext)
    const [bookmarkedFarms, setBookmarkedFarms] = useState([])

    useEffect(() => {
        if (token) {
            const controller = new AbortController()
            const { signal } = controller

            fetch(`/api/farm/list?token=${token}`, { signal })
                .then((response) => {
                    response.json().then((data) => {
                        setBookmarkedFarms(data)
                    })
                })
                .catch((error) => console.log(error))
            return () => {
                controller.abort()
            }
        }
    }, [token])
    return (
        <>
            <LoggedNavBar />
            <DashboardFarms
                bookmarkedFarms={bookmarkedFarms}
                setBookmarkedFarms={setBookmarkedFarms}
            />
        </>
    )
}
