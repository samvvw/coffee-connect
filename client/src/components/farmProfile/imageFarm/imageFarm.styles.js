import styled from 'styled-components'
import { theme } from '../../../theme/theme'

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: white;

    img {
        width: ${(props) => props.width || '100%'};
        height: ${(props) => props.height || '100%'};
        border: 2px dashed ${theme.pallette.primary[500]};
        border-radius: 4px;
        /* padding: 5px; */
        box-sizing: border-box;
        object-fit: cover;
    }

    #centeredCircle {
        width: 58px;
        height: 58px;
        position: absolute;

        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);

        background-color: ${theme.pallette.black[50]};
        border-radius: 50%;
        display: 'flex';
        justify-content: center;
        align-items: center;

        color: ${theme.pallette.primary[500]};
        font-size: 2rem;

        border: none;
        cursor: pointer;
    }

    #deleteCircle {
        width: 24px;
        height: 24px;
        position: absolute;
        background-color: white;
        color: red;
        border-radius: 50%;
        display: 'flex';
        justify-content: center;
        align-items: center;
        border: none;
        cursor: pointer;
        top: 0.7rem;
        right: 0.7rem;
    }

    /* button {
        width: 40px;
        height: 40px;
        position: absolute;
        display: flex;
        align-items: center;

        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);

        background-color: ${theme.pallette.black[50]};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-content: center;

        color: ${theme.pallette.primary[500]};
        font-size: 2rem;

        border: none;
        cursor: pointer;
    } */
`
