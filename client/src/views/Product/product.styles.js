import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* width: 80%;
    margin: 0 auto; */
    h4 {
        font-size: 2rem;
        width: 100%;
        margin-top: 1rem;
    }

    #images {
        #divBanner {
            padding: 0;
            display: flex;
            flex-direction: column;
            #divLink {
                Link {
                    color: black;
                }

                display: flex;
                justify-content: space-between;
                padding: 0 1rem;
                margin-bottom: 1rem;
                button {
                    background-color: transparent;
                    border: none;
                }
            }
        }
        /* position: relative;
        & > :nth-child(2) {
            position: absolute;
            top: 20px;
            right: 20px;
            display: flex;
            width: 6rem;
            justify-content: space-between;
        } */

        /* .imagesWrapper {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            grid-template-rows: repeat(3, 1fr);
            gap: 0.5rem;
            img {
                width: 100%;
                object-fit: cover;
                border-radius: 5px;
            }
            .picture {
                border-radius: 50px;
            }
            & :nth-child(1) {
                grid-column: 1/5;
                grid-row: 1/4;
            }
            & :nth-child(2) {
                grid-column: 5/7;
                grid-row: 1/3;
            }
            & :nth-child(3) {
                grid-column: 5/6;
                grid-row: 3/4;
            }
            & :nth-child(4) {
                grid-column: 6/7;
                grid-row: 3/4;
            }
        } */
    }

    #description {
        width: 80%;
        margin: 0 auto;
        h5 {
            font-size: 1rem;
        }
        border-top: 1px solid gray;
        padding-top: 1.5rem;
        margin-top: 1rem;
    }
    #map {
        padding-top: 2rem;
        div {
            p {
                font-size: 1.2rem;
                font-weight: bold;
            }
            padding-bottom: 1rem;
            padding-left: 2rem;
            padding-right: 2rem;
        }
    }

    #connectWFarmer {
        padding-top: 2rem;
    }

    #otherProducts {
        background-color: whitesmoke;

        padding-left: 2rem;
        padding-right: 2rem;
        margin-top: 2rem;
        padding-top: 2rem;
        h4 {
            font-size: 1.5rem;
            padding-bottom: 1rem;
        }
    }

    @media only screen and (min-width: ${theme.layout.desktop}) {
        #subContainer {
            display: grid;
            grid-template-columns: 2fr 1fr;
            grid-template-rows: repeat(6, auto);
            column-gap: 6rem;
            margin-top: 0;
            width: 80%;
            margin: 0 auto;
            margin-bottom: 6rem;
            #divBannerHeader {
                padding: 0;

                #divLink {
                    margin-top: 1rem;
                    display: flex;
                    a {
                        display: flex;
                        text-decoration: none;
                    }
                    Link {
                        span {
                            font-size: 1rem;
                            color: ${theme.pallette.black[400]};
                            color: red;
                        }
                        p {
                            margin: 0;
                        }
                    }

                    span {
                        font-size: 1rem;
                        color: ${theme.pallette.black[400]};
                    }
                    p {
                        color: black;
                        margin: 0;
                    }

                    display: flex;
                    /* justify-content: space-between; */
                    padding: 0 1rem;
                }
            }

            #images {
                grid-column: 1/3;
                grid-row: 2/3;

                .imagesWrapper {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    grid-template-rows: repeat(3, 1fr);
                    gap: 0.5rem;
                    max-height: 600px;

                    div img {
                        width: 100%;
                        object-fit: cover;
                        border-radius: 5px;
                        height: 100%;
                    }
                    .picture {
                        border-radius: 50px;
                    }
                    & :nth-child(1) {
                        grid-column: 1/5;
                        grid-row: 1/4;
                    }
                    & :nth-child(2) {
                        grid-column: 5/7;
                        grid-row: 1/3;
                    }
                    & :nth-child(3) {
                        grid-column: 5/6;
                        grid-row: 3/4;
                    }
                    & :nth-child(4) {
                        grid-column: 6/7;
                        grid-row: 3/4;
                    }
                }
            }

            #headerDesktop {
                grid-column: 1/3;
                grid-row: 1/2;
                div div {
                    width: 100%;
                    padding-left: 0;
                    padding-right: 0;
                }
            }
            /* #images {
                grid-column: 1/3;
                grid-row: 2/3;
                height: 600px;
                & > :nth-child(2) {
                    display: none;
                }
            } */
            #description {
                grid-column: 1/2;
                grid-row: 3/4;
                border: none;
                width: -webkit-fill-available;

                #divTasteAromas {
                    margin-top: 2rem;
                    margin-bottom: 2rem;
                    div {
                        display: flex;
                        margin-bottom: 1rem;
                    }
                    border-bottom: 1px solid gray;
                }
                h5 {
                    font-weight: bold;
                }
                h6 {
                    font-size: 0.87;
                    margin: 0;
                }
                div p {
                    font-size: 1rem;
                    font-weight: bold;
                    margin-left: 1rem;
                    margin-bottom: 0;
                }
            }
            #detailCard {
                grid-column: 2/3;
                grid-row: 3/6;
                padding-top: 3rem;
            }
            #map {
                grid-column: 1/2;
                grid-row: 4/5;
                div {
                    padding-left: 0;
                }
            }
            #connectWFarmer {
                grid-column: 1/2;
                grid-row: 5/6;
                padding-top: 6rem;
                div {
                    margin-left: 0;
                }
                & > :nth-child(1) {
                    & > :nth-child(1) {
                        border-bottom: 1px solid gray;
                        margin-bottom: 1rem;
                    }
                    & > :nth-child(4) {
                        width: 30%;
                    }
                }
            }
        }
        #otherProducts {
            /* grid-column: 1/3;
            grid-row: 6/7; */
            h4 {
                font-size: 2.5rem;
            }
            padding: 6rem;
            div {
                background-color: whitesmoke;
            }
        }
    }
`
