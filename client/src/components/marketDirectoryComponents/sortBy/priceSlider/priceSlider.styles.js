import styled from 'styled-components'
import { theme } from '../../../../theme/theme'

export const Container = styled.div`
    .title {
        font-weight: bold;
        padding-left: 1rem;
        margin-bottom: 0.5rem;
    }

    .values {
        padding-left: 1rem;
    }

    .slider-container {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem 0 1rem;
    }

    .slider {
        position: relative;
        max-width: 200px;
        width: 100%;
    }

    .slider__track,
    .slider__range,
    .slider__left-value,
    .slider__right-value {
        position: absolute;
    }

    .slider__track,
    .slider__range {
        border-radius: 3px;
        height: 8px;
        transition: 200ms;
    }

    .slider__track {
        background-color: #ced4da;
        width: 100%;
        z-index: 1;
    }

    .slider__range {
        background-color: ${theme.pallette.primary[500]};
        z-index: 2;
    }

    .slider__left-value,
    .slider__right-value {
        color: #dee2e6;
        font-size: 12px;
        margin-top: 20px;
    }

    .slider__left-value {
        left: 6px;
    }

    .slider__right-value {
        right: -4px;
    }

    /* Removing the default appearance */
    .thumb,
    .thumb::-webkit-slider-thumb {
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
    }

    .thumb {
        pointer-events: none;
        position: absolute;
        height: 0;
        width: 200px;
        outline: none;
    }

    .thumb--zindex-3 {
        z-index: 3;
    }

    .thumb--zindex-4 {
        z-index: 4;
    }

    .thumb--zindex-5 {
        z-index: 5;
    }

    /* For Chrome browsers */
    .thumb::-webkit-slider-thumb {
        background-color: #ffffff; //Circle handlers
        border: 2px solid ${theme.pallette.black[500]};
        border-radius: 50%;
        cursor: pointer;
        height: 23px;
        width: 23px;
        margin-top: 6px;
        pointer-events: all;
        position: relative;
    }

    /* For Firefox browsers */
    .thumb::-moz-range-thumb {
        background-color: #f1f5f7;
        border: none;
        border-radius: 50%;
        box-shadow: 0 0 1px 1px #ced4da;
        cursor: pointer;
        height: 23px;
        width: 23px;
        margin-top: 4px;
        pointer-events: all;
        position: relative;
    }
`
