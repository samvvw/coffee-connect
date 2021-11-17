import styled from 'styled-components'
import { theme } from '../../../theme/theme'

export const Container = styled.div`
    .options {
        border-bottom: 1px solid ${theme.pallette.black[500]};
        padding: 1rem;
        display: flex;
        gap: 0.5rem;
    }

    .price-slider {
        border: 0px solid ${theme.pallette.black[500]};
        border-top: none;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        max-width: 400px;
        width: 100%;
        margin-left: 1rem;
        transition: 0.2s;
        background-color: #fff;
    }

    .price-filter {
        border: 0px solid ${theme.pallette.black[500]};
        border-top: none;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        max-width: 330px;
        width: 100%;
        margin-left: 1rem;
        height: auto;
        opacity: 0;
        transition: 0.2s;
        font-size: 0;
        position: absolute;
        z-index: 1000;
        background-color: #fff;

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
        position: absolute;
        z-index: 1000;
        background-color: #fff;

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
        position: absolute;
        z-index: 1000;
        background-color: #fff;

        &.active {
            border-width: 1px;
            font-size: 1rem;
            height: auto;
            padding: 1rem 2rem 2rem 0.5rem;
            opacity: 1;
        }
    }

    .dropdown-toggle {
        background-color: #fff;
        border: 1px solid ${theme.pallette.black[500]};
        color: ${theme.pallette.black[900]};
        border-radius: 20px;
    }

    .dropdown-menu {
        border-radius: 0 !important;
        border-bottom-left-radius: 10px !important;
        border-bottom-right-radius: 10px !important;
        border-top: 0 solid white !important;
        margin-top: 15px;
    }

    .show button {
        background-color: #fff !important;
        color: ${theme.pallette.secondary.c800} !important;
        border: 1px solid ${theme.pallette.secondary.c800} !important;
        outline-color: ${theme.pallette.secondary.c800} !important;

        &:focus,
        &:active {
            outline-color: red !important;
        }
    }

    button {
        &:focus,
        &:active {
            outline-color: red !important;
        }
    }
`
