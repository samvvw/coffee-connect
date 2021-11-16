import InteractiveTextField from '../interactiveTextField/interactiveTextField'
import {
    Container,
    TextContainer,
    Heading,
    Paragraph,
} from './newsletter.styles'

const Newsletter = (props) => {
    return (
        <Container>
            <TextContainer>
                <Heading>Join our Newsletter</Heading>
                <Paragraph>
                    Mollis bibendum leo, pulvinar blandit gravida nec.
                    Adipiscing sed pellentesque cras.
                </Paragraph>
            </TextContainer>
            <InteractiveTextField placeholder="Your email address" />
        </Container>
    )
}

export default Newsletter
