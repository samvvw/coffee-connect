import styled from 'styled-components'
import { theme } from '../../../theme/theme'

export const Container = styled.div`
    max-width: 884px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    gap: 1.5rem;
    border-radius: 8px;

    img {
        width: 136px;
        height: 136px;
        object-fit: cover;
        border-radius: 8px;
        cursor: pointer;
    }

    .product {
        margin-top: 1rem;
        flex-grow: 1;

        & .top-container {
            display: flex;
            justify-content: space-between;
            width: 100%;

            & .bookmark-container {
                border: 1px solid ${theme.pallette.black[200]};
                border-radius: 50%;
                padding: 0.2rem 0.33rem;
                cursor: pointer;
            }
        }

        &__title {
            font-weight: 600;
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
            margin-top: 0.5rem;
            margin-bottom: 0.8rem;
            padding-bottom: 0.8rem;
            display: flex;
            flex-flow: row wrap;

            p {
                margin-bottom: 0.2rem;
                color: #78909c;
                font-size: 0.9rem;

                span {
                    font-weight: 500;
                    font-size: 1rem;
                    color: #000000;
                }
            }
        }
    }

    @media (max-width: 1000px) {
        max-width: 310px;
        width: 100%;
        flex-direction: column;
        margin-left: 0;
        margin: auto;
        gap: 0.5rem;
        border-radius: 8px;

        img {
            width: 310px;
            height: 100px;
            object-fit: cover;
            cursor: pointer;
            border-radius: 0;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }

        .product {
            margin-bottom: 1rem;
            padding: 0 0.5rem;

            &__metadata {
                border-bottom: none;
                margin-bottom: 0;
                padding-bottom: 0;
            }

            &__title {
                font-weight: 600;
                font-size: 1.1rem;
                max-width: 30ch;
                margin-bottom: 0.2rem;
                cursor: pointer;
            }

            & .top-container {
                display: flex;
                justify-content: space-between;
                width: 100%;
                padding-right: 0.7rem;

                & .bookmark-container {
                    border: 1px solid ${theme.pallette.black[200]};
                    border-radius: 50%;
                    padding: 0.2rem 0.33rem;
                    cursor: pointer;
                }
            }
        }
    }
`
