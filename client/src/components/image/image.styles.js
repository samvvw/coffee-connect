import styled from 'styled-components'

export const StyledImage = styled.img`
    width: ${(props) => props.width || '100px'};
    height: auto;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
`
