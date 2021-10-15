import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header'
import SignUp from './views/sign-up'
import SignIn from './views/sign-in'
import Welcome from './views/welcome'
import WelcomeUser from './views/welcome-user'

import placeHolder from './assets/images/placeholder.png'
import TriCardHolder from './components/TriCardHolder/triCardHolder'
import WhatsQafa from './components/WhatSQafa/whatsQafa'

function App() {
    return (
        <>
            <Header />
            <WhatsQafa />
            <TriCardHolder
                width1="30%"
                height1="auto"
                //for p component
                paragraphTextColor1="black"
                paragraphFontSize1=".75rem"
                paragraphText1="Tellus sit ipsum sit iaculis tortor aliquet egestas. Tempus hac fames sagittis felis curabitur ultricies. Enim at adipiscing gravida diam venenatis, pellentesque metus montes."
                // for image component
                urlImg1={placeHolder}
                width2="30%"
                height2="auto"
                //for p component
                paragraphTextColor2="black"
                paragraphFontSize12=".75rem"
                paragraphText2="Tellus sit ipsum sit iaculis tortor aliquet egestas. Tempus hac fames sagittis felis curabitur ultricies. Enim at adipiscing gravida diam venenatis, pellentesque metus montes."
                // for image component
                urlImg2={placeHolder}
                width3="30%"
                height3="auto"
                //for p component
                paragraphTextColor3="black"
                paragraphFontSize3=".75rem"
                paragraphText3="Tellus sit ipsum sit iaculis tortor aliquet egestas. Tempus hac fames sagittis felis curabitur ultricies. Enim at adipiscing gravida diam venenatis, pellentesque metus montes."
                // for image component
                urlImg3={placeHolder}
            />
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
