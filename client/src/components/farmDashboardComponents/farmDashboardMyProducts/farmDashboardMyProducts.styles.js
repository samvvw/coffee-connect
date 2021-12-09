import styled from 'styled-components'
import { theme } from '../../../theme/theme'

export const FarmMyProductsWrapper = styled.div.attrs({
    // className: 'farm-dashboard-my-products-wrapper',
})`
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 600px;

    #divMyProducts {
        display: flex;
        border-bottom: 1px solid ${(props) => props.theme.pallette.accent1.dark};
        display: flex;
        justify-content: space-between;
        padding-top: 1rem;
        padding-bottom: 1rem;
        width: 100%;
        padding-left: 1rem;
        margin: 0 auto;
    }
    #divAddProductsEmpty {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);

        button:hover {
            background-color: ${theme.pallette.primary.dark};
            color: #fff;
        }
    }

    button {
        border-radius: 50%;
        height: 2rem;
        width: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        background-color: ${(props) => props.theme.pallette.primary[500]};
        border-color: ${theme.pallette.primary[500]};
        margin-right: 1rem;

        &:hover {
            background-color: ${theme.pallette.primary.dark};
            color: #fff;
        }
    }
    h2 {
        margin-left: 1rem;
    }
    @media only screen and (min-width: ${(props) =>
            props.theme.layout.desktop}) {
        max-width: 80%;
        margin: 0 auto;

        #divMyProducts {
            border: none;

            button:hover {
                background-color: ${theme.pallette.primary.dark};
                color: #fff;
            }

            h2 {
                color: ${({ theme }) => theme.pallette.black[900]};
            }

            max-width: 1250px;
            width: 100%;
        }
        div {
            padding-left: 0;
            padding-right: 0;
            /* border-bottom: 0px solid transparent; */
            & > button {
                font-size: 1rem;
                padding: 1.2rem;
                border-radius: 20px;
                width: auto;
                height: 2rem;
                text-align: center;
                display: flex;
                align-items: center;
                &:hover {
                    color: ${theme.pallette.primary[500]};
                    background-color: #fff;
                    border: 1px solid ${theme.pallette.primary[500]};
                }
            }
        }
    }

    /* max-width: ${(props) => props.theme.layout.screenMaxWidth};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    & > button {
        height: 2rem;
        text-align: center;
        display: flex;
        align-items: center;
        &:hover {
            color: black;
            background-color: #fff;
            border: 1px solid black;
        }
    } */
`
