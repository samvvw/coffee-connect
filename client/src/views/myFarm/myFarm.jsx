import { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import MyFarmDashboard from '../../components/myFarmDashBoard/myFarmDashboard'

import { LoggedNavBar } from '../../components'

import { UserContext } from '../../context/userContext/userContext'

export default function MyFarm() {
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
            <MyFarmDashboard />
        </>
    )
}
