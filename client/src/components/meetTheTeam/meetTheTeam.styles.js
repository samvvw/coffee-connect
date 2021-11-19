import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const Container = styled.div`

    text-align: center;

    @media only screen and (min-width: ${theme.layout.desktop}){ 
        
        button {
            width: 270px;
        }
    }
`


export const Heading = styled.h2`
    
    font-size: 2rem;
    margin: 3rem auto 0 auto;
    width: 311px;

    @media only screen and (min-width: ${theme.layout.desktop}){ 
        font-size: 3rem;
        width: 760px;
    }

`

export const Paragraph = styled.p`

    margin: 1rem auto;
    width: 311px;

    @media only screen and (min-width: ${theme.layout.desktop}){ 
        font-size: 1.125rem;
        width: 760px;
    }

`


export const BoldParagraph = styled.p`
    font-weight: bold;
    margin: 1rem auto 2rem auto;
    width: 311px;

    @media only screen and (min-width: ${theme.layout.desktop}){ 
        font-size: 1.125rem;
        width: 760px;
    }
`