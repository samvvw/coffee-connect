import { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { Container } from './navBarMobile.styles'
import { SideBarData } from './sideBarData'

const NavBarMobile = () => {
    const [sideBar, setSideBar] = useState(false)

    const showSideBar = () => setSideBar(!sideBar)

    return (
        <Container>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <MenuIcon
                        fontSize="large"
                        style={{ fill: '#000000' }}
                        onClick={showSideBar}
                    />
                </Link>
            </div>
            <div className={sideBar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <CloseIcon
                                fontSize="large"
                                style={{ fill: '#000000' }}
                                onClick={showSideBar}
                            />
                        </Link>
                    </li>
                    {SideBarData.map((item) => {
                        return (
                            <li
                                key={item.id}
                                className={item.cName}
                                onClick={showSideBar}
                            >
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Container>
    )
}

export default NavBarMobile
