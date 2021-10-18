import styled from 'styled-components'

export const Button = styled.button`
    border: none;
    border-radius: 50%;
    background-color: ${(props) => props.buttonBgc || 'gray'};
`
