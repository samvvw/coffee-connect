import { NavLink } from 'react-router-dom'
import { Text } from './loggedUser.styles'

const LoggedUser = (props) => {
    return (
        <Text>
            <NavLink to="/sign-in">Login</NavLink> /{' '}
            <NavLink to="/sign-up">Sign Up</NavLink>
        </Text>
    )
}

export default LoggedUser
