import { useContext, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { UserContext } from '../../context/userContext/userContext'
import Button from '../../components/button/button'
import { Container } from './signUp.styles'
import HeroImage from '../../assets/images/ContactUsImg.png'

const SignUp = (props) => {
    const history = useHistory()
    const location = useLocation()
    const [tabs, setTabs] = useState({ tab1: true, tab2: false })
    const [userType, setUserType] = useState('farmer')
    const { signUp, loading, error } = useContext(UserContext)
    const [errorMsgs, setErrorMsgs] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const { from } = location.state || { from: { pathname: '/' } }

    const handleTabChange = (e, value) => {
        if (value === 'tab1' && !tabs.tab1) {
            setTabs({ tab1: true, tab2: false })
            setUserType(e.target.value)
        } else {
            if (value === 'tab2' && !tabs.tab2) {
                setTabs({ tab1: false, tab2: true })
                setUserType(e.target.value)
            }
        }
    }

    const dataValidation = (user) => {
        const emailRegex = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
        const error = {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
        let resValidation = true

        if (user.firstName.length < 2 || user.firstName.length > 15) {
            error.firstName = 'Must be between 2 and 15 characters'
            resValidation = false
        }
        if (user.lastName.length < 2 || user.lastName.length > 15) {
            error.lastName = 'Must be between 2 and 15 characters'
            resValidation = false
        }
        if (user.userName.length < 3 || user.userName.length > 15) {
            error.userName = 'Must be between 3 and 15 characters'
            resValidation = false
        }
        if (!emailRegex.test(user.email)) {
            error.email = 'Invalid email'
            resValidation = false
        }
        if (user.password.length < 8) {
            error.password = 'Must be at least 8 characters'
            resValidation = false
        }
        if (user.password !== user.confirmPassword) {
            error.confirmPassword = 'Passwords do not match'
            resValidation = false
        }

        setErrorMsgs(error)
        return resValidation
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            userName: e.target.userName.value,
            password: e.target.password.value,
            confirmPassword: e.target.confirmPassword.value,
            userType: userType,
        }
        const resValidation = dataValidation(user)
        if (resValidation) {
            const response = await signUp(user)
            if (response.status === 201) {
                if (!Object.keys(error).length) history.replace(from)
            }
        }
    }

    return (
        <Container>
            <img src={HeroImage} alt="" className="sign-up-image" />
            <div className="form-container">
                <h1>Create your Account</h1>
                <p>Welcome to Qafa.</p>
                <form onSubmit={handleSubmit}>
                    <div className="tab-container">
                        <label
                            className={`tab ${tabs.tab1 ? 'active' : ''}`}
                            htmlFor="farmer"
                        >
                            I'm a Farmer
                            <input
                                type="radio"
                                name="userType"
                                value="farmer"
                                id="farmer"
                                onChange={(e) => handleTabChange(e, 'tab1')}
                            />
                        </label>

                        <label
                            className={`tab ${tabs.tab2 ? 'active' : ''}`}
                            htmlFor="consumer"
                        >
                            I'm a Consumer
                            <input
                                type="radio"
                                name="userType"
                                value="consumer"
                                id="consumer"
                                onChange={(e) => handleTabChange(e, 'tab2')}
                            />
                        </label>
                    </div>

                    <div className="form-content">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            required
                        />
                        <small className="error">{errorMsgs.firstName}</small>

                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            required
                        />
                        <small className="error">{errorMsgs.lastName}</small>

                        <label htmlFor="userName">Username</label>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            id="userName"
                            required
                        />
                        <small className="error">{errorMsgs.userName}</small>

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required />
                        <small className="error">{errorMsgs.email}</small>

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            required
                        />
                        <small className="error">{errorMsgs.password}</small>

                        <label htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            required
                        />
                        <small className="error">
                            {errorMsgs.confirmPassword}
                        </small>

                        {!loading && (
                            <Button title="Create Account" type="submit" />
                        )}
                        {loading && <small>Loading...</small>}

                        {/* {error && <pre>{JSON.stringify(error, null, 2)}</pre>} */}
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default SignUp
