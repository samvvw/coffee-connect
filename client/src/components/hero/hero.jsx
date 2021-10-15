import Image from '../image/image'
import Button from '../button/button'

import Grid from '../grid/grid'
import GridColumnRow from '../gridColumnRow/gridColumnRow'

import {
    StyledHero,
    StyleParagrahHero,
    StyledTitleHero,
    // StyleTitleHeroDiv,
    // StyleGridColumnRow,
} from './hero.styles'

const Hero = ({
    backgroundColor,
    maxWidth,
    title,
    titleFontSize,
    titleTextColor,
    //for image
    urlImg,
    //for paragraph
    paragraphText,
    pTextColor,
    pFontSize,
    //for button
    buttonTitle,
    onClick,
    buttonBackgroundColor,
    buttonTextColor,
}) => {
    return (
        <StyledHero maxWidth={maxWidth} backgroundColor={backgroundColor}>
            <Grid
                gridTemplateRows="repeat(3,auto)"
                gridTemplateColumns="repeat(3,1fr)"
            >
                <GridColumnRow gridColumn="1/4" gridRow="1/2">
                    <StyledTitleHero
                        titleFontSize={titleFontSize}
                        titleTextColor={titleTextColor}
                    >
                        {title}
                    </StyledTitleHero>
                </GridColumnRow>
                <GridColumnRow gridColumn="1/4" gridRow="2/3">
                    <StyleParagrahHero
                        pTextColor={pTextColor}
                        pFontSize={pFontSize}
                    >
                        {paragraphText}
                    </StyleParagrahHero>
                </GridColumnRow>
                <GridColumnRow gridColumn="1/2" gridRow="3/4">
                    <Button
                        onClick={onClick}
                        title={buttonTitle}
                        backgroundColor={buttonBackgroundColor}
                        textColor={buttonTextColor}
                    ></Button>
                </GridColumnRow>
                <GridColumnRow gridColumn="2/3" gridRow="3/4"></GridColumnRow>
                <GridColumnRow gridColumn="3/4" gridRow="3/4"></GridColumnRow>
            </Grid>
            <Image urlImg={urlImg} width="100%"></Image>
        </StyledHero>
    )
}

export default Hero
