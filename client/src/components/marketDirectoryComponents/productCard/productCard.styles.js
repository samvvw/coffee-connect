import styled from 'styled-components'

export const CardContainer = styled.div`
    max-width: 884px;
    width: 100%;
    padding-right: 10px;
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1rem;

    img {
        width: 352px;
        height: 240px;
        object-fit: cover;
        border-radius: 8px;
        cursor: pointer;
    }

    .product {
        &__title {
            font-weight: bold;
            font-size: 1.4rem;
            max-width: 30ch;
            margin-bottom: 0.2rem;
            cursor: pointer;
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
            &__info {
                display: none;
            }
        }
    }
`
