import styled from 'styled-components'
import { theme } from '../../theme/theme'
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    /* margin-left: 4rem; */

    h2 {
        font-size: 2rem;
        font-weight: 500;
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
            border: 1px solid ${theme.pallette.black[400]};
            margin-bottom: 1.5rem;
            padding-left: 8px;
            border-radius: 4px;

            &:focus {
                outline: 0;
                border: 1px solid #009999;
            }
        }
        textarea {
            min-height: 150px;
            height: 100%;
            padding-top: 8px;
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
        margin: 0;
        margin-left: 4rem;
        p {
            text-align: left;
        }
        p,
        h2 {
            width: 70%;
            font-size: 48px;
            font-weight: 500;
            margin-bottom: 1rem;
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
