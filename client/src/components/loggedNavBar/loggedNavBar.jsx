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
                                <NavLink exact to="/my-farm">
                                    My Farm
                                </NavLink>
                            </li>
                        </ul>
                    )}
                    {user?.userType === 'consumer' && (
                        <ul>
                            <li>Q-Coffee</li>
                            <li>Q-Farmers</li>
                        </ul>
                    )}
                </Container>
            )}
        </>
    )
}

export default LoggedNavBar
