import { useEffect, useState } from 'react'

import { theme } from '../../theme/theme'

import FarmDashboardHeader from '../../components/farmDashboardComponents/farmDashboardHeader/farmDashboardHeader'
import FarmDashboardMyProducts from '../../components/farmDashboardComponents/farmDashboardMyProducts/farmDashboardMyProducts'

export default function FarmDashboard() {
    const [matches, setMatches] = useState(
        window.matchMedia(`(min-width: ${theme.layout.desktop})`).matches
    )
    useEffect(() => {
        const handler = (e) => setMatches(e.matches)
        window
            .matchMedia(`(min-width: ${theme.layout.desktop})`)
            .addListener(handler)
    }, [])

    return (
        <>
            {matches && <FarmDashboardHeader />}
            <FarmDashboardMyProducts />
        </>
    )
}
