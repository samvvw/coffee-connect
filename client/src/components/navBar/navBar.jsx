import { Link } from 'react-router-dom'
import { Menu, MenuItem, Nav } from './navBar.styles'

const NavBar = (props) => {
    return (
        <Nav>
            <Menu>
                <MenuItem>Coffee Marketplace</MenuItem>
                <MenuItem>Farm Directory</MenuItem>
                <MenuItem>About Us</MenuItem>
                <MenuItem>Contact Us</MenuItem>
            </Menu>
        </Nav>
    )
}

export default NavBar
