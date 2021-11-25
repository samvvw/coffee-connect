import styled from 'styled-components'
import { theme } from '../../../theme/theme'

export const CardContainer = styled.div`
    max-width: 330px;
    width: 100%;
    border-radius: 8px;
    padding: 0.5rem 0;

    img {
        width: 290px;
        height: 100px;
        object-fit: cover;
        cursor: pointer;
    }

    .image-container {
        position: relative;

        & .like-container {
            border: 1px solid ${theme.pallette.black[50]};
            padding: 0.2rem 0.3rem;
            border-radius: 50%;
            position: absolute;
            top: 0;
            right: 0.5rem;
            cursor: pointer;
        }
    }

    .product {
        width: 100%;
        max-width: 100%;
        padding-left: 0.5rem;

        &__title {
            font-weight: 600;
            font-size: 0.9rem;
            margin-bottom: 0.2rem;
            margin-top: 0.5rem;
            cursor: pointer;

            a {
                color: inherit;
                text-decoration: none;
            }
        }

        &__price {
            font-size: 0.8rem;
            span {
                font-weight: 500;
                font-size: 0.8rem;
            }
        }
    }
`
