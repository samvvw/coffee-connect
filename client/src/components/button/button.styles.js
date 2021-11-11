import styled from 'styled-components'

export const StyledButton = styled.button`
    background-color: ${(props) => props.backgroundColor || '#000000'};
    color: ${(props) => props.textColor || '#ffffff'};
    border-radius: 20px;
    padding: 8px 13px;
    border: none;
    cursor: pointer;
    width: ${(props) => props.width};
    border: 1px solid;
    border-color: ${(props) => props.borderColor || '#000000'};
`
