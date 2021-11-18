import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const Container = styled.div`
    #subContainer {
        display: flex;
        flex-direction: column;
        position: relative;
        #buttons {
            position: absolute;
            top: 20px;
            right: 20px;
            display: flex;
            padding: 1rem 0;

            & :nth-child(2) {
                margin-left: 1rem;
            }
        }
        #image {
            img {
                width: 100%;
                height: 360px;
                object-fit: cover;
            }
        }
    }
    @media only screen and (min-width: 401px) {
        #divBannerHeader {
            padding: 0;
            #divLink {
                margin-top: 1rem;
                display: flex;
                justify-content: space-between;
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
                button {
                    background-color: transparent;
                    border: none;
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
        #subContainer {
            #buttons {
                display: none;
            }
            #image {
                height: 360px;
            }
            #farmName {
                position: absolute;
                background-color: rgba(160, 160, 160, 0.5);
                height: 50px;
                width: 100%;
                bottom: 0;
                p {
                    font-size: 2rem;
                    text-align: center;
                    text-transform: uppercase;
                }
            }
        }
    }
`
