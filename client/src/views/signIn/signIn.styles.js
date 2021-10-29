import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;

    & h1 {
        font-weight: bold;
    }

    & form {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;

        & label {
            display: grid;
            grid-template-columns: 0.5fr 1fr;
            align-items: center;
        }

        & input {
            padding: 0.5rem 0 0.5rem 1rem;
            border-radius: 20px;
            max-width: 500px;
            width: 100%;
            border: 1px solid #000000;
        }

        & button {
            margin-top: 1rem;
            max-width: 200px;
            align-self: center;
            width: 100%;
        }
    }
`
