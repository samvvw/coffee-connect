import styled from 'styled-components'
import { theme } from '../../theme/theme'
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;

    /* width: 80%;
    margin: 0 auto; */
    /* width: inherit; */
    align-items: center;

    padding-top: 5rem;
    padding-bottom: 5rem;

    h3 {
        padding-bottom: 1rem;
    }

    .productList {
        display: grid;

        grid-template-columns: 1fr;
        grid-template-rows: auto;
        padding-bottom: 2rem;
    }

    button:hover {
        background-color: ${theme.pallette.primary[500]};
        color: white;
    }
    @media only screen and (min-width: ${theme.layout.desktop}) {
        h3 {
            width: 80%;
        }
        .productList {
            width: 80%;
            display: grid;
            /* overflow-x: hidden; */
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
            grid-template-rows: auto;
            padding-left: 0;
            padding-right: 0;
        }
    }
`
