import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    .main {
        &__search {
            padding: 0.5rem;
            background-color: #009999;
        }

        &__results {
            max-width: 97%;
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

        &__products {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            max-width: 97%;
            height: 545px;
            margin: 0 auto;
            overflow-y: scroll;
        }
    }

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        .map-container {
            display: none;
        }
    }
`
