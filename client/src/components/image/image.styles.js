import styled from 'styled-components'

export const StyledImage = styled.img`
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || 'auto'};
    border: ${(props) => props.border || '1px solid #ddd'};
    border-radius: 4px;
    padding: ${(props) => props.padding || '5px'};
    box-sizing: border-box;
    object-fit: fill;
`
