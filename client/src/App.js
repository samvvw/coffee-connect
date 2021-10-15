import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header'
import SignUp from './views/sign-up'
import SignIn from './views/sign-in'
import Welcome from './views/welcome'
import WelcomeUser from './views/welcome-user'

import Hero from './components/hero/hero'

function App() {
    return (
        <>
            <Header></Header>

            <Hero
                maxWidth="800px"
                title="Welcome to Qafa, a great place to find the best coffee around the world!"
                //for title
                titleTextColor="#AA4545"
                titleFontSize="2rem"
                //for image
                urlImg={''}
                //for paragraph
                pTextColor="#000000"
                pFontSize="1rem"
                paragraphText="Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ut. Eget dapibus eros, ullamcorper vestibulum vel congue proin."
                //for Button
                buttonTitle="Get Started"
                onClick=""
                buttonBackgroundColor="Black"
                buttonTextColor="White"
            ></Hero>

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
