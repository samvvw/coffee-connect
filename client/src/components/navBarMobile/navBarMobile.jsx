import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../context/userContext/userContext'
import { Link, useHistory } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { Container } from './navBarMobile.styles'
import { SideBarData, SideBarBottom ,SideBarBottomLoggedIn  } from './sideBarData'

const NavBarMobile = () => {
    const [sideBar, setSideBar] = useState(false)

    const showSideBar = () => setSideBar(!sideBar)

    //For Styling based on login status
    const { user, signOut } = useContext(UserContext)
    useEffect(() => {}, [user])


    const history = useHistory()
    const handleSignOut = () => {
        signOut()
        history.replace('/')
        showSideBar()
    }

    return (
        <Container type={user.userType}>
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
                        {user.firstName ?
                            <div className="logged-in">
                                <Link 
                                    to={user.userType === 'farmer' ?
                                    '/my-products'
                                    : '/consumer-dashboard-products'} className="menu-bars" 
                                    onClick={showSideBar}>
                                    Go to my Dashboard
                                </Link>
                                <div className="profile__badge">
                                    <span>
                                        {user.firstName.split('')[0].toUpperCase()}
                                    </span>
                                </div>
                            </div>
                            : null
                        }
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
                <ul className="nav-menu-items bottom">
                    {user.firstName ?
                        SideBarBottomLoggedIn.map((item) => {
                            return (
                                <li
                                    key={item.id}
                                    className={item.cName}
                                    onClick={item.id===1 ? showSideBar : handleSignOut}
                                >
                                    <Link to={item.path}>
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    : 
                        SideBarBottom.map((item) => {
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
                        })
                    }
                </ul> 
            </div>
        </Container>
    )
}

export default NavBarMobile
