import { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { DesktopContainer, MobileContainer } from './header.styles'
import { UserContext } from '../../context/userContext/userContext'
import Logo from '../logo/logo'
import NavBar from '../navBar/navBar'
import LoggedUser from '../loggedUser/loggedUser'
import NavBarMobile from '../navBarMobile/navBarMobile'

const Header = (props) => {
    const { user } = useContext(UserContext)
    const location = useLocation()
    const [isHome, setIsHome] = useState(false)
    const [matches, setMatches] = useState(
        window.matchMedia(`(min-width: 930px)`).matches
    )

    useEffect(() => {
        const handler = (e) => setMatches(e.matches)
        window.matchMedia('(min-width: 930px)').addListener(handler)
    }, [])

    useEffect(() => {
        if (location.pathname === '/' && user?.id) {
            setIsHome(false)
        } else {
            if (location.pathname === '/' && !user?.id) {
                setIsHome(true)
            } else {
                setIsHome(false)
            }
        }
    }, [location.pathname, user])

    return (
        <>
            {matches && (
                <DesktopContainer isHome={isHome}>
                    <Logo />
                    <NavBar />
                    <LoggedUser isHome={isHome} />
                </DesktopContainer>
            )}

            {!matches && (
                <MobileContainer>
                    <NavBarMobile />
                    <Logo type="mobile" />
                </MobileContainer>
            )}
        </>
    )
}

export default Header
