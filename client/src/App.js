import { Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import SignUp from './views/sign-up'
import SignIn from './views/sign-in'
// import Welcome from './views/welcome'
import WelcomeUser from './views/welcome-user'
import Home from './views/home/home'

// import ProductDetailDescription from './components/productDetail/productDescription/productDetailDescription'

import ProductDetailImages from './components/productDetail/imagesGroup/productDetailImages'

import map from './assets/images/home-map.png'
import placeHolder from './assets/images/placeholder.png'
import videoPlaceHolder from './assets/images/video-placeholder.png'

function App() {
    const urlsArray = [
        map,
        placeHolder,
        placeHolder,
        placeHolder,
        videoPlaceHolder,
    ]

    return (
        <>
            <Header />
            <ProductDetailImages urlsArray={urlsArray} />

            <main>
                <Switch>
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/welcome-user" component={WelcomeUser} />
                    <Route path="/" component={Home} />
                </Switch>
            </main>
            <Footer />
        </>
    )
}

export default App
