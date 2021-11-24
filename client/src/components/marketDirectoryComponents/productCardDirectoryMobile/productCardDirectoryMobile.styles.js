import styled from 'styled-components'
import { theme } from '../../../theme/theme'

export const CardContainer = styled.div`
    max-width: 330px;
    width: 100%;
    border-radius: 8px;
    padding: 0;

    img {
        width: 330px;
        height: 150px;
        object-fit: cover;
        cursor: pointer;
    }

    .image-container {
        position: relative;

        & .bookmark-container {
            border: 1px solid ${theme.pallette.black[50]};
            padding: 0.2rem 0.3rem;
            border-radius: 50%;
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            cursor: pointer;
        }
    }

    .farm {
        width: 100%;
        max-width: 100%;
        padding-left: 1rem;

        &__title {
            font-weight: bold;
            font-size: 0.9rem;
            margin-bottom: 0.2rem;
            margin-top: 0.5rem;
            cursor: pointer;
        }

        &__price {
            font-size: 0.8rem;
            span {
                font-weight: bold;
                font-size: 0.8rem;
            }
        }
    }
`
