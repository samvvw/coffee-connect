import Button from '../button/button'
import { Link } from 'react-router-dom'
import { theme } from '../../theme/theme'
import imgPlaceholderMobile from '../../assets/images/home-hero-mobile.png'
import imgPlaceholderDesktop from '../../assets/images/home-hero.png'
import { useEffect, useContext } from 'react'
import { UserContext } from '../../context/userContext/userContext'

import {
    StyledGridLeft,
    StyledHero,
    StyledIntro,
    StyledGoToFarmer,
    Picture
} from './hero.styles'

const Hero = ({
    backgroundColor,
    maxWidth,
    //for image
    urlImgMobile = imgPlaceholderMobile,
    urlImgDesktop = imgPlaceholderDesktop,
    //for button
    onClick
}) => {

    //For Hero Styling based on login status
    const { user } = useContext(UserContext)
    useEffect(() => {}, [user])

    return (
        <StyledHero maxWidth={maxWidth} backgroundColor={backgroundColor}>
            <StyledGridLeft>
                <StyledIntro gridColumn="1/3">
                    <h1>Qafa is home to the world's specialty coffee farmers</h1>

                    <p>It’s simple. We connect local specialty coffee farmers with coffee consumers globally.</p>

                    <p>NO <span>WHOLESALERS</span>, <span>AGENTS</span> OR <span>RETAILERS</span></p>
                </StyledIntro>

                <StyledGoToFarmer>

                <Link to="/marketplace">
                    <Button
                        onClick={onClick}
                        title={"Find your Coffee"}
                        backgroundColor={theme.pallette.primary[500]}
                        hoverBackgroundColor={theme.pallette.primary.dark}
                        textColor="#ffffff"
                        border="none"
                        borderRadius="50px"
                        padding="0 3rem"
                        height="3rem"
                    ></Button>
                </Link>
                    <p>Are you Farmer? 
                        <Link to="/sign-up">
                            Signup here &#10142;
                        </Link>
                    </p>
                    
                </StyledGoToFarmer>
            </StyledGridLeft>

            <Picture>
                <img className="mobile" src={urlImgMobile} alt="farmer"/>
                <img className={user.firstName ? "desktop login" : "desktop"} src={urlImgDesktop} alt="farmer"/>
            </Picture>
        </StyledHero>
    )
}

export default Hero
