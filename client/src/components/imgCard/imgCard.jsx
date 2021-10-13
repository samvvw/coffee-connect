import { StyledImgCard, StyleParagraph } from './imgCard.styles'
import Image from '../image/image'

const ImgCard = ({
    width,
    height,
    backgroundColor,
    //for p component
    paragraphTextColor,
    paragraphFontSize,
    paragraphText,
    // for image component
    urlImg,
}) => {
    return (
        <StyledImgCard
            width={width}
            height={height}
            backgroundColor={backgroundColor}
        >
            <Image urlImg={urlImg} width="100%"></Image>
            <StyleParagraph
                pTextColor={paragraphTextColor}
                pFontSize={paragraphFontSize}
            >
                {paragraphText}
            </StyleParagraph>
        </StyledImgCard>
    )
}

export default ImgCard
