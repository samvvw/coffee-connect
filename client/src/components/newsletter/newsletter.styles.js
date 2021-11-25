import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const Wrapper = styled.div`
    color: white;
    background-color: ${theme.pallette.primary.dark}
`

export const Container = styled.div`
    width: 100%;
    margin: 0 auto; 
    padding: 5rem 0;
    border-bottom: 1px solid white;

    @media only screen and (min-width: ${theme.layout.desktop}){ 
        width: 80%; 
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 2rem;
    }

    @media only screen and (min-width: 1000px){ 
        width: 65%;
    }
`

export const Heading = styled.h2`

    font-size: 2rem;
    width: 311px;
    margin: 0 auto 2rem auto;

    @media only screen and (min-width: ${theme.layout.desktop}){ 
        width: 100%;
        font-size: 2.5rem;
    }

    @media only screen and (min-width: 1000px){ 
        font-size: 3rem;
        grid-column: 1/2;
        grid-row: 1/2;
        margin-left: 0;
        width: 80%;
    }
`

export const Paragraph = styled.p`

    font-size: 1rem;
    width: 311px;
    margin: 0 auto 2rem auto;

    @media only screen and (min-width: ${theme.layout.desktop}){ 
        width: 70%;
        margin-left: 0;
    }

    @media only screen and (min-width: 1000px){ 
        font-size: 1.125rem;
        grid-column: 1/2;
        grid-row: 2/3;
        margin-left: 0;
        width: 90%;
    }
`

export const Email = styled.p`

    display: none;

    @media only screen and (min-width: ${theme.layout.desktop}){ 
        display: block;
        grid-column: 2/3;
        grid-row: 1/2;
        align-self: end;
        margin-bottom: 0;
    }
`
