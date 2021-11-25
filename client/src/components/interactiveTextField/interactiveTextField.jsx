import { Container, Input, Button, Message } from './interactiveTextField.styles'
import { useState } from 'react';
import axios from 'axios'

const InteractiveTextField  = (props) => {

    const [email, setEmail] = useState("");
    const [messageShowHide, setMessageShowHide] = useState(false);

    const handleEmailInput = event => {
        setEmail(event.target.value.trim());
    }

    const handleSubmitEmail = (event, email) => {
        event.preventDefault()
        axios.post(`api/newsletterSubscription`, {email: email})
        .then(result => {    
            setMessageShowHide(true) 
            setEmail("")
        })
        .catch(error => console.log(error))
    }



    return (
        <Container onSubmit={event => handleSubmitEmail(event, email)}>
            <Input
                type="text"
                placeholder="john@example.com"
                value={email}
                onChange={event => handleEmailInput(event)}
            />
            <Button>Subscribe</Button>
            {messageShowHide ? 
                <Message>You've been added to the subscription!</Message>
                : null
            }
        </Container>
    )
}

export default InteractiveTextField 
