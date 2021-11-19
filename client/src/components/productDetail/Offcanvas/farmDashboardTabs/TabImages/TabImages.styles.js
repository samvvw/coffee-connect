import styled from 'styled-components'
import { theme } from '../../../../../theme/theme'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
    h2 {
        color: ${theme.pallette.primary[500]};
        font-size: 1rem;
    }
    h3 {
        font-size: 1rem;
        color: ${theme.pallette.accent2[700]};
    }
    p {
        margin-bottom: 1.5rem;
    }
    #images {
        width: 100%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 144px auto 144px;
        gap: 1rem;
        margin: 0;
        > :nth-child(1) {
            grid-column: 1/2;
            grid-row: 1/2;
        }
        > :nth-child(2) {
            grid-column: 1/3;
            grid-row: 2/3;
            padding-left: 1rem;
            padding-bottom: 1rem;
            display: flex;
        }
        > :nth-child(3) {
            grid-column: 2/3;
            grid-row: 1/2;
        }
        > :nth-child(4) {
            grid-column: 1/2;
            grid-row: 3/4;
        }
        > :nth-child(5) {
            grid-column: 2/3;
            grid-row: 3/4;
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
            /* background-color: #eee; */
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

        /****************** */
    }
    #divSubmit {
        width: 100%;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-bottom: 1rem;
        padding-top: 1rem;
        position: fixed;
        bottom: 0;
        left: 0;

        box-shadow: 0px 5px 5px 0 ${theme.pallette.black[50]} inset;
    }

    @media only screen and (min-width: ${(props) =>
            props.theme.layout.desktop}) {
        h2 {
            font-size: 2rem;
        }
        margin-top: 2rem;
        & > :nth-child(1) {
            width: 100%;
        }
        & > :nth-child(2) {
            max-width: 70%;
            margin: 0 auto;
            margin-top: 2rem;
        }
        #images {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 300px auto 144px;
            > :nth-child(1) {
                grid-column: 1/4;
                grid-row: 1/2;
            }
            > :nth-child(2) {
                grid-column: 1/4;
                grid-row: 2/3;
            }
            > :nth-child(3) {
                grid-column: 1/2;
                grid-row: 3/4;
            }
            > :nth-child(4) {
                grid-column: 2/3;
                grid-row: 3/4;
            }
            > :nth-child(5) {
                grid-column: 3/4;
                grid-row: 3/4;
            }
        }
        #divSubmit {
            box-shadow: none;
            position: relative;
            padding-top: 5rem;
        }
    }
`
