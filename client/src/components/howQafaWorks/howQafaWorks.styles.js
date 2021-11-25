import styled from 'styled-components'
import { theme } from '../../theme/theme'


export const Container = styled.div`
    margin: 5rem auto;
    width: 311px;

    @media only screen and (min-width: ${theme.layout.desktop}){ 
        margin: 10rem auto 12rem auto;
        display: Grid;
        height: 400px;
        width: 70%;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 10% 55% 35%;

        //short line
        p::before {
            content: '';
            display: block;
            position: absolute;
            left: 0; /* horizontal position */
            top: -2.3vw; /* vertical position */
            width: 50px; 
            height: 2px; /* boldness */
            background-color: #FF9933; 
        }
    }
`

export const Heading = styled.h5`

    font-size: 1rem;
    margin-bottom: 2rem;
    color: ${theme.pallette.primary[500]};

    @media only screen and (min-width: ${theme.layout.desktop}){ 
        grid-column: 1/2;
        grid-row: 1/2;
        align-self: end;
        margin-bottom: 1rem;
    }
`
export const OneLine = styled.h2`

    font-size: 2rem;
    margin-bottom: 2rem;
    color: ${theme.pallette.black[900]};


    @media only screen and (min-width: ${theme.layout.desktop}){
        font-size: 2.4rem; 
        width: 80%;
        grid-column: 1/2;
        grid-row: 2/3;
    }

    @media only screen and (min-width: 1200px){
        font-size: 3rem; 
    }
`

export const Video = styled.iframe`
    width: 100%;
    height: 100%;
    display: block;
    margin-bottom: 2rem;

    @media only screen and (min-width: ${theme.layout.desktop}){ 
        grid-column: 2/3;
        grid-row: 1/4;
    }
`

export const Paragraph = styled.p`
    
    font-size: 1.125rem;
    color: ${theme.pallette.black[900]};

    span {
        font-weight: bold;
    }


    @media only screen and (min-width: ${theme.layout.desktop}){ 
        grid-column: 1/2;
        grid-row: 3/4;
        width: 80%;

        //short line
        position: relative;
    }
`
