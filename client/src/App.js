import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header'
import SignUp from './views/sign-up'
import SignIn from './views/sign-in'
import Welcome from './views/welcome'
import WelcomeUser from './views/welcome-user'
import Home from './views/home/home'

function App() {
    return (
        <>
            <Header />
            <main>
                <Switch>
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/welcome-user" component={WelcomeUser} />
                    <Route path="/" component={Home} />
                </Switch>
            </main>
        </>
    )
}

export default App
