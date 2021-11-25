import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;

    h2 {
        padding-bottom: 4rem;
        padding-top: 4rem;
    }
    #galleryWrapper {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 160px 87px 145px 160px 112px 112px;

        #div1 {
            grid-column: 1/2;
            grid-row: 1/2;
        }
        #div2 {
            grid-column: 2/3;
            grid-row: 1/3;
        }
        #div3 {
            grid-column: 1/2;
            grid-row: 2/4;
        }
        #div4 {
            grid-column: 2/3;
            grid-row: 3/4;
        }
        #div5 {
            grid-column: 1/3;
            grid-row: 4/5;
        }

        #div6 {
            grid-column: 1/2;
            grid-row: 5/7;
        }

        #div7 {
            grid-column: 2/3;
            grid-row: 5/6;
        }
        #div8 {
            grid-column: 2/3;
            grid-row: 6/7;
        }

        padding-bottom: 5rem;

        #div1,
        #div2,
        #div3,
        #div4,
        #div5,
        #div6,
        #div7,
        #div8 {
            div {
                position: relative;
                width: 100%;
                height: 100%;
                margin: 0 auto;
                background-color: white;

                img {
                    width: 100%;
                    height: 100%;

                    border-radius: 4px;

                    box-sizing: border-box;
                    object-fit: cover;
                }
            }
        }
    }

    @media only screen and (min-width: ${theme.layout.desktop}) {
        width: 80%;
        margin: 0 auto;
        height: auto;
        h2 {
            padding-top: 3rem;
            padding-bottom: 4rem;
            padding-top: 4rem;
        }
        #galleryWrapper {
            grid-template-columns: 1fr 1fr 0.5fr 0.5fr 1fr;
            grid-template-rows: repeat(5, 270px);

            #div1 {
                grid-column: 1/3;
                grid-row: 1/3;
            }
            #div2 {
                grid-column: 3/5;
                grid-row: 1/3;
            }
            #div3 {
                grid-column: 5/6;
                grid-row: 1/2;
            }
            #div4 {
                grid-column: 5/6;
                grid-row: 2/3;
            }
            #div5 {
                grid-column: 1 / 4;
                grid-row: 3/4;
            }
            #div6 {
                grid-column: 4/6;
                grid-row: 3/4;
            }
            #div7 {
                grid-column: 1/3;
                grid-row: 4/6;
            }
            #div8 {
                grid-column: 3/6;
                grid-row: 4/6;
            }
        }
    }
`
