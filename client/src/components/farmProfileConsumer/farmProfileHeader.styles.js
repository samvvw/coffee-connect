import styled from 'styled-components'
import { theme } from '../../theme/theme'
export const HeaderContainer = styled.div`
    background-color: ${(props) => props.backgroundColor || '#ffffff'};
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
    width: 100%;
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

        /* border-right: 1px solid ${(props) =>
            props.borderRight || 'transparent'}; */
    }

    .spanPipe {
        padding-left: 1rem;
        font-size: 1.3rem;
        color: gray;
    }

    #divLogoName {
        padding-left: 2rem;
        padding-right: 2rem;
        display: flex;
        align-items: center;
        justify-content: start;
        width: 100%;
        height: auto;
        padding-bottom: 1rem;

        #divLogo {
            width: 57px;
            height: 57px;
            margin-right: 0.5rem;
        }
        /* img {
            width: 57px;
            height: 57px;
            border-radius: 50%;
            padding-right: 0.5rem;
        } */
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
                    /* border-left: 1px solid gray; */
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
        align-items: center;
        width: 80%;

        div {
            h5 {
                padding-left: 0;
                padding-right: 0;
            }
        }

        #h5Location {
            padding-left: 0.5rem;
        }
        #divLogoName {
            display: flex;
            #divLogo {
                height: 102px;
                width: 102px;
                margin-right: 2rem;
            }
        }
        #divData {
            grid-row: 2/3;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 1fr;
            & :nth-child(1) {
                grid-column: 1/2;
            }
            & :nth-child(2) {
                grid-column: 2/3;
            }
        }

        #divButtons {
            height: 40px;
            justify-content: flex-end;
            & :nth-child(1) {
                margin-right: 1rem;
            }
        }
        h4 {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        & :nth-child(1) {
            grid-column: 1/2;
            grid-row: 1/2;
        }
        & :nth-child(2) {
            /* data */
            /* grid-column: 1/2;
            grid-row: 2/3; */
            flex-direction: row;
            /* width: fit-content; */
            h5 {
                width: max-content;
            }
            div {
                align-items: center;
                /* width: auto; */
                /* width: fit-content; */
            }
            & :nth-child(1) {
            }
            & :nth-child(2) {
                /* width: fit-content; */
                padding-left: 1rem;
                /* border-left: 1px solid gray; */
                p {
                    /* padding-left: 2rem; */
                }
            }
        }
        & :nth-child(3) {
            grid-column: 2/3;
            grid-row: 1/3;
            display: flex;
        }

        #buttons {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            & > :nth-child(1) {
                margin-right: 1rem;
            }
            button {
                height: 40%;
            }
        }
    }
`
