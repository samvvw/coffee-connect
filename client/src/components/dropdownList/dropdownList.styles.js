import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const SelectContainer = styled.select`
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || 'auto'};
    border-radius: 1rem;

    option {
        padding-left: 0.5rem;
    }

    &:focus {
        outline: 0;
        border: 1px solid ${theme.pallette.primary[500]};
    }
`
