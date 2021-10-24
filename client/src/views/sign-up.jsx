import { useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { UserContext } from '../context/userContext/userContext'
import Button from '../components/button/button'

const SignUp = (props) => {
    const history = useHistory()
    const location = useLocation()
    const { signUp, loading, error } = useContext(UserContext)

    const { from } = location.state || { from: { pathname: '/' } }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            userName: e.target.userName.value,
            password: e.target.password.value,
            userType: e.target.userType.value,
        }
        await signUp(user)
        if (!Object.keys(error).length) history.replace(from)
    }

    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="farmer">As a Coffee Lover</label>
                <input type="radio" name="userType" value="consumer" />
                <label htmlFor="farmer">As a Farmer</label>
                <input type="radio" name="userType" value="farmer" />

                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" id="firstName" />

                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" id="lastName" />

                <label htmlFor="userName">Username:</label>
                <input type="text" name="userName" id="userName" />

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" />

                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                />

                {!loading && <Button title="Sign Up" type="submit" />}
                {loading && <small>Loading...</small>}

                {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
            </form>
        </>
    )
}

export default SignUp
