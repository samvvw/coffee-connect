import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const StyledButton = styled.button`
    background-color: ${(props) => props.backgroundColor || '#ffffff'};

    color: red;
    border-radius: 20px;
    padding: 8px 13px;
    border: 1px solid ${(props) => props.borderColor || 'gray'};
    font-weight: bold;
    cursor: pointer;
    font-size: 1rem;
    span {
        padding-left: 0.5rem;
        color: black;
    }

    &:hover > svg{
        fill: ${theme.pallette.accent2.veryLight};
    }
`
