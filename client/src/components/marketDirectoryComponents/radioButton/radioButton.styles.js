import styled from 'styled-components'

export const Input = styled.input`
    opacity: 0;
    position: fixed;
    width: 0;

    & + label {
        background-color: #ffffff;
        border-color: #000000;
        border-radius: 30px;
        margin-right: 0.5rem;
    }

    &:checked + label {
        background-color: #000000;
        color: #ffffff;
        border-radius: 30px;
    }

    /* &:focus + label {
        background-color: #000000;
        color: #ffffff;
    } */
`

export const Label = styled.label`
    display: inline-block;
    background-color: #ddd;
    padding: 10px 20px;
    font-family: sans-serif, Arial;
    font-size: 16px;
    border: 2px solid #444;
    border-radius: 4px;
    cursor: pointer;
`
