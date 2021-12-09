import { NavLink } from 'react-router-dom'
import { Menu, MenuItem, Nav } from './navBar.styles'

const NavBar = (props) => {
    // const location = useLocation()

    return (
        <Nav>
            <Menu>
                <MenuItem>
                    <NavLink
                        to="/marketplace"
                        activeStyle={{ fontWeight: 'bold' }}
                    >
                        Coffee Marketplace
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink
                        to="/farm-directory"
                        activeStyle={{ fontWeight: 'bold' }}
                    >
                        Farm Directory
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink
                        to="/about-us"
                        activeStyle={{ fontWeight: 'bold' }}
                    >
                        About Us
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink
                        to="/contact-us"
                        activeStyle={{ fontWeight: 'bold' }}
                    >
                        Contact Us
                    </NavLink>
                </MenuItem>
            </Menu>
        </Nav>
    )
}

export default NavBar
