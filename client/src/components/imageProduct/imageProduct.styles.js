import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const Container = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    img {
        width: ${(props) => props.width || '100%'};
        height: ${(props) => props.height || 'auto'};
        border: 2px dashed ${theme.pallette.primary[500]};
        border-radius: 4px;
        /* padding: 5px; */
        box-sizing: border-box;
        object-fit: fill;
    }

    button {
        width: 58px;
        height: 58px;
        position: absolute;

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
    }
`
