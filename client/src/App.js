import Header from './components/header'
import { Switch, Route } from 'react-router-dom'
import SignUp from './pages/sign-up'
import SignIn from './pages/sign-in'
import Welcome from './pages/welcome'
import WelcomeUser from './pages/welcome-user'

function App() {
    return (
        <>
            <Header />
            <main>
                <Switch>
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/welcome-user" component={WelcomeUser} />
                    <Route path="/" component={Welcome} />
                </Switch>
            </main>
        </>
    )
}

export default App
