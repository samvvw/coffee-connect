import { StyledHeader } from './header.styles'
import Logo from '../logo/logo'
import NavBar from '../navBar/navBar'
import LoggedUser from '../loggedUser/loggedUser'

const Header = (props) => {
    return (
        <StyledHeader>
            <Logo />
            <NavBar />
            <LoggedUser />
        </StyledHeader>
    )
}

export default Header
