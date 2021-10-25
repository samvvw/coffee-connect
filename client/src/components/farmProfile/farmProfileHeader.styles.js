import styled from 'styled-components'

export const HeaderContainer = styled.div`
    background-color: ${(props) => props.backgroundColor || 'white'};
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 1rem;
    padding-bottom: 1rem;
    #headerMainContainer {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, auto);
        #farmLogo {
            img {
                width: 64px;
                height: 64px;
                object-fit: cover;
            }
            grid-column: 1/2;
            grid-row: 2/3;
            display: flex;
            align-items: center;
            h4 {
                font-size: 1.5rem;
                font-weight: bold;
                margin-left: 1rem;
            }
        }
        #farmData {
            order: 2;
            grid-column: 1/2;
            grid-row: 3/4;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(2, auto);

            h5,
            p {
                font-size: 1rem;
            }

            #originLocation {
                grid-column: 1/2;
                grid-row: 1/2;
                display: flex;
                div {
                    width: 50%;
                    display: flex;
                    align-items: center;
                }
                #origin {
                    h5 {
                        padding-left: 0.5rem;
                    }
                }
                #location {
                    border-left: 1px solid #898989;
                    padding-left: 0.5rem;
                    p {
                        display: none;
                    }
                }
            }

            #altitude {
                grid-column: 1/2;
                grid-row: 2/3;
                div {
                    display: flex;
                    h5 {
                        padding-left: 0.5rem;
                    }
                }
            }
        }
        #farmIcons {
            grid-column: 1/2;
            grid-row: 1/2;
            display: flex;
            justify-content: flex-end;
            margin-right: 1rem;
        }
        #farmIcons div:first-child {
            padding-right: 1rem;
        }

        @media only screen and (min-width: 401px) {
            grid-template-columns: 4fr 4fr 1fr;
            grid-template-rows: 1fr;
            background-color: #f2f2f2;

            #farmLogo {
                grid-column: 1/2;
                grid-row: 1/2;
                h4 {
                    font-size: 3rem;
                }
            }
            #farmData {
                grid-column: 2/3;
                grid-row: 1/2;
                display: flex;
                flex-direction: row;

                display: grid;
                grid-template-columns: 2fr 1fr;
                grid-template-rows: 1fr;
                #originLocation {
                    grid-column: 1/2;
                    grid-row: 1/2;
                    align-items: center;
                    p,
                    h5 {
                        margin-bottom: 0;
                    }
                    #origin {
                        display: flex;
                        flex-direction: column;
                        padding-right: 0.3rem;
                    }
                    #location {
                        display: flex;
                        flex-direction: column;
                        p {
                            display: block;
                        }
                    }
                }
                #altitude {
                    grid-column: 2/3;
                    grid-row: 1/2;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    div {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        border-left: 1px solid #898989;
                        p,
                        h5 {
                            margin-bottom: 0;
                        }
                    }
                }
            }
            #farmIcons {
                grid-column: 3/4;
                grid-row: 1/2;
                align-items: center;
            }
        }
    }

    @media only screen and (min-width: 401px) {
        padding-top: 0;
    }
`
