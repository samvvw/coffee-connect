import styled from 'styled-components'

export const StyledButton = styled.button`
    background-color: ${(props) => props.backgroundColor || '#000000'};
    color: ${(props) => props.textColor || '#ffffff'};
    border-radius: 20px;
    padding: 8px 13px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
`
