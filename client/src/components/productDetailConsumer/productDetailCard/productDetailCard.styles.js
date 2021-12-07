import styled from 'styled-components'
import { theme } from '../../../theme/theme'

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, auto);
    padding-left: 2rem;
    padding-right: 2rem;

    p {
        /* margin-left: 0.5rem; */
    }
    #farmProduct {
        display: none;
    }
    & > :nth-child(2) {
        border-top: 1px solid gray;
        padding-top: 2rem;
    }
    #process,
    #variety,
    #roastDate,
    #roastLevel {
        div,
        p {
            margin: 0;
            font-size: 0.9rem;
        }
        div {
            margin-bottom: 0.5rem;
        }
    }
    div {
        display: flex;
        /* padding-bottom: 0.3rem; */
        /* padding-bottom: 0; */
        justify-content: space-between;
        & > :nth-child(1) {
            justify-content: flex-start;
            font-size: 0.8rem;
            text-align: center;
        }
        & > :nth-child(2) {
            justify-content: flex-end;
            font-size: 1rem;
            font-weight: bold;
            text-align: center;
            span {
                font-weight: normal;
                font-size: 0.7rem;
            }
        }
    }
    #roastDate {
        padding-bottom: 1.5rem;
    }
    #size {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid gray;
        padding-top: 2rem;
        & > :nth-child(2) {
            width: 50%;
            select {
                text-align: left;
                padding-left: 0.5rem;
            }
        }

        p {
            font-weight: bold;
            margin-left: 0;
        }
    }
    #price {
        div {
            display: flex;
            align-items: center;
            padding-top: 1rem;
        }
        & > :nth-child(1) {
            p {
                font-weight: bold;
                margin: 0;
            }
        }
    }
    #button {
        margin: 1rem 0;
        button {
            width: 100%;
        }
    }

    @media only screen and (min-width: ${theme.layout.desktop}) {
        border: 1px solid black;
        border-radius: 10px;
        #farmProduct {
            padding-top: 2rem;
            display: block;
            h2 {
                text-align: left;
            }
        }
        #button {
            padding-bottom: 2rem;
        }
    }
`
