import { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'

// import { theme } from '../../theme/theme'

// import FarmDashboardHeader from '../../components/farmDashboardComponents/farmDashboardHeader/farmDashboardHeader'
import { LoggedNavBar } from '../../components'
import FarmDashboardMyProducts from '../../components/farmDashboardComponents/farmDashboardMyProducts/farmDashboardMyProducts'
import { UserContext } from '../../context/userContext/userContext'

export default function FarmDashboard() {
    const { isTokenExpired } = useContext(UserContext)
    const history = useHistory()
    // const [matches, setMatches] = useState(
    //     window.matchMedia(`(min-width: ${theme.layout.desktop})`).matches
    // )
    // useEffect(() => {
    //     const handler = (e) => setMatches(e.matches)
    //     window
    //         .matchMedia(`(min-width: ${theme.layout.desktop})`)
    //         .addListener(handler)
    // }, [])

    useEffect(() => {
        if (isTokenExpired()) {
            history.replace('/sign-in')
        }
    })

    return (
        <>
            {/* {matches && <FarmDashboardHeader />} */}
            <LoggedNavBar />
            <FarmDashboardMyProducts />
        </>
    )
}
