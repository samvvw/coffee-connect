import { useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { UserContext } from '../context/userContext/userContext'
import Button from '../components/button/button'

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
        <>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" />

                {!loading && <Button title="Login" type="submit" />}
                {loading && <small>Loading...</small>}
                {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
            </form>
        </>
    )
}

export default SignIn
