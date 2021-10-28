import { useState, useEffect } from 'react'
import { DesktopContainer, MobileContainer } from './header.styles'
import Logo from '../logo/logo'
import NavBar from '../navBar/navBar'
import LoggedUser from '../loggedUser/loggedUser'
import NavBarMobile from '../navBarMobile/navBarMobile'

const Header = (props) => {
    const [matches, setMatches] = useState(
        window.matchMedia('(min-width: 850px)').matches
    )

    useEffect(() => {
        const handler = (e) => setMatches(e.matches)
        window.matchMedia('(min-width: 850px)').addListener(handler)
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
