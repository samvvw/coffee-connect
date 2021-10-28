import { Container } from './formContactUs.styles'
import Button from '../button/button'

const FormContactUs = () => {
    return (
        <Container>
            <h2>Contact Us</h2>
            <p>
                Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing
                sed pellentesque cras massa urna lectus leo, ut.{' '}
            </p>
            <form action="onSubmit" method="POST">
                <label for="fullName">Full Name</label>
                <input type="text" name="fullName" id="fullName" required />
                <label for="email">E-mail</label>
                <input type="email" name="email" id="email" required />
                <label for="subject">Subject</label>
                <input type="text" name="subject" id="subject" required />
                <label for="message">Message</label>
                <textarea name="message" id="message" required />
                <div>
                    <Button
                        title="Submit"
                        backgroundColor="black"
                        textColor="white"
                        type="submit"
                        onClick=""
                    />
                </div>
            </form>
        </Container>
    )
}

export default FormContactUs