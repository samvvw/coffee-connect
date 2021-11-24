import styled from 'styled-components'
import { theme } from '../../../../theme/theme'

export const Container = styled.div`
    .title {
        font-size: 1rem;
        font-weight: bold;
        padding-top: 0.5rem;
        padding-left: 1rem;
        margin-bottom: 0.5rem;
    }

    .checkboxes-container {
        padding: 0.5rem 1rem 0 2rem;
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
        max-width: 250px;
    }

    .row {
        display: grid;
        grid-template-columns: 30px 1fr;
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
`
