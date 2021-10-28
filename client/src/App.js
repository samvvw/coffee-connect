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
import CoffeeMarketplace from './views/coffeeMarketplace/coffeeMarketplace'
import AboutUs from './views/aboutUs/aboutUs'
import ContactUs from './views/contactUs/contactUs'
import FarmProfile from './views/farmProfile/farmProfile'
import PrivateRouteFarmer from './components/PrivateRoute/privateRouteFarmer'
import FarmDirectory from './views/farmDirectory/farmDirectory'

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
                    <Route path="/marketplace" component={CoffeeMarketplace} />
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/contact-us" component={ContactUs} />
                    <Route path="/farmProfile" component={FarmProfile} />
                    <Route path="/farm-directory" component={FarmDirectory} />
                    <PrivateRouteFarmer path="/my-farm">
                        <FarmDashboard />
                    </PrivateRouteFarmer>
                    <Route path="/" component={Home} />
                </Switch>
            </main>
            <Footer />
        </>
    )
}

export default App
