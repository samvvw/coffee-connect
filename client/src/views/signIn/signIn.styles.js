import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* max-width: 400px; */
    width: 100%;
    margin: 0 auto;
    /* padding-top: 2rem; */

    .sign-in-image {
        display: none;
    }

    .desktop-sign-up {
        display: none;
    }

    .form-container {
        width: 100%;
        height: 100%;
        max-width: 85%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: space-evenly;
        margin: 0 auto;

        & h1 {
            font-weight: 500;
            margin-bottom: 1rem;
        }

        & form {
            display: flex;
            flex-direction: column;
            justify-content: center;

            & label {
                padding-bottom: 0.3rem;
            }

            small {
                color: red;
                padding-left: 0.2rem;
                padding-top: 0.1rem;
                /* visibility: hidden; */
            }

            small:nth-of-type(1) {
                margin-bottom: 1rem;
            }

            & input {
                padding: 0.7rem;
                border-radius: 4px;
                border: 1px solid ${theme.pallette.black[200]};
                font-size: 1rem;
                background: none;
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
            }

            /* Change autocomplete styles in WebKit */
            input:-webkit-autofill,
            input:-webkit-autofill:hover,
            input:-webkit-autofill:focus {
                border: 1px solid ${theme.pallette.black[200]};
                -webkit-box-shadow: 0 0 0px 1000px #fff inset;
                box-shadow: 0 0 0px 1000px #fff inset;
                transition: background-color 5000s ease-in-out 0s;
            }

            & button {
                margin-top: 1rem;
                align-self: center;
                width: 100%;
                background-color: ${theme.pallette.secondary.c800};
                border-color: ${theme.pallette.secondary.c800};
                color: #ffffff;
            }
        }

        & p {
            text-align: center;

            span a {
                color: ${theme.pallette.primary[500]};
                text-decoration: none;
                padding-left: 0.3rem;
            }
        }
    }

    @media only screen and (min-width: ${theme.layout.desktop}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        /* grid-template-rows: 0.1fr auto; */
        grid-template-rows: 0fr auto;

        .sign-in-image {
            display: block;
            width: 100%;
            max-width: 100%;
            height: 100%;
            max-height: 100%;
            object-fit: cover;
            grid-column: 1/2;
            grid-row: 1/3;
        }

        .form-container {
            max-width: 350px;
            width: 90%;
            grid-column: 2/3;
            grid-row: 2/3;
        }

        .desktop-sign-up {
            display: block;
            grid-column: 2/3;
            grid-row: 1/2;
            text-align: right;
            margin-right: 5rem;
            margin-top: 2rem;

            button {
                margin-left: 0.5rem;
            }
        }

        .mobile-sign-up {
            display: none;
        }
    }
`
