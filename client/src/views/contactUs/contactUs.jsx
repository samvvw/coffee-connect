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
                <h2>We would love to hear from you.</h2>
                <p>
                    Whether you have a question about features, trials, pricing,
                    need a demo or anything else, our team is ready to answer
                    all your questions.
                </p>
            </div>
            <div id="divForm">
                <FormContactUs />
            </div>
        </Container>
    )
}

export default ContactUs
