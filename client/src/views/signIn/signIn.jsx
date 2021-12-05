import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory, useLocation } from 'react-router-dom'
import { UserContext } from '../../context/userContext/userContext'
import Button from '../../components/button/button'
import { Container } from './signIn.styles'
import HeroImage from '../../assets/images/ContactUsImg.png'
// import { theme } from '../../theme/theme.js'

const SignIn = (props) => {
    const history = useHistory()
    const location = useLocation()
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [inputValues, setInputValues] = useState({
        email: '',
        password: '',
    })
    const [active, setActive] = useState(false)
    const { signIn, loading, error } = useContext(UserContext)

    const { from } = location.state || { from: { pathname: '/' } }

    const handleChange = (e) => {
        setInputValues((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {
            email: e.target.email.value,
            password: e.target.password.value,
        }
        const response = await signIn(user)
        if (response.status === 200) {
            if (!Object.keys(error).length) history.replace(from)
        } else {
            if (response.status === 404) {
                setErrorEmail('Invalid email')
                setErrorPassword('')
            } else {
                setErrorEmail('')
                setErrorPassword('Invalid password')
            }
        }
    }

    useEffect(() => {
        if (inputValues.email && inputValues.password) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [inputValues])

    return (
        <Container active={active}>
            <img src={HeroImage} alt="" className="sign-in-image" />
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h1>Sign in to Qafa</h1>

                    <div className="label-container">
                        <label htmlFor="email">
                            Email <span>*</span>
                        </label>
                        <small className="error">{errorEmail}</small>
                    </div>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        value={inputValues.email}
                        onChange={(e) => handleChange(e)}
                    />

                    <div className="label-container">
                        <label htmlFor="password">
                            Password <span>*</span>
                        </label>
                        <small className="error">{errorPassword}</small>
                    </div>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Your Password"
                        value={inputValues.password}
                        onChange={(e) => handleChange(e)}
                    />
                    <p className="forgot-password">Forgot password?</p>

                    {!loading && (
                        <Button
                            title="Login"
                            type="submit"
                            disabled={!active}
                        />
                    )}
                    {loading && (
                        <Button title="Loading..." type="submit" disabled />
                    )}
                </form>
                <p className="mobile-sign-up">
                    Don't have a Qafa account yet?{' '}
                    <span>
                        <Link to="/sign-up">Sign up</Link>
                    </span>
                </p>
            </div>
        </Container>
    )
}

export default SignIn
