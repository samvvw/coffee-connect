import styled from 'styled-components'

export const SelectContainer = styled.select`
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || 'auto'};
    border-radius: 1rem;

    option {
        padding-left: 0.5rem;
    }
`
