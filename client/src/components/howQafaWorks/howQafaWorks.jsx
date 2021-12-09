import {
    Container,
    Heading,
    OneLine,
    Video,
    Paragraph,
} from './howQafaWorks.styles'

const HowQafaWorks = (props) => {
    return (
        <Container>
            <Heading>How Qafa Works</Heading>
            <OneLine>Qafa is built to help your business grow.</OneLine>
            <Video src="https://www.youtube.com/embed/EEvNVPJ0Q-8"></Video>
            <Paragraph>
                Qafa is the new reality for coffee farmers, with easy access to
                customers globally, an online storefront and a full farmer’s
                dashboard. Everything you need to build and manage your business
                -<span> all in one place.</span>
            </Paragraph>
        </Container>
    )
}

export default HowQafaWorks
