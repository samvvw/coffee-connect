import styled from 'styled-components'

export const StyledButton = styled.button`
    background-color: ${(props) => props.backgroundColor || '#ffffff'};

    border-radius: 20px;
    padding: 8px 13px;
    border: 1px solid lightgray;
    font-weight: bold;
    cursor: pointer;
    font-size: 1rem;
    span {
        padding-left: 0.5rem;
        color: black;
    }
`
