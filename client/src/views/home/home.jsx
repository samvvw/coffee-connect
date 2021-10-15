import Hero from '../../components/hero/hero'
import WhatsQafa from '../../components/WhatSQafa/whatsQafa'
import TriCardHolder from '../../components/TriCardHolder/triCardHolder'
import SearchHome from '../../components/searchHome/searchHome'
import HowQafaWorks from '../../components/howQafaWorks/howQafaWorks'
import AboutUs from '../../components/aboutUs/aboutUs'
import Newsletter from '../../components/newsletter/newsletter'
import imgPlaceholder from '../../assets/images/placeholder.png'
import { Container } from './home.styles'

const Home = (props) => {
    return (
        <Container>
            <Hero
                maxWidth="800px"
                title="Welcome to Qafa, a great place to find the best coffee around the world!"
                titleTextColor="#AA4545"
                titleFontSize="2rem"
                pTextColor="#000000"
                pFontSize="1rem"
                paragraphText="Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ut. Eget dapibus eros, ullamcorper vestibulum vel congue proin."
                buttonTitle="Get Started"
                onClick=""
                buttonBackgroundColor="Black"
                buttonTextColor="White"
            />
            <WhatsQafa />
            <TriCardHolder
                width1="30%"
                height1="auto"
                paragraphTextColor1="black"
                paragraphFontSize1="1rem"
                paragraphText1="Tellus sit ipsum sit iaculis tortor aliquet egestas. Tempus hac fames sagittis felis curabitur ultricies. Enim at adipiscing gravida diam venenatis, pellentesque metus montes."
                urlImg1={imgPlaceholder}
                width2="30%"
                height2="auto"
                paragraphTextColor2="black"
                paragraphFontSize2="1rem"
                paragraphText2="Tellus sit ipsum sit iaculis tortor aliquet egestas. Tempus hac fames sagittis felis curabitur ultricies. Enim at adipiscing gravida diam venenatis, pellentesque metus montes."
                urlImg2={imgPlaceholder}
                width3="30%"
                height3="auto"
                paragraphTextColor3="black"
                paragraphFontSize3="1rem"
                paragraphText3="Tellus sit ipsum sit iaculis tortor aliquet egestas. Tempus hac fames sagittis felis curabitur ultricies. Enim at adipiscing gravida diam venenatis, pellentesque metus montes."
                urlImg3={imgPlaceholder}
            />
            <SearchHome />
            <HowQafaWorks />
            <AboutUs />
            <Newsletter />
        </Container>
    )
}

export default Home
