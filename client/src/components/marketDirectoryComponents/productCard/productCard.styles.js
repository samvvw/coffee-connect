import styled from 'styled-components'
import { theme } from '../../../theme/theme'

export const CardContainer = styled.div`
    max-width: 884px;
    width: 100%;
    padding-right: 0.5rem;
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1rem;

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

    img {
        width: 352px;
        height: 240px;
        object-fit: cover;
        border-radius: 8px;
        cursor: pointer;
    }

    .product {
        width: 100%;
        max-width: 100%;

        &__title {
            font-weight: bold;
            font-size: 1.4rem;
            max-width: 30ch;
            margin-bottom: 0.2rem;
            cursor: pointer;

            a {
                color: inherit;
                text-decoration: none;
            }
        }

        &__metadata {
            margin-bottom: 0.8rem;
            border-bottom: 1px solid #607d8b;
            padding-bottom: 0.8rem;
            display: flex;
            flex-flow: row wrap;

            p {
                margin-bottom: 0.2rem;
                color: #78909c;
                font-size: 0.9rem;

                span {
                    font-weight: 600;
                    font-size: 1rem;
                    color: #000000;
                }
            }
        }

        &__info {
            display: flex;
            justify-content: space-between;
            align-items: center;

            &__description {
                max-width: 40ch;
                width: 100%;
                font-size: 0.9rem;
            }

            &__arrow {
                cursor: pointer;
            }
        }

        &__price {
            span {
                font-weight: bold;
            }
        }
    }

    @media (max-width: 1000px) {
        max-width: 90%;
        width: 100%;
        margin: auto;
        flex-direction: column;

        img {
            max-width: 100%;
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .product {
            &__metadata {
                border-bottom: none;
                margin-bottom: 0;
                padding-bottom: 0;
            }

            &__info {
                display: none;
            }
        }
    }
`
