import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const SearchHomeContainer = styled.div`

    @media only screen and (min-width: ${theme.layout.desktop}) {
        margin-bottom: 12rem;
    }
    
`

export const Heading = styled.h2`
    text-align: center;
    font-size: 2rem;
    margin: 3rem auto 1rem auto;
    width: 311px

    @media only screen and (min-width: ${theme.layout.desktop}) {
        width: 811px
    }
`

export const MapContainer = styled.div`
    position: relative;
`

export const SearchBarContainer = styled.div`
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
`

