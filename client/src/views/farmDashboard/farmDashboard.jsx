import { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { LoggedNavBar } from '../../components'
import FarmDashboardMyProducts from '../../components/farmDashboardComponents/farmDashboardMyProducts/farmDashboardMyProducts'
import { UserContext } from '../../context/userContext/userContext'

export default function FarmDashboard() {
    const { isTokenExpired } = useContext(UserContext)
    const history = useHistory()

    useEffect(() => {
        if (isTokenExpired()) {
            history.replace('/sign-in')
        }
    })

    return (
        <>
            <LoggedNavBar />
            <FarmDashboardMyProducts />
        </>
    )
}
