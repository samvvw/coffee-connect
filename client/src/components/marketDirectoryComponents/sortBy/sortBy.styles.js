import styled from 'styled-components'
import { theme } from '../../../theme/theme'

export const Container = styled.div`
    .options {
        border-bottom: 1px solid ${theme.pallette.black[500]};
        padding: 1rem;
        display: flex;
        gap: 0.5rem;
    }

    .price-filter {
        border: 0px solid ${theme.pallette.black[500]};
        border-top: none;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        max-width: 330px;
        width: 100%;
        margin-left: 1rem;
        height: 0;
        opacity: 0;
        transition: 0.2s;
        font-size: 0;
        position: relative;

        &.active {
            border-width: 1px;
            font-size: 1rem;
            height: auto;
            padding: 1rem 2rem 2rem 0.5rem;
            opacity: 1;
        }
    }

    .roast-filter {
        border: 0px solid ${theme.pallette.black[500]};
        border-top: none;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        max-width: 330px;
        width: 100%;
        margin-left: 1rem;
        height: 0;
        opacity: 0;
        transition: 0.2s;
        font-size: 0;
        position: relative;

        &.active {
            border-width: 1px;
            font-size: 1rem;
            height: auto;
            padding: 1rem 2rem 2rem 0.5rem;
            opacity: 1;
        }
    }

    .origin-filter {
        border: 0px solid ${theme.pallette.black[500]};
        border-top: none;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        max-width: 330px;
        width: 100%;
        margin-left: 1rem;
        height: 0;
        opacity: 0;
        transition: 0.2s;
        font-size: 0;
        position: relative;

        &.active {
            border-width: 1px;
            font-size: 1rem;
            height: auto;
            padding: 1rem 2rem 2rem 0.5rem;
            opacity: 1;
        }
    }
`
