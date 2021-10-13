import Header from './components/header/header'
import { Switch, Route } from 'react-router-dom'
import SignUp from './views/sign-up'
import SignIn from './views/sign-in'
import Welcome from './views/welcome'
import WelcomeUser from './views/welcome-user'

function App() {
    return (
        <>
            <Header></Header>

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
