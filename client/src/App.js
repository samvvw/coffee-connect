import { Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Header, Footer, PrivateRouteFarmer } from './components'
import {
    SignUp,
    SignIn,
    Home,
    Product,
    FarmDashboard,
    CoffeeMarketplace,
    AboutUs,
    ContactUs,
    FarmProfile,
    FarmDirectory,
} from './views'

function App() {
    return (
        <div className="view-container">
            <Header />
            <main>
                <Switch>
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/product" component={Product} />
                    <Route path="/marketplace" component={CoffeeMarketplace} />
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/contact-us" component={ContactUs} />
                    <Route path="/farm-profile" component={FarmProfile} />
                    <Route path="/farm-directory" component={FarmDirectory} />
                    <PrivateRouteFarmer path="/my-products">
                        <FarmDashboard />
                    </PrivateRouteFarmer>
                    <Route path="/" component={Home} />
                </Switch>
            </main>
            <Footer />
        </div>
    )
}

export default App
