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
    color: ${theme.pallette.black[900]};

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

            .label-container {
                margin-top: 0.5rem;

                span {
                    color: red;
                }
            }

            small {
                color: red;
                padding-left: 0.2rem;
                padding-top: 0.1rem;
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

                &:focus {
                    outline: 0;
                    border: 2px solid ${theme.pallette.primary[500]};
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
                margin-bottom: 2rem;
                background-color: ${(props) =>
                    props.active
                        ? theme.pallette.secondary.c800
                        : theme.pallette.secondary.veryLight};
                border-color: ${(props) =>
                    props.active
                        ? theme.pallette.secondary.c800
                        : theme.pallette.secondary.veryLight};
                color: ${(props) =>
                    props.active ? '#fff' : theme.pallette.secondary.dark};
            }

            .terms-container {
                margin-top: 0.7rem;

                & .row {
                    margin-left: 3px;
                    display: grid;
                    grid-template-columns: 30px 1fr;
                }

                span {
                    color: ${theme.pallette.primary[500]};
                }
            }

            .checkboxes-container {
                padding: 0.5rem 1rem 0 2rem;
                display: flex;
                flex-direction: column;
                gap: 0.7rem;
                max-width: 250px;
            }

            .containerCheckbox {
                display: block;
                position: relative;
                padding-left: 35px;
                margin-bottom: 12px;
                cursor: pointer;
                font-size: 22px;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }

            /* Hide the browser's default checkbox */
            .containerCheckbox input {
                position: absolute;
                opacity: 0;
                cursor: pointer;
                height: 0;
                width: 0;
            }

            /* Create a custom checkbox */
            .checkmarkCheckbox {
                position: absolute;
                top: 0;
                left: 0;
                height: 25px;
                width: 25px;
                border: 2px solid ${theme.pallette.black[500]};
            }

            /* On mouse-over, add a grey background color */
            .containerCheckbox:hover input ~ .checkmarkCheckbox {
                background-color: #ccc;
            }

            /* When the checkbox is checked, add a blue background */
            .containerCheckbox input:checked ~ .checkmarkCheckbox {
                background-color: ${theme.pallette.primary[500]};
            }

            /* Create the checkmark/indicator (hidden when not checked) */
            .checkmarkCheckbox:after {
                content: '';
                position: absolute;
                display: none;
            }

            /* Show the checkmark when checked */
            .containerCheckbox input:checked ~ .checkmarkCheckbox:after {
                display: block;
            }

            /* Style the checkmark/indicator */
            .containerCheckbox .checkmarkCheckbox:after {
                left: 9px;
                top: 5px;
                width: 5px;
                height: 10px;
                border: solid white;
                border-width: 0 3px 3px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
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
        }
    }
`
