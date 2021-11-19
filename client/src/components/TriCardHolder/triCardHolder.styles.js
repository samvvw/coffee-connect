import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const StyleTriCardHolder = styled.ul`
    text-align: center;
    list-style: none;
    padding-left: 0;
    width: 311px;
    margin: 0 auto;

    .image {
        position: relative;
        margin: 2rem auto;
    }

    .icon {
        position: absolute;
        bottom: 10%;
        right: 0;
    }

    h5 {
        margin: 1rem auto;
    }


    @media only screen and (min-width: ${theme.layout.desktop}) {
        width: 1000px;
        display: grid;
        grid-template-columns: 30% 40% 30%;
        place-items: center;

        li {
            display: grid;
            grid-template-rows: 320px 160px; 
            place-items: center;
        }

        .text {
            padding: 0 2rem;
            align-self: start;
        }
    }


`