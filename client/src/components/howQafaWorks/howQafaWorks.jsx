import Image from '../image/image'
import {
    Heading,
    Container,
    StyledParagraph,
    HorizontalContainer,
} from './howQafaWorks.styles'
import videoPlaceholder from '../../assets/images/video-placeholder.png'

const HowQafaWorks = (props) => {
    return (
        <Container>
            <Heading>How Qafa works?</Heading>
            <HorizontalContainer>
                <Image urlImg={videoPlaceholder} width="300px" />
                <StyledParagraph>
                    Mollis bibendum leo, pulvinar blandit gravida nec.
                    Adipiscing sed pellentesque cras massa urna lectus leo, ut.
                    ollis bibendum leo, pulvinar blandit gravida nec. Adipiscing
                    sed pellentesque cras massa urna lectus leo, ut.Mollis
                    bibendum leo, pulvinar blandit gravida nec. Adipiscing sed
                    pellentesque cras massa urna lectus leo, ut.
                </StyledParagraph>
            </HorizontalContainer>
        </Container>
    )
}

export default HowQafaWorks
