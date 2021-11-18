import Hero from '../../components/hero/hero'
import WhatsQafa from '../../components/WhatSQafa/whatsQafa'
import TriCardHolder from '../../components/TriCardHolder/triCardHolder'
import SearchHome from '../../components/searchHome/searchHome'
import HowQafaWorks from '../../components/howQafaWorks/howQafaWorks'
import MeetTheTeam from '../../components/meetTheTeam/meetTheTeam'
import Newsletter from '../../components/newsletter/newsletter'
import { Container, SubContainer } from './home.styles'

const Home = () => {
    return (
        <Container>
            <Hero/>
            <SubContainer>
                <WhatsQafa />
                <TriCardHolder/>
            </SubContainer>
            <SearchHome />
            <HowQafaWorks />
            <MeetTheTeam />
            <Newsletter />
        </Container>
    )
}

export default Home
