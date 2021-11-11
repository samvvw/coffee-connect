import FormContactUs from '../../components/contactUs/formContactUs'
import ContactUsImg from '../../assets/images/ContactUsImg.png'
import { Container } from './contactUs.styles'

const ContactUs = () => {
    return (
        <Container>
            <div id="divImg">
                <img src={ContactUsImg} alt="" />
            </div>
            <div id="divText">
                <h1>We would like hearing from you.</h1>
                <p>
                    Mollis bibendum leo, pulvinar blandit gravida nec.
                    Adipiscing sed pellentque cras massa urna lectus leo, ut.
                    Eget dapibus eros, ullamcorper vestibulum vel congue proin.
                </p>
            </div>
            <div id="divForm">
                <FormContactUs />
            </div>
        </Container>
    )
}

export default ContactUs
