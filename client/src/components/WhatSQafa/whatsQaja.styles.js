import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const Container = styled.div`

    text-align: center;
    width: 311px;
    margin: 5rem auto;

    //short line
    p::before {
        content: '';
        display: block;
        position: absolute;
        left: 50%; /* horizontal position */
        transform: translateX(-50%);
        top: -25px; /* vertical position */
        width: 50px; 
        height: 2px; /* boldness */
        background-color: #FF9933; 
    }

    @media only screen and (min-width: ${theme.layout.desktop}) {
        width: 760px;
    }
`

export const Heading = styled.h2`
    font-size: 2rem;
    margin-bottom: 3rem;
    @media only screen and (max-width: 400px) {
        font-size: 3rem;
    }
`
export const StyledParagraph = styled.p`
    font-size: 1.1rem;
    position: relative;



    @media only screen and (max-width: 400px) {
        font-size: 1.125rem;
    }
`
