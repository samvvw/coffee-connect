import { useContext, useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Text, Container } from './loggedUser.styles'
import { UserContext } from '../../context/userContext/userContext'
import Button from '../button/button'
import { theme } from '../../theme/theme'

const LoggedUser = ({ isHome }) => {
    const history = useHistory()
    const { user, signOut, isTokenExpired } = useContext(UserContext)

    const handleMyDashboard = () => {
        if (!isTokenExpired()) {
            if (user.userType === 'farmer') {
                history.push('/my-products')
            } else if (user.userType === 'consumer') {
                history.push('/consumer-dashboard-products')
            }
        } else {
            history.replace('/sign-in')
        }
    }

    const handleMyAccount = () => {
        if (!isTokenExpired()) {
            history.push('/account')
        } else {
            history.replace('/sign-in')
        }
    }

    const handleSignOut = () => {
        signOut()
        history.replace('/')
    }

    useEffect(() => {
        isTokenExpired()
    })

    return (
        <>
            {!user?.firstName && (
                <Text isHome={isHome}>
                    <NavLink to="/sign-in">
                        <Button
                            title="Login"
                            backgroundColor="#ffffff"
                            textColor={theme.pallette.primary[500]}
                            borderColor={theme.pallette.primary[500]}
                            width="71px"
                            height="40px"
                            padding="7px 13px 8px"
                            hoverBackgroundColor={theme.pallette.primary.dark}
                            hoverTextColor="#ffffff"
                            hoverBorderColor={theme.pallette.primary.dark}
                            activeBackgroundColor={theme.pallette.primary[500]}
                            activeBorderColor={theme.pallette.primary[500]}
                        />
                    </NavLink>
                    <NavLink to="/sign-up">
                        <Button
                            title="Sign up"
                            backgroundColor={theme.pallette.secondary.c800}
                            textColor="#ffffff"
                            borderColor={theme.pallette.secondary.c800}
                            width="109px"
                            height="40px"
                            padding="7px 13px 8px"
                            hoverBackgroundColor={theme.pallette.secondary.dark}
                            hoverBorderColor={theme.pallette.secondary.dark}
                        />
                    </NavLink>
                </Text>
            )}
            {user?.firstName && (
                <>
                    <Container type={user.userType}>
                        <p>Hello!</p>
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
                        <div className="profile__badge">
                            <span>
                                {user.firstName.split('')[0].toUpperCase()}
                            </span>
                        </div>
                    </Container>
                </>
            )}
        </>
    )
}

export default LoggedUser
