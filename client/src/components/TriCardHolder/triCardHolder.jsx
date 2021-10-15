import { StyleTriCardHolder } from './triCardHolder.styles'

import ImageCard from '../imgCard/imgCard'
import Button from '../button/button'

const TriCardHolder = ({
    width1,
    height1,
    backgroundColor1,
    paragraphTextColor1,
    paragraphFontSize1,
    paragraphText1,
    urlImg1,

    width2,
    height2,
    backgroundColor2,
    paragraphTextColor2,
    paragraphFontSize2,
    paragraphText2,
    urlImg2,

    width3,
    height3,
    backgroundColor3,
    paragraphTextColor3,
    paragraphFontSize3,
    paragraphText3,
    urlImg3,
}) => {
    return (
        <>
            <StyleTriCardHolder>
                <ImageCard
                    width={width1}
                    height={height1}
                    backgroundColor={backgroundColor1}
                    paragraphTextColor={paragraphTextColor1}
                    paragraphFontSize={paragraphFontSize1}
                    paragraphText={paragraphText1}
                    urlImg={urlImg1}
                ></ImageCard>
                <ImageCard
                    width={width2}
                    height={height2}
                    backgroundColor={backgroundColor2}
                    paragraphTextColor={paragraphTextColor2}
                    paragraphFontSize={paragraphFontSize2}
                    paragraphText={paragraphText2}
                    urlImg={urlImg2}
                ></ImageCard>
                <ImageCard
                    width={width3}
                    height={height3}
                    backgroundColor={backgroundColor3}
                    paragraphTextColor={paragraphTextColor3}
                    paragraphFontSize={paragraphFontSize3}
                    paragraphText={paragraphText3}
                    urlImg={urlImg3}
                ></ImageCard>
            </StyleTriCardHolder>
            <StyleTriCardHolder>
                <Button title="Get Started"></Button>
            </StyleTriCardHolder>
        </>
    )
}

export default TriCardHolder
