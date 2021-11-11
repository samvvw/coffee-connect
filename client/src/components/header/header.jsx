import { useState, useEffect } from 'react'
import { DesktopContainer, MobileContainer } from './header.styles'
import Logo from '../logo/logo'
import NavBar from '../navBar/navBar'
import LoggedUser from '../loggedUser/loggedUser'
import NavBarMobile from '../navBarMobile/navBarMobile'
import { theme } from '../../theme/theme'

const Header = (props) => {
    const [matches, setMatches] = useState(
        window.matchMedia(`(min-width: 930px)`).matches
    )

    useEffect(() => {
        const handler = (e) => setMatches(e.matches)
        window.matchMedia('(min-width: 930px)').addListener(handler)
    }, [])

    return (
        <>
            {matches && (
                <DesktopContainer>
                    <Logo />
                    <NavBar />
                    <LoggedUser />
                </DesktopContainer>
            )}

            {!matches && (
                <MobileContainer>
                    <NavBarMobile />
                    <Logo />
                </MobileContainer>
            )}
        </>
    )
}

export default Header
