import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const MyFarmWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 600px;

    button {
        border-radius: 50%;
        height: 2rem;
        width: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        background-color: ${(props) => props.theme.pallette.primary[500]};

        margin-right: 1rem;
    }
    h2 {
        margin-left: 1rem;
    }

    #divNoFarmYet {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    @media only screen and (min-width: ${(props) =>
            props.theme.layout.desktop}) {
        max-width: 80%;
        margin: 0 auto;
        #divMyProducts {
            border: none;
        }
        div {
            padding-left: 0;
            padding-right: 0;
            border-bottom: 0px solid transparent;
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
`
