import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
    width: 90%;
    margin: 0 auto;
    padding-top: 2rem;

    .type-label {
        font-weight: 500;
        margin: 0;
        margin-bottom: 8px;
        margin-top: 16px;
    }

    .sign-up-image {
        display: none;
    }

    & h1 {
        font-weight: 500;
    }

    .form-container {
        margin-top: 4rem;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 900px;
        width: 95%;
    }

    & form {
        margin-top: 1rem;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 600px;
        width: 100%;

        & .tab-container {
            display: flex;
            gap: 1rem;

            .tab {
                cursor: pointer;
                border: 1px solid ${theme.pallette.black[200]};
                padding: 0.7rem;
                width: 100%;
                max-width: 100%;
                display: flex;
                justify-content: center;
                border-radius: 4px;
                font-size: 0.9rem;

                &.active {
                    border-bottom: none;
                    background-color: ${theme.pallette.primary[500]};
                    border-color: ${theme.pallette.primary[500]};
                    color: white;
                }

                input {
                    visibility: hidden;
                }
            }
        }

        & .form-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 1rem 0;

            small {
                color: red;
                padding-left: 0.2rem;
                padding-top: 0.1rem;
                /* visibility: hidden; */
            }

            small:not(:nth-last-of-type()) {
                margin-bottom: 1rem;
            }

            & label {
                align-items: center;
                margin-top: 0.5rem;
                padding-bottom: 0.3rem;
            }

            & input {
                padding: 0.5rem;
                border-radius: 4px;
                border: 1px solid ${theme.pallette.black[200]};
                font-size: 1rem;
                background: none;
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                /* margin-bottom: 0.5rem; */

                &::placeholder {
                    color: ${theme.pallette.black[200]};
                }
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
                margin-top: 1.5rem;
                align-self: center;
                width: 100%;
                background-color: ${theme.pallette.secondary.c800};
                border-color: ${theme.pallette.secondary.c800};
                color: #ffffff;
                margin-bottom: 2rem;
            }
        }
    }

    @media only screen and (min-width: ${theme.layout.desktop}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        /* grid-template-rows: 0.1fr auto; */
        grid-template-rows: 0.1fr auto;
        max-width: 100%;
        width: 100%;
        padding-top: 0;

        .sign-up-image {
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
            max-width: 420px;
            width: 90%;
            grid-column: 2/3;
            grid-row: 2/3;
            /* padding-top: 2rem; */
        }
    }
`
