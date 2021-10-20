import { Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import SignUp from './views/sign-up'
import SignIn from './views/sign-in'
import WelcomeUser from './views/welcome-user'
import Home from './views/home/home'
import Product from './views/Product/product'

function App() {
    const objArrayValues = [
        {
            id: '1',
            option: 'Qty 1',
        },
        {
            id: '2',
            option: 'Qty 2',
        },
        {
            id: '3',
            option: 'Qty 3',
        },
    ]
    const objArraySizes = [
        {
            id: '1',
            option: '340gr',
        },
        {
            id: '2',
            option: '454gr',
        },
        {
            id: '3',
            option: '680gr',
        },
    ]
    const objProductValues = {
        productName: 'Product Name',
        taste: 'Sweet',
        roastLevel: 'Medium dark',
        process: 'Dry',
        variety: 'Arabica',
        roastDate: ' 2/10/2021',
        objPriceUnitSize: [
            {
                size: '340',
                unit: 'gr',
                price: '10us',
            },
            {
                size: '454',
                unit: 'gr',
                price: '12us',
            },
            {
                size: '680',
                unit: 'gr',
                price: '15us',
            },
        ],
    }
    return (
        <>
            <Header />

            <main>
                <Switch>
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/welcome-user" component={WelcomeUser} />
                    <Route path="/product" component={Product} />
                    <Route path="/" component={Home} />
                </Switch>
            </main>
            <Footer />
        </>
    )
}

export default App
