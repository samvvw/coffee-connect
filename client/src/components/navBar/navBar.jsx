import { Link } from 'react-router-dom'
import { Menu, MenuItem, Nav } from './navBar.styles'

const NavBar = (props) => {
    return (
        <Nav>
            <Menu>
                <MenuItem>
                    <Link to="/marketplace">Coffee Marketplace</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/farm-directory">Farm Directory</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/my-farm">My Farm</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/about-us">About Us</Link>
                </MenuItem>
                <MenuItem>Contact Us</MenuItem>
            </Menu>
        </Nav>
    )
}

export default NavBar
