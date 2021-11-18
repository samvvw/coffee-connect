import styled from 'styled-components'
import { theme } from '../../../theme/theme'

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, auto);
    padding-left: 2rem;
    padding-right: 2rem;

    p {
        margin-left: 0.5rem;
    }
    #farmProduct {
        display: none;
    }
    & > :nth-child(2) {
        border-top: 1px solid gray;
        padding-top: 2rem;
    }
    #process,
    #variety,
    #roastDate,
    #roastLevel {
        div,
        p {
            margin: 0;
            font-size: 0.9rem;
        }
        div {
            margin-bottom: 0.5rem;
        }
    }
    div {
        display: flex;
        /* padding-bottom: 0.3rem; */
        /* padding-bottom: 0; */
        justify-content: space-between;
        & > :nth-child(1) {
            justify-content: flex-start;
            font-size: 0.8rem;
            text-align: center;
        }
        & > :nth-child(2) {
            justify-content: flex-end;
            font-size: 1rem;
            font-weight: bold;
            text-align: center;
            span {
                font-weight: normal;
                font-size: 0.7rem;
            }
        }
    }
    #roastDate {
        padding-bottom: 1.5rem;
    }
    #size {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid gray;
        padding-top: 2rem;
        & > :nth-child(2) {
            width: 50%;
            select {
                text-align: left;
                padding-left: 0.5rem;
            }
        }

        p {
            font-weight: bold;
        }
    }
    #price {
        div {
            display: flex;
            align-items: center;
            padding-top: 1rem;
        }
        & > :nth-child(1) {
            p {
                font-weight: bold;
                margin: 0;
            }
        }
    }
    #button {
        margin: 1rem 0;
        button {
            width: 100%;
        }
    }

    @media only screen and (min-width: ${theme.layout.desktop}) {
        border: 1px solid black;
        border-radius: 10px;
        #farmProduct {
            padding-top: 2rem;
            display: block;
            h2 {
                text-align: left;
            }
        }
        #button {
            padding-bottom: 2rem;
        }
    }
`
// export const CardChildContainer = styled.div`
//     grid-column: ${(props) => props.gridColumn};
//     grid-row: ${(props) => props.gridRow};
//     display: flex;

//     /* flex-wrap: wrap; */

//     h3 {
//         font-size: 1.5rem;
//     }

//     p {
//         font-size: 1rem;
//         margin: 0;
//         margin-bottom: 0.5rem;
//     }
//     div {
//         width: 50%;
//         margin-left: 0.3rem;
//     }

//     @media only screen and (max-width: 400px) {
//         margin-bottom: 0.5rem;
//         flex-direction: column;
//         p {
//             /* display: table; */
//             min-width: 100px;
//             margin: 0;
//         }
//         :nth-child(1) {
//             display: none;
//         }
//         :nth-child(2) {
//             //taste
//             padding-top: 0.5rem;
//             border-top: 1px solid #c4c4c4;
//             grid-column: 1/2;
//             grid-row: 1/2;
//         }
//         :nth-child(2) :nth-child(2) {
//             font-weight: bold;
//         }
//         :nth-child(3) {
//             //roast level
//             border-top: 1px solid #c4c4c4;
//             padding-top: 0.5rem;
//             grid-column: 2/3;
//             grid-row: 1/2;
//         }
//         :nth-child(3) :nth-child(2) {
//             font-weight: bold;
//         }
//         :nth-child(4) {
//             //process
//             grid-column: 1/2;
//             grid-row: 2/3;
//         }
//         :nth-child(4) :nth-child(2) {
//             font-weight: bold;
//         }
//         :nth-child(5) {
//             //variety
//             grid-column: 2/3;
//             grid-row: 2/3;
//         }
//         :nth-child(5) :nth-child(2) {
//             font-weight: bold;
//         }
//         :nth-child(6) {
//             //roasted date
//             grid-column: 1/2;
//             grid-row: 3/4;
//         }
//         :nth-child(6) :nth-child(2) {
//             font-weight: bold;
//         }
//         :nth-child(7) {
//             padding-top: 1rem;
//             border-top: 1px solid #c4c4c4;
//             //size
//             div {
//                 p {
//                     display: none;
//                 }
//             }
//             grid-column: 1/3;
//             grid-row: 4/5;
//         }
//         :nth-child(7) :nth-child(0) {
//             display: none;
//         }

//         :nth-child(8) {
//             //Qty
//             div {
//                 select {
//                     width: 100%;
//                 }
//                 p {
//                     text-align: right;
//                 }
//             }
//             grid-column: 1/3;
//             grid-row: 5/6;
//             flex-direction: row;
//             align-items: flex-end;
//         }

//         :nth-child(9) {
//             //button
//             padding-top: 1rem;
//             grid-column: 1/3;
//             grid-row: 6/7;
//         }
//     }
// `

// export const PPrice = styled.p`
//     font-size: ${(props) => props.fontSize || '1rem'};
//     font-weight: bold;
//     span {
//         font-size: 0.6rem;
//     }
// `
