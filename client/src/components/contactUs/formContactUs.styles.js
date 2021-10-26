import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    padding-top: 2rem;

    h2 {
        font-size: 2rem;
        font-weight: bold;
    }
    p {
        text-align: center;
        font-size: 1rem;
    }
    form {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        div {
            button {
                width: 100%;
            }
        }
    }
    form :nth-child(2),
    form :nth-child(4),
    form :nth-child(6),
    form :nth-child(8) {
        margin-bottom: 2rem;
        padding-left: 1rem;
    }
    form :nth-child(8) {
        height: 300px;
        padding: 1rem;
    }
    label {
        font-size: 1.5rem;
    }
    input {
        border-radius: 25px;
        height: 50px;
    }
    textarea {
        border-radius: 25px;
    }

    @media only screen and (min-width: 401px) {
        form,
        h1,
        p {
            width: 40%;
            margin: 0 auto;
        }

        p,
        form {
            margin-bottom: 2rem;
        }
        form div button {
            width: 33%;
        }
        form div {
            display: flex;
            justify-content: flex-end;
        }
    }
`
