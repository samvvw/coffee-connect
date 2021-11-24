import styled from 'styled-components'
import { theme } from '../../../theme/theme'

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
        display: flex;

        gap: 2rem;
        flex-wrap: nowrap;
        overflow-x: scroll;
        overflow-y: hidden;

        width: 400px;
        padding-left: 1rem;
        padding-right: 1rem;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar {
            display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        & {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
        }
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
