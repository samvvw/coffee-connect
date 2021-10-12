import { useHistory } from 'react-router-dom'
import Button from '../components/button'

const SignUp = (props) => {
    let history = useHistory()

    const handleSubmit = async (e) => {
        //Prevent refresh the page
        e.preventDefault()

        const body = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            userName: e.target.userName.value,
            password: e.target.password.value,
            userType: e.target.userType.value,
        }

        try {
            const response = await fetch('/api/user/sign-up', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })

            const data = await response.json()
            sessionStorage.setItem('token', data)
            history.push('/welcome-user')
        } catch (err) {
            console.log('User cannot be registered', err)
        }
    }

    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" id="firstName" />

                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" id="lastName" />

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="userName">Username:</label>
                <input type="text" name="userName" id="userName" />

                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" />

                <fieldset>
                    <legend>Sign up as:</legend>

                    <label htmlFor="consumer">Consumer</label>
                    <input
                        type="radio"
                        name="userType"
                        id="consumer"
                        value="consumer"
                    />

                    <label htmlFor="farmer">Farmer</label>
                    <input
                        type="radio"
                        name="userType"
                        id="farmer"
                        value="farmer"
                    />
                </fieldset>

                <Button title="Sign Up" type="submit" />
            </form>
        </>
    )
}

export default SignUp
