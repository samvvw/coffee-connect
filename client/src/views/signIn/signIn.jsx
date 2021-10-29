import { useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { UserContext } from '../../context/userContext/userContext'
import Button from '../../components/button/button'
import { Container } from './signIn.styles'

const SignIn = (props) => {
    const history = useHistory()
    const location = useLocation()
    const { signIn, loading, error } = useContext(UserContext)

    const { from } = location.state || { from: { pathname: '/' } }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {
            email: e.target.email.value,
            password: e.target.password.value,
        }
        await signIn(user)
        if (!Object.keys(error).length) history.replace(from)
    }

    return (
        <Container>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email: <input type="email" name="email" />
                </label>

                <label>
                    Password:
                    <input type="password" name="password" />
                </label>

                {!loading && <Button title="Login" type="submit" />}
                {loading && <small>Loading...</small>}
                {/* {error.ob && <pre>{JSON.stringify(error, null, 2)}</pre>} */}
            </form>
        </Container>
    )
}

export default SignIn
