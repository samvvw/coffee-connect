import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const StyleTriCardHolder = styled.ul`
    text-align: center;
    list-style: none;
    padding-left: 0;
    width: 311px;
    margin: 0 auto 10rem auto;

    .image {
        position: relative;
        margin: 2rem auto;
    }

    .icon {
        position: absolute;
        bottom: 10%;
        right: 5%;
    }

    h5 {
        margin: 1rem auto;
    }


    @media only screen and (min-width: ${theme.layout.desktop}) {
        width: 100%;
        display: grid;
        grid-template-columns: 27% 36% 27%;
        place-items: center;
        grid-column-gap: 5%;

        li {
            width: 100%;
            display: grid;
            grid-template-rows: 320px 160px; 
            place-items: center;
        }

        .img {
            width: 100%;
        }

        .icon {
            width: 35%;
            right: -5%;
        }

        li:nth-of-type(2) .image .icon {
            width: 28%;
            bottom: 16%;
        }

        .text {
            align-self: start;
        }
    }

    @media only screen and (min-width: 1000px) {

        .text {
            padding: 0 10%;
        }


        li:nth-of-type(2) .text {
            padding: 0 18%;
        }
    }
`