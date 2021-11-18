import styled from 'styled-components'
import { theme } from '../../theme/theme'


export const StyledGrid = styled.div`
    padding: 2rem;

    @media only screen and (min-width: ${theme.layout.desktop}) {
        display: grid;
        grid-template-columns: ${(props) => props.gridTemplateColumns};
        grid-template-rows: ${(props) => props.gridTemplateRows};
    }
`
