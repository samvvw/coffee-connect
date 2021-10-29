import { useContext, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { UserContext } from '../../context/userContext/userContext'
import Button from '../../components/button/button'
import { Container } from './signUp.styles'

const SignUp = (props) => {
    const history = useHistory()
    const location = useLocation()
    const [tabs, setTabs] = useState({ tab1: true, tab2: false })
    const { signUp, loading, error } = useContext(UserContext)

    const { from } = location.state || { from: { pathname: '/' } }

    const handleTabChange = () => {
        setTabs((prevTab) => ({ tab1: !prevTab.tab1, tab2: !prevTab.tab2 }))
    }

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
        <Container>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="tab-container">
                    <label
                        className={`tab ${tabs.tab1 ? 'active' : ''}`}
                        htmlFor="consumer"
                    >
                        As a Coffee Lover
                        <input
                            type="radio"
                            name="userType"
                            value="consumer"
                            id="consumer"
                            onChange={handleTabChange}
                        />
                    </label>

                    <label
                        className={`tab ${tabs.tab2 ? 'active' : ''}`}
                        htmlFor="farmer"
                    >
                        As a Farmer
                        <input
                            type="radio"
                            name="userType"
                            value="farmer"
                            id="farmer"
                            onChange={handleTabChange}
                        />
                    </label>
                </div>

                <div className="form-content">
                    <label>
                        First Name:
                        <input type="text" name="firstName" />
                    </label>

                    <label>
                        Last Name:
                        <input type="text" name="lastName" />
                    </label>

                    <label htmlFor="userName">
                        Username:
                        <input type="text" name="userName" id="userName" />
                    </label>

                    <label>
                        Email: <input type="email" name="email" />
                    </label>

                    <label>
                        Password:
                        <input type="password" name="password" />
                    </label>

                    <label htmlFor="confirmPassword">
                        Confirm Password:
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                        />
                    </label>

                    {!loading && <Button title="Register" type="submit" />}
                    {loading && <small>Loading...</small>}

                    {/* {error && <pre>{JSON.stringify(error, null, 2)}</pre>} */}
                </div>
            </form>
        </Container>
    )
}

export default SignUp
