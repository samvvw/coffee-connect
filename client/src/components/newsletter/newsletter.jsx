import InteractiveTextField from '../interactiveTextField/interactiveTextField'
import {
    Wrapper,
    Container,
    Heading,
    Paragraph,
    Email
} from './newsletter.styles'

const Newsletter = (props) => {
    return (
        <Wrapper>
            <Container>
                <Heading>Follow along on the journey</Heading>

                <Paragraph>
                    Sign up for helpful tips, free resources and get farm updates directly inside your mail box.
                </Paragraph>

                <Email>Email Address:</Email>
                <InteractiveTextField />
            </Container>
        </Wrapper>
    )
}

export default Newsletter
