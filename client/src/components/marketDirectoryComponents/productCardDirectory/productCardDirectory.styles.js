import styled from 'styled-components'
import { theme } from '../../../theme/theme'

export const Container = styled.div`
    max-width: 884px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    gap: 1.5rem;

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
            font-weight: bold;
            font-size: 1.4rem;
            max-width: 30ch;
            margin-bottom: 0.2rem;
            cursor: pointer;
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
        flex-direction: column;

        img {
            width: 100%;
            height: 300px;
            object-fit: cover;
        }

        .product {
            &__metadata {
                border-bottom: none;
                margin-bottom: 0;
                padding-bottom: 0;
            }
        }
    }
`
