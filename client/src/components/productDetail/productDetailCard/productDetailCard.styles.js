import styled from 'styled-components'

export const CardContainer = styled.div`
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || 'auto'};
    border: 1px solid black;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, auto);
    padding: 1rem;

    @media only screen and (max-width: 400px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(6, auto);
        border: none;
    }
`
export const CardChildContainer = styled.div`
    grid-column: ${(props) => props.gridColumn};
    grid-row: ${(props) => props.gridRow};
    display: flex;

    /* flex-wrap: wrap; */

    h3 {
        font-size: 1.5rem;
    }

    p {
        font-size: 1rem;
        margin: 0;
        margin-bottom: 0.5rem;
    }
    div {
        width: 50%;
        margin-left: 0.3rem;
    }

    @media only screen and (max-width: 400px) {
        margin-bottom: 0.5rem;
        flex-direction: column;
        p {
            /* display: table; */
            min-width: 100px;
            margin: 0;
        }
        :nth-child(1) {
            display: none;
        }
        :nth-child(2) {
            //taste
            padding-top: 0.5rem;
            border-top: 1px solid #c4c4c4;
            grid-column: 1/2;
            grid-row: 1/2;
        }
        :nth-child(2) :nth-child(2) {
            font-weight: bold;
        }
        :nth-child(3) {
            //roast level
            border-top: 1px solid #c4c4c4;
            padding-top: 0.5rem;
            grid-column: 2/3;
            grid-row: 1/2;
        }
        :nth-child(3) :nth-child(2) {
            font-weight: bold;
        }
        :nth-child(4) {
            //process
            grid-column: 1/2;
            grid-row: 2/3;
        }
        :nth-child(4) :nth-child(2) {
            font-weight: bold;
        }
        :nth-child(5) {
            //variety
            grid-column: 2/3;
            grid-row: 2/3;
        }
        :nth-child(5) :nth-child(2) {
            font-weight: bold;
        }
        :nth-child(6) {
            //roasted date
            grid-column: 1/2;
            grid-row: 3/4;
        }
        :nth-child(6) :nth-child(2) {
            font-weight: bold;
        }
        :nth-child(7) {
            padding-top: 1rem;
            border-top: 1px solid #c4c4c4;
            //size
            div {
                p {
                    display: none;
                }
            }
            grid-column: 1/3;
            grid-row: 4/5;
        }
        :nth-child(7) :nth-child(0) {
            display: none;
        }

        :nth-child(8) {
            //Qty
            div {
                select {
                    width: 100%;
                }
                p {
                    text-align: right;
                }
            }
            grid-column: 1/3;
            grid-row: 5/6;
            flex-direction: row;
            align-items: flex-end;
        }

        :nth-child(9) {
            //button
            padding-top: 1rem;
            grid-column: 1/3;
            grid-row: 6/7;
        }
    }
`

export const PPrice = styled.p`
    font-size: ${(props) => props.fontSize || '1rem'};
    font-weight: bold;
    span {
        font-size: 0.6rem;
    }
`