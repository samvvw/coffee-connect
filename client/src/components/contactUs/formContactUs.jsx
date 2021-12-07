import { Container } from './formContactUs.styles'
import Button from '../button/button'
import { theme } from '../../theme/theme'

const FormContactUs = () => {
    return (
        <Container>
            <h2>Contact Us</h2>
            {/* <p>
                Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing
                sed pellentesque cras massa urna lectus leo, ut.{' '}
            </p> */}
            <form action="onSubmit" method="POST">
                <label htmlFor="fullName">
                    Full Name<span>*</span>
                </label>
                <input type="text" name="fullName" id="fullName" required />
                <label htmlFor="email">
                    E-mail<span>*</span>
                </label>
                <input type="email" name="email" id="email" required />
                <label htmlFor="subject">
                    Subject<span>*</span>
                </label>
                <input type="text" name="subject" id="subject" required />
                <label htmlFor="message">
                    Message<span>*</span>
                </label>
                <textarea name="message" id="message" required />
                <div>
                    <Button
                        title="Submit"
                        backgroundColor={theme.pallette.secondary.c800}
                        borderColor={theme.pallette.secondary.c800}
                        textColor="white"
                        type="submit"
                        hoverBackgroundColor={theme.pallette.secondary.dark}
                    />
                </div>
            </form>
        </Container>
    )
}

export default FormContactUs
