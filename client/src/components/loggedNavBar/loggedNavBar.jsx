import { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from './loggedNavBar.styles'
import { UserContext } from '../../context/userContext/userContext'

const LoggedNavBar = (props) => {
    const { user, isTokenExpired } = useContext(UserContext)

    useEffect(() => {
        isTokenExpired()
    })

    return (
        <>
            {user?.userType && (
                <Container>
                    {user?.userType === 'farmer' && (
                        <ul>
                            <li>
                                <NavLink
                                    exact
                                    to="/my-products"
                                    activeClassName="selected"
                                >
                                    My Products
                                </NavLink>
                            </li>
                            <li>
                                {user?.farms.length === 0 && (
                                    <NavLink
                                        exact
                                        to="/my-farm"
                                        activeClassName="selected"
                                    >
                                        My Farm
                                    </NavLink>
                                )}
                                {user?.farms.length > 0 && (
                                    <NavLink
                                        exact
                                        to="/farm-profile"
                                        activeClassName="selected"
                                    >
                                        My Farm
                                    </NavLink>
                                )}
                            </li>
                        </ul>
                    )}
                    {user?.userType === 'consumer' && (
                        <ul>
                            <li>My Q-Coffee</li>
                            <li>My Q-Farmers</li>
                        </ul>
                    )}
                </Container>
            )}
        </>
    )
}

export default LoggedNavBar
