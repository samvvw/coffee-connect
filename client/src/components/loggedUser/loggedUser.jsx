import { Link } from 'react-router-dom'
import { Text } from './loggedUser.styles'

const LoggedUser = (props) => {
    return (
        <Text>
            <Link to="/sign-in">Login</Link> /{' '}
            <Link to="/sign-up">Sign Up</Link>
        </Text>
    )
}

export default LoggedUser
