import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30%;
        height: 100%;
    }

    .main {
        display: flex;
        flex-direction: column;

        &__search {
            padding: 0.5rem;
            background-color: ${theme.pallette.primary[500]};
            width: 100%;
        }

        &__results {
            max-width: 97%;
            width: 100%;
            margin: 0 auto;
            padding: 2rem 1rem 0.5rem;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #cfd8dc;
            margin-bottom: 1.5rem;

            &__query {
                p {
                    margin-bottom: 0;
                    font-size: 0.85rem;

                    &:last-child {
                        font-size: 2rem;
                        font-weight: bold;
                    }
                }
            }

            &__quantity {
                align-self: flex-end;
                margin-bottom: 0;
                font-size: 0.85rem;

                span {
                    font-weight: 600;
                }
            }
        }

        .farms {
            height: 50vh;
            overflow-y: scroll;
            flex-grow: 1;
            max-width: 100%;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin-left: 1rem;
        }
    }

    .mobile-map-container {
        display: none;
    }

    .mobile-farms-container {
        display: none;
    }

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;

        .main .farms {
            margin-left: 0;
            gap: 1rem;
            height: 68vh;
        }

        .map-container {
            display: none;
        }

        .main__results {
            padding-top: 0.7rem;
            padding-bottom: 0.7rem;
            margin-bottom: 0.3rem;

            &__quantity p {
                margin-bottom: 0;
            }
        }

        .actions {
            display: flex;
            justify-content: space-between;
            gap: 2rem;

            &__filter,
            &__map {
                display: flex;
                align-items: center;
                gap: 0.2rem;
                cursor: pointer;

                small {
                    font-size: 0.8rem;
                }
            }
        }

        .main__results__query {
            padding: 0.5rem 1.8rem 0.5rem 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            p:nth-of-type(2) {
                font-size: 1.1rem;
            }
        }

        .mobile-map-container {
            display: block;
        }

        .mobile-farms-container {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 1rem;
            flex-wrap: nowrap;
            overflow-x: scroll;
            overflow-y: hidden;
            max-width: 100%;
            width: 100%;
            white-space: nowrap;
            padding-left: 1rem;

            position: absolute;
            z-index: 10000;
            bottom: 1rem;
            left: 0;
            right: 0;

            div {
                background-color: #fff;
            }

            /* Hide scrollbar for Chrome, Safari and Opera */
            &::-webkit-scrollbar {
                display: none;
            }

            /* Hide scrollbar for IE, Edge and Firefox */
            & {
                -ms-overflow-style: none; /* IE and Edge */
                scrollbar-width: none; /* Firefox */
            }
        }
    }
`
