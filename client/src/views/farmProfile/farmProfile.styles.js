import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const Container = styled.div`
    #mainContainer {
        display: flex;
        flex-direction: column;

        > :nth-child(1) {
            /* Header */
            order: 2;
        }
        > :nth-child(2) {
            /* Hero */
            order: 1;
        }
        > :nth-child(3) {
            /*Description  */
            order: 3;
            display: flex;
            flex-direction: column;
            padding-left: 2rem;
            padding-right: 2rem;

            > :nth-child(1) {
                border-top: 1px solid lightgray;
                padding-top: 2rem;
                padding-bottom: 1rem;
            }
        }
        > :nth-child(4) {
            /* Certificates */
            order: 4;
            display: block;
            > :nth-child(1) {
                border-top: 1px solid lightgray;
                padding-top: 2rem;
            }
        }
        > :nth-child(5) {
            /* Products */
            order: 5;
            padding-top: 4rem;
            /* display: block; */
            > :nth-child(1) {
                /* margin-top: 2rem; */
                border-top: 1px solid lightgray;
                padding-top: 3rem;
            }
        }
    }
    #gallery {
        width: 100%;
        background-color: ${theme.pallette.black[50]};
        padding-left: 2rem;
        padding-right: 2rem;
    }
    @media only screen and (min-width: ${theme.layout.desktop}) {
        #mainContainer {
            width: 80%;
            margin: 0 auto;

            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(4, auto);

            > :nth-child(1) {
                /* background-color: red; */

                grid-column: 1/4;
                grid-row: 1/2;

                div {
                    width: 100%;
                    padding-left: 0;
                    padding-right: 0;
                }
            }
            > :nth-child(2) {
                grid-column: 1/4;
                grid-row: 2/3;
            }
            > :nth-child(3) {
                /* description */
                grid-column: 1/3;
                grid-row: 3/4;

                > :nth-child(1) {
                    border-top: none;
                }
                div {
                    width: 100%;
                }
            }
            > :nth-child(4) {
                /* map */
                grid-column: 3/4;
                grid-row: 3/4;
                padding-top: 2rem;
                p {
                    font-size: 1rem;
                }
                > :nth-child(1) {
                    border-top: none;
                }
            }
            /* certificates */
            > :nth-child(5) {
                grid-column: 1/4;
                grid-row: 4/5;
                padding-left: 0;
                padding-right: 0;
                padding-top: 0;
                > :nth-child(1) {
                    border-top: none;
                }
                display: flex;
            }
            /* > :nth-child(6) {
                grid-column: 1/4;
                grid-row: 5/6;
                padding-left: 0;
                padding-right: 0;
                padding-top: 4rem;

                > :nth-child(1) {
                    border-top: 1px solid lightgray;
                    padding-top: 2rem;
                }
            } */
        }
        #gallery {
            margin-top: 4rem;
        }
    }
`
