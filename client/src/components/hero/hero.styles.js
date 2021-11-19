import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const StyledHero = styled.div`

    width: 100%;

    @media only screen and (min-width: ${theme.layout.desktop}) {
        margin-left: 15%;
        margin-top: 6rem;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        place-items: center;

        margin-bottom: 18rem;
    }
`

export const StyledGridLeft = styled.div`

    width: 311px;
    margin: 3rem auto;

    @media only screen and (min-width: ${theme.layout.desktop}) {
        width: 90%;
        place-items: center;
        grid-columns: 1/2;
        padding-right: 15%;
    }

`

export const StyledIntro = styled.div`

    color:${theme.pallette.black[900]}

    h1 {
        font-size: 2.5rem;
    }

    p {
        font-size: 1.125rem;
        margin: 1.5rem auto;
    }

    p:last-child {
        font-size: 0.875rem;
        font-weight: bold;
    }

    span {
        text-decoration: line-through;
        color: ${theme.pallette.black[300]}
    }

    @media only screen and (min-width: ${theme.layout.desktop}) {

        h1 {
            font-size: 3rem;
        }

        p {
            font-size: 1.5rem;
        }

        p:last-child {
            font-size: 1rem;
        }

    }

`


export const StyledGoToFarmer = styled.div`

    p {
        text-align: center;
        margin: 1.5rem auto;
    }

    a:last-child {
        color: ${theme.pallette.secondary.c800};
        margin-left: 0.5rem;
    }

    @media only screen and (min-width: ${theme.layout.desktop}) {
        display: grid;
        grid-template-columns: 40% 60%;

        place-items: center left;

        a {
            margin-left: 0;
        }

        p {
            margin-left: 0;
        }
    }
`

export const Picture = styled.div`

    .mobile {
        display: block;
        width: 100%;
    }

    .desktop {
        display: none;
    }

    @media only screen and (min-width: ${theme.layout.desktop}) {

        grid-column: 2/3;

        .mobile {
            display: none;
        }
    
        .desktop {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            width: 45vw;
        }

    }
`