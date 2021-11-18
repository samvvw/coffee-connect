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
    MyFarm,
    Account,
} from './views'
import ConsumerDashboard from './views/consumerDashboard/consumerDashboard'

function App() {
    return (
        <div className="view-container">
            <Header />
            <main>
                <Switch>
                    <Route path="/account" component={Account} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/product" component={Product} />
                    <Route path="/marketplace" component={CoffeeMarketplace} />
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/contact-us" component={ContactUs} />
                    <Route path="/farm-profile" component={FarmProfile} />
                    <Route path="/farm-directory" component={FarmDirectory} />
                    <Route
                        path="/consumer-dashboard"
                        component={ConsumerDashboard}
                    />

                    <PrivateRouteFarmer path="/my-products">
                        <FarmDashboard />
                    </PrivateRouteFarmer>
                    <PrivateRouteFarmer path="/my-farm">
                        <MyFarm />
                    </PrivateRouteFarmer>
                    <Route path="/" exact component={Home} />
                </Switch>
            </main>
            <Footer />
        </div>
    )
}

export default App
