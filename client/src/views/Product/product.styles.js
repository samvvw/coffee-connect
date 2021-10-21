import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* align-items: stretch; */
    /* gap: 60px;
    margin-top: 2rem; */
`

export const ContainerMain = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(8, auto);
    max-width: 800px;
    /* width: 100%; */
    margin: 5rem auto;
    column-gap: 2rem;

    h4 {
        font-size: 2rem;
        width: 100%;
        border-top: 1px solid black;
        padding-top: 2rem;
        padding-bottom: 2rem;
        margin-top: 2rem;
    }

    @media only screen and (max-width: 400px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(9, auto);
        margin-top: 0;
        max-width: 400px;
    }
`
export const ContainerChild = styled.div`
    grid-column: ${(props) => props.gridColumn};
    grid-row: ${(props) => props.gridRow};
    width: ${(props) => props.width || '100%'};
    max-width: 400px;
    @media only screen and (max-width: 400px) {
        //group of images
        :nth-child(2) {
            grid-column: 1/2;
            grid-row: 1/2;
        }
        //header
        :nth-child(1) {
            grid-column: 1/2;
            grid-row: 2/3;
            padding-left: 2rem;
            padding-right: 2rem;

            h4 {
                border-top: none;
                padding-top: 0;
            }
        }
        //product detail
        :nth-child(3) {
            grid-column: 1/2;
            grid-row: 3/4;
            padding-left: 2rem;
            padding-right: 2rem;
            div {
                width: 100%;
            }
        }
        //product description
        :nth-child(5) {
            grid-column: 1/2;
            grid-row: 4/5;
            padding-left: 2rem;
            padding-right: 2rem;
            padding-bottom: 2rem;
        }
        //product information
        :nth-child(7) {
            grid-column: 1/2;
            grid-row: 5/6;
            padding-left: 2rem;
            padding-right: 2rem;
            padding-bottom: 2rem;
        }
        //map
        :nth-child(8) {
            grid-column: 1/2;
            grid-row: 6/7;
            padding-left: 2rem;
            padding-right: 2rem;
        }
        //connect with farmer
        :nth-child(4) {
            grid-column: 1/2;
            grid-row: 7/8;
            padding-top: 2rem;
            padding-left: 2rem;
            padding-right: 2rem;

            & > :nth-child(1) {
                border-top: 1px solid black;
                padding-top: 2rem;
            }
        }

        //Other products from this farmer
        :nth-child(9) {
            grid-column: 1/2;
            grid-row: 8/9;
            padding-left: 2rem;
            padding-right: 2rem;
        }
        :nth-child(10) {
            grid-column: 1/2;
            grid-row: 9/10;
            padding-left: 2rem;
            padding-right: 2rem;
            div {
                height: auto;
            }
        }
    }
`
