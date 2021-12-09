import styled from 'styled-components'
import { theme } from '../../../theme/theme'
export const HeaderContainer = styled.div`
    background-color: ${(props) => props.backgroundColor || '#f2f2f2'};
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
`
export const HeaderMainContainer = styled.div`
    display: flex;
    flex-direction: column;

    div {
        h4 {
            font-size: 1.5rem;
            font-weight: bold;
        }

        p,
        h5 {
            font-size: 1rem;
            display: flex;
            align-items: center;
        }

        p {
            color: gray;
        }
        h5 {
            color: Black;
            padding-right: 0.7rem;
            padding-left: 0.7rem;
        }

        border-right: 1px solid ${(props) => props.borderRight || 'transparent'};
    }
    & > :nth-child(1) {
        padding-left: 2rem;
        padding-right: 2rem;
    }
    & > :nth-child(2) {
        display: flex;
        flex-direction: column;
        row-gap: 0.5rem;
        padding-left: 2rem;
        padding-right: 2rem;
        h5,
        p {
            margin: 0;
        }
        & > :nth-child(1) {
            display: flex;

            div {
                display: flex;
            }
            & > :nth-child(2) {
                h5 {
                    border-left: 1px solid gray;
                }
                p {
                    display: none;
                }
            }
        }
        & > :nth-child(2) {
            display: flex;
        }
    }
    #buttons {
        display: none;
    }

    @media only screen and (min-width: ${theme.layout.desktop}) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: auto auto;
        margin-bottom: 1rem;

        & > :nth-child(1) {
            grid-column: 1/2;
            grid-row: 1/2;
        }
        #origin {
            grid-column: 1/2;
            grid-row: 2/3;
            display: flex;
            flex-direction: row;
            margin-top: 0.3rem;
            max-width: 70% !important;
            width: 100% !important;
            /* width: fit-content !important; */
            div {
                width: fit-content;
            }
            & > :nth-child(2) {
                /* padding-left: 1rem; */
                /* margin-left: 1rem; */
                border-left: 1px solid gray;
                p {
                    margin-left: 1rem;
                }
            }
        }

        #buttons {
            grid-column: 2/3;
            grid-row: 1/2;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            & > :nth-child(1) {
                margin-right: 1rem;
            }
        }
    }
`
