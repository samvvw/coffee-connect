import Button from '../button/button'
import { theme } from '../../theme/theme'
import imgPlaceholderMobile from '../../assets/images/home-hero-mobile.png'
import imgPlaceholderDesktop from '../../assets/images/home-hero.png'

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
    return (
        <StyledHero maxWidth={maxWidth} backgroundColor={backgroundColor}>
            <StyledGridLeft>
                <StyledIntro gridColumn="1/3">
                    <h1>Qafa is home to the world's specialty coffee farmers</h1>

                    <p>It’s simple. We connect local specialty coffee farmers with coffee consumers globally.</p>

                    <p>NO <span>WHOLESALERS</span>, <span>AGENTS</span> OR <span>RETAILERS</span></p>
                </StyledIntro>

                <StyledGoToFarmer>

                    <Button
                        onClick={onClick}
                        title={"Find your Coffee"}
                        backgroundColor={theme.pallette.primary[500]}
                        textColor="#ffffff"
                        border="none"
                        borderRadius="50px"
                        padding="0"
                        height="3rem"
                    ></Button>

                    <p>Are you Farmer? <a href="/">Signup here &#10142;</a></p>
                    
                </StyledGoToFarmer>
            </StyledGridLeft>

            <Picture>
                <img className="mobile" src={urlImgMobile} alt="farmer"/>
                <img className="desktop" src={urlImgDesktop} alt="farmer"/>
            </Picture>
        </StyledHero>
    )
}

export default Hero
