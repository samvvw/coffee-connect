import { useContext, useEffect, useState } from 'react'
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
    const [active, setActive] = useState(false)
    const [inputValues, setInputValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
    })
    const [errorMsgs, setErrorMsgs] = useState({
        firstName: '',
        lastName: '',
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
            email: '',
            password: '',
            confirmPassword: '',
        }
        let resValidation = true

        if (user.firstName.length < 3 || user.firstName.length > 15) {
            error.firstName = 'Must be between 3 and 15 characters'
            resValidation = false
        }
        if (user.lastName.length < 3 || user.lastName.length > 15) {
            error.lastName = 'Must be between 3 and 15 characters'
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
            userName: e.target.firstName.value,
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

    const handleChange = (e) => {
        if (e.target.name !== 'acceptTerms')
            setInputValues((prev) => {
                return { ...prev, [e.target.name]: e.target.value }
            })
        else
            setInputValues((prev) => {
                return { ...prev, acceptTerms: e.target.checked }
            })
    }

    useEffect(() => {
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            acceptTerms,
        } = inputValues
        if (
            firstName &&
            lastName &&
            email &&
            password &&
            confirmPassword &&
            acceptTerms
        ) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [inputValues])

    return (
        <Container active={active}>
            <img src={HeroImage} alt="" className="sign-up-image" />
            <div className="form-container">
                <h1>Create your Account</h1>
                <p>Welcome to Qafa.</p>
                <p className="type-label">Which best describes you?</p>
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
                        <div className="label-container">
                            <label htmlFor="firstName">
                                First Name <span>*</span>
                            </label>
                            <small className="error">
                                {errorMsgs.firstName}
                            </small>
                        </div>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="e.g. James"
                            onChange={(e) => handleChange(e)}
                            required
                        />

                        <div className="label-container">
                            <label htmlFor="lastName">
                                Last Name <span>*</span>
                            </label>
                            <small className="error">
                                {errorMsgs.lastName}
                            </small>
                        </div>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="e.g. Johnson"
                            onChange={(e) => handleChange(e)}
                            required
                        />

                        <div className="label-container">
                            <label htmlFor="email">
                                Email <span>*</span>
                            </label>
                            <small className="error">{errorMsgs.email}</small>
                        </div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            onChange={(e) => handleChange(e)}
                            required
                        />

                        <div className="label-container">
                            <label htmlFor="password">
                                Password <span>*</span>
                            </label>
                            <small className="error">
                                {errorMsgs.password}
                            </small>
                        </div>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Your Password"
                            onChange={(e) => handleChange(e)}
                            required
                        />

                        <div className="label-container">
                            <label htmlFor="confirmPassword">
                                Confirm Password <span>*</span>
                            </label>
                            <small className="error">
                                {errorMsgs.confirmPassword}
                            </small>
                        </div>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Your Password"
                            onChange={(e) => handleChange(e)}
                            required
                        />

                        <div className="terms-container">
                            <p>
                                Qafa's priority is your privacy. We will never
                                sell or give your information to third parties.
                            </p>

                            <div className="row">
                                <label className="containerCheckbox">
                                    <input
                                        value="accept"
                                        type="checkbox"
                                        name="acceptTerms"
                                        id="acceptTerms"
                                        onChange={(e) => handleChange(e)}
                                    />
                                    <span className="checkmarkCheckbox"></span>
                                </label>
                                <label htmlFor="acceptTerms">
                                    I have read and agree to Qafa's{' '}
                                    <span>Terms of Service</span>
                                </label>
                            </div>
                        </div>

                        {!loading && (
                            <Button
                                title="Create Account"
                                type="submit"
                                disabled={!active}
                            />
                        )}
                        {loading && (
                            <Button title="Loading..." type="submit" disabled />
                        )}
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default SignUp
