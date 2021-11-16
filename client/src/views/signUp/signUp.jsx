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

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            userName: e.target.userName.value,
            password: e.target.password.value,
            userType: userType,
        }
        await signUp(user)
        if (!Object.keys(error).length) history.replace(from)
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

                    {/* Consumer Form Content */}
                    {tabs.tab2 && (
                        <div className="form-content">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                            />

                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName" id="lastName" />

                            <label htmlFor="userName">Username</label>
                            <input
                                type="text"
                                name="userName"
                                id="userName"
                                id="userName"
                            />

                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />

                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                            />

                            <label htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                            />

                            {!loading && (
                                <Button title="Create Account" type="submit" />
                            )}
                            {loading && <small>Loading...</small>}

                            {/* {error && <pre>{JSON.stringify(error, null, 2)}</pre>} */}
                        </div>
                    )}

                    {/* Farmer Form Content */}
                    {tabs.tab1 && (
                        <div className="form-content">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                            />

                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName" id="lastName" />

                            <label htmlFor="userName">Username</label>
                            <input
                                type="text"
                                name="userName"
                                id="userName"
                                id="userName"
                            />

                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />

                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                            />

                            <label htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                            />

                            {!loading && (
                                <Button title="Create Account" type="submit" />
                            )}
                            {loading && <small>Loading...</small>}

                            {/* {error && <pre>{JSON.stringify(error, null, 2)}</pre>} */}
                        </div>
                    )}
                </form>
            </div>
        </Container>
    )
}

export default SignUp
