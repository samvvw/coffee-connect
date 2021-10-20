import { Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import SignUp from './views/sign-up'
import SignIn from './views/sign-in'
import WelcomeUser from './views/welcome-user'
import Home from './views/home/home'
import Product from './views/Product/product'
import FarmDashboard from './views/farmDashboard/farmDashboard'

function App() {
    return (
        <>
            <Header />
            <main>
                <Switch>
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/welcome-user" component={WelcomeUser} />
                    <Route path="/product" component={Product} />
                    <Route path="/my-farm" component={FarmDashboard} />
                    <Route path="/" component={Home} />
                </Switch>
            </main>
            <Footer />
        </>
    )
}

export default App
