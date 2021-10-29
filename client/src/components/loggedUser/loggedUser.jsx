import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Text, Container } from './loggedUser.styles'
import { UserContext } from '../../context/userContext/userContext'

const LoggedUser = (props) => {
    const { user } = useContext(UserContext)
    return (
        <>
            {!user?.firstName && (
                <Text>
                    <NavLink to="/sign-in">Login</NavLink> /{' '}
                    <NavLink to="/sign-up">Sign Up</NavLink>
                </Text>
            )}
            {user?.firstName && (
                <Container>
                    <p>
                        Hello, <span>{user.firstName}!</span>
                    </p>
                </Container>
            )}
        </>
    )
}

export default LoggedUser
