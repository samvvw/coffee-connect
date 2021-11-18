import Image from '../image/image'
import Button from '../button/button'
import { theme } from '../../theme/theme'
import { Container, Heading, Paragraph, BoldParagraph } from './meetTheTeam.styles'
import homeAbout from '../../assets/images/home-about.png'


const MeetTheTeam = ({onClick, urlImg=homeAbout}) => {
    return (
        <Container>
            <Heading>Helping farmers transform</Heading>
            
            <Paragraph>
            Qafa is a web platform that helps specialty coffee farmers connect directly with coffee enthusiasts from around the world, significantly expanding their end-client channels and improving profitability.
            </Paragraph>

            <BoldParagraph>
            Qafa is a web platform that helps specialty coffee farmers connect directly with coffee enthusiasts from around the world, significantly expanding their end-client channels and improving profitability.
            </BoldParagraph>

            <Button
                onClick={onClick}
                title={"Meet the Team"}
                backgroundColor={theme.pallette.primary[500]}
                textColor={"#ffffff"}
                border="none"
                width="80vw"
            ></Button>

            <Image urlImg={urlImg} border="none" padding="3rem 0 0 0"></Image>
        </Container>
    )
}

export default MeetTheTeam