import { Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Header, Footer, PrivateRouteFarmer } from './components'
import {
    SignUp,
    SignIn,
    Home,
    Product,
    ProductConsumer,
    FarmDashboard,
    CoffeeMarketplace,
    AboutUs,
    ContactUs,
    FarmProfile,
    FarmDirectory,
    MyFarm,
    ConsumerDashboardProducts,
    ConsumerDashboardFarms,
    Account,
} from './views'

function App() {
    const [querySearch, setQuerySearch] = useState('')

    return (
        <div className="view-container">
            <Header />
            <main>
                <Switch>
                    <Route path="/account" component={Account} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/product" component={Product} />
                    <Route path="/product-detail" component={ProductConsumer} />
                    <Route path="/marketplace">
                        <CoffeeMarketplace
                            querySearch={querySearch}
                            setQuerySearch={setQuerySearch}
                        />
                    </Route>
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/contact-us" component={ContactUs} />
                    <Route path="/farm-profile" component={FarmProfile} />
                    <Route path="/farm-directory" component={FarmDirectory} />
                    <Route
                        path="/consumer-dashboard-products"
                        component={ConsumerDashboardProducts}
                    />

                    <Route
                        path="/consumer-dashboard-farms"
                        component={ConsumerDashboardFarms}
                    />

                    <PrivateRouteFarmer path="/my-products">
                        <FarmDashboard />
                    </PrivateRouteFarmer>
                    <PrivateRouteFarmer path="/my-farm">
                        <MyFarm />
                    </PrivateRouteFarmer>
                    <Route path="/" exact>
                        <Home
                            querySearch={querySearch}
                            setQuerySearch={setQuerySearch}
                        />
                    </Route>
                </Switch>
            </main>
            <Footer />
        </div>
    )
}

export default App
