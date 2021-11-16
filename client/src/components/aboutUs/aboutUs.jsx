import Button from '../button/button'
import { Container, Heading, Paragraph } from './aboutUs.styles'
import bgImage from '../../assets/images/placeholder.png'

const AboutUs = (props) => {
    return (
        <Container bgImageUrl={bgImage}>
            <Heading>Meet Us</Heading>
            <Paragraph>
                Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing
                sed pellentesque cras massa urna lectus leo, ut.{' '}
            </Paragraph>
            <Button title="Meet the Team" />
        </Container>
    )
}

export default AboutUs
