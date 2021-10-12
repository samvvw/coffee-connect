import { useHistory } from 'react-router-dom'
import Button from '../components/button'

const SignIn = (props) => {
    let history = useHistory()

    const handleSubmit = async (e) => {
        //Prevent refresh the page
        e.preventDefault()

        const body = {
            email: e.target.email.value,
            password: e.target.password.value,
        }
        try {
            const response = await fetch('/api/user/sign-in', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })

            const data = await response.json()
            sessionStorage.setItem('token', data)
            history.push('/welcome-user')
        } catch (err) {
            console.log('User cannot be authenticated', err)
        }
    }

    return (
        <>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" />

                <Button title="Login" type="submit" />
            </form>
        </>
    )
}

export default SignIn
