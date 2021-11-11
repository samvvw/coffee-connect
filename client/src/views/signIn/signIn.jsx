import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useHistory, useLocation } from 'react-router-dom'
import { UserContext } from '../../context/userContext/userContext'
import Button from '../../components/button/button'
import { Container } from './signIn.styles'
import HeroImage from '../../assets/images/ContactUsImg.png'
import { theme } from '../../theme/theme.js'

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
            <img src={HeroImage} alt="" className="sign-in-image" />
            {/* <p className="desktop-sign-up">
                Don't have a Qafa account yet?
                <Button
                    title="Sign up"
                    backgroundColor="#ffffff"
                    textColor={theme.pallette.primary[500]}
                    borderColor={theme.pallette.primary[500]}
                    width="109px"
                />
            </p> */}
            <div class="form-container">
                <form onSubmit={handleSubmit}>
                    <h1>Sign in to Qafa</h1>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />

                    {!loading && <Button title="Login" type="submit" />}
                    {loading && <small>Loading...</small>}
                    {/* {error.ob && <pre>{JSON.stringify(error, null, 2)}</pre>} */}
                </form>
                <p class="mobile-sign-up">
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
