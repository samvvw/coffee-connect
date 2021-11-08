import { useContext, useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Text, Container } from './loggedUser.styles'
import { UserContext } from '../../context/userContext/userContext'

const LoggedUser = (props) => {
    const history = useHistory()
    const { user, signOut, isTokenExpired } = useContext(UserContext)

    const handleMyDashboard = () => {
        if (!isTokenExpired()) {
            if (user.userType === 'farmer') {
                history.push('/my-products')
            }
        } else {
            history.replace('/sign-in')
        }
    }

    const handleMyAccount = () => {
        if (!isTokenExpired()) {
            console.log('My Account')
        }
    }

    const handleSignOut = () => {
        signOut()
    }

    useEffect(() => {
        isTokenExpired()
    })

    return (
        <>
            {!user?.firstName && (
                <Text>
                    <NavLink to="/sign-in">Login</NavLink> /{' '}
                    <NavLink to="/sign-up">Sign Up</NavLink>
                </Text>
            )}
            {user?.firstName && (
                <>
                    <Container>
                        <p>Hello,</p>
                        <NavDropdown title={user.firstName} id="nav-dropdown">
                            <NavDropdown.Item onClick={handleMyDashboard}>
                                My Dashboard
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={handleMyAccount}>
                                Account
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                                id="sign-out"
                                onClick={handleSignOut}
                            >
                                Sign Out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Container>
                </>
            )}
        </>
    )
}

export default LoggedUser
