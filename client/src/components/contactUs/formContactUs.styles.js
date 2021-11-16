import styled from 'styled-components'
import { theme } from '../../theme/theme'
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;

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

        label {
            margin-bottom: 0.5rem;
        }
        input[type='text'],
        input[type='email'],
        textarea {
            height: 48px;
            width: 100%;
            border-color: ${theme.pallette.accent1.light};
            margin-bottom: 1.5rem;
        }
        textarea {
            height: 300px;
        }

        div {
            button {
                width: 100%;
            }
        }
    }

    label {
        font-size: 1.5rem;
        span {
            color: red;
        }
    }

    @media only screen and (min-width: ${theme.layout.desktop}) {
        p {
            text-align: left;
        }
        p,
        h2 {
            width: 70%;
        }

        form {
            width: 70%;
            h2 {
                text-align: left;
                font-size: 2.5rem;
            }
            /* margin: 0 auto; */
        }

        p,
        form {
            margin-bottom: 2rem;
        }
        form div button {
            width: 50%;
            margin: 0 auto;
        }
        form div {
            display: flex;
            justify-content: flex-end;
        }
    }
`
