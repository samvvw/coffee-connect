import styled from 'styled-components'

export const Input = styled.input`
    opacity: 0;
    position: fixed;
    width: 0;

    & + label {
        background-color: #ffffff;
        border-color: #607d8b;
        border-radius: 30px;
        margin-right: 0.5rem;
        color: #263238;
    }

    &:checked + label {
        background-color: #000000;
        color: #ffffff;
        border-radius: 30px;
    }
`

export const Label = styled.label`
    display: inline-block;
    padding: 10px 20px;
    font-family: sans-serif, Arial;
    font-size: 1rem;
    border: 1px solid #607d8b;
    border-radius: 4px;
    cursor: pointer;
`
