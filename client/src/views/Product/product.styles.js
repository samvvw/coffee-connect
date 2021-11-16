import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    h4 {
        font-size: 2rem;
        width: 100%;
        margin-top: 1rem;
    }

    #images {
        position: relative;
        & > :nth-child(2) {
            position: absolute;
            top: 20px;
            right: 20px;
            display: flex;
            width: 6rem;
            justify-content: space-between;
        }
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

    @media only screen and (min-width: 401px) {
        #subContainer {
            display: grid;
            grid-template-columns: 2fr 1fr;
            grid-template-rows: repeat(6, auto);
            column-gap: 6rem;
            margin-top: 0;
            width: 80%;
            margin: 0 auto;

            #headerDesktop {
                grid-column: 1/3;
                grid-row: 1/2;
                div div {
                    width: 100%;
                    padding-left: 0;
                    padding-right: 0;
                }
            }
            #images {
                grid-column: 1/3;
                grid-row: 2/3;
                height: 600px;
                & > :nth-child(2) {
                    display: none;
                }
            }
            #description {
                grid-column: 1/2;
                grid-row: 3/4;
                div {
                    margin-left: 0;
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
