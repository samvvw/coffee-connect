import styled from 'styled-components'
import { theme } from '../../../../theme/theme'

export const Container = styled.div`
    //classes from bootstrap
    .nav-link.active {
        border-color: transparent;
        border-bottom: 4px solid ${theme.pallette.secondary.c800};
        color: black;
        font-weight: bold;
    }
    .nav-link {
        color: black;
    }
`
