import { Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import SignUp from './views/sign-up'
import SignIn from './views/sign-in'
import WelcomeUser from './views/welcome-user'
import Home from './views/home/home'

import SelectedButton from './components/selectedButton/selectedButton'
// import ConnectWithFarmer from './components/connectWithFarmerCard/connectWithFarmerCard'
// import placeHolder from './assets/images/video-placeholder.png'

// import CircleButton from './components/circleButton/circleButton'

import ProductDetailHeader from './components/productDetail/header/productDetailHeader'
function App() {
    return (
        <>
            <Header />
            {/* <CircleButton IconName="FavoriteEmpty" onClick="" /> */}
            <ProductDetailHeader
                productName="Product Name"
                farmName="Farm Name"
                origin="South America"
                location="Colombia"
                altitude="1200masl"
            />

            {/* <ConnectWithFarmer
                farmersName="Jose Villalobos"
                urlImgProfile={placeHolder}
            /> */}

            <SelectedButton
                title="340gr"
                onClick=""
                backgroundColor="Yellow"
                backgroundColorClicked="Blue"
                textColor="Red"
                textColorClicked="White"
            />
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
