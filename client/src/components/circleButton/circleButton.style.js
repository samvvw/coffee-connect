import styled from 'styled-components'

export const Button = styled.button`
    border: none;
    border-radius: 50%;
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.buttonBgc || 'white'};
`
