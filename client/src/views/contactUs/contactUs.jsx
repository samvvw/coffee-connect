import HeroContactUs from '../../components/contactUs/heroContactUs'
import FormContactUs from '../../components/contactUs/formContactUs'

import { Container } from './contactUs.styles'

const ContactUs = () => {
    return (
        <Container>
            <HeroContactUs />
            <FormContactUs />
        </Container>
    )
}

export default ContactUs
