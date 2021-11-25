import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const StyledHero = styled.div`
    width: 100%;

    @media only screen and (min-width: ${theme.layout.desktop}) {
        margin-left: 15vw;
        margin-top: 2vw;

        display: grid;
        grid-template-columns: 45% 55%;
        place-items: center;

        margin-bottom: 10vw;
    }
`

export const StyledGridLeft = styled.div`

    width: 311px;
    margin: 3rem auto;

    @media only screen and (min-width: ${theme.layout.desktop}) {
        width: 85%;
        place-items: center;
        grid-columns: 1/2;
        padding-right: 15%;

        p
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
            font-size: 2.7vw;
        }

        p {
            font-size: 1.4vw;
            line-height: 1.2;
            width: 85%;
            margin: 1.5rem auto 2rem 0;
        }

        p:last-child {
            font-size: 0.95vw;
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
        margin-left: 1vw;
    }

    @media only screen and (min-width: ${theme.layout.desktop}) {
        display: grid;
        grid-template-columns: 45% 55%;

        place-items: center left;

        a {
            margin-left: 0;
            font-size: 1vw;
        }

        p {
            margin-left: 0;
            text-indent: 0.5vw;
            font-size: 1vw;
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

        .login {
            top: 50px;
            z-index: -100;
        }

    }
`