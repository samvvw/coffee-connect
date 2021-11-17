import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const Container = styled.div`
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    margin-top: 4rem;

    .profile {
        margin-top: 3rem;
        margin-bottom: 4rem;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1rem;

        &__badge {
            display: flex;
            align-items: center;
            justify-content: center;

            background-color: ${(props) => {
                if (props.type === 'consumer') {
                    return theme.pallette.primary.light
                } else {
                    return theme.pallette.secondary.light
                }
            }};
            color: ${(props) => {
                if (props.type === 'consumer') {
                    return theme.pallette.primary.dark
                } else {
                    return theme.pallette.secondary.dark
                }
            }};
            font-weight: 600;
            font-size: 18px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }

        &__info {
            p {
                margin: 0;
                font-size: 1rem;
            }

            &__name {
                font-weight: 600;
            }
        }
    }

    .account {
        margin-bottom: 4rem;
        p {
            margin: 0;
        }

        &__label {
            font-size: 1.05rem;
        }

        &__type {
            font-size: 0.9rem;
        }
    }

    .actions {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        p {
            font-weight: 600;
            color: ${theme.pallette.primary[500]};
        }
    }

    @media (max-width: 500px) {
        margin-top: 3rem;
        max-width: 85%;
        width: 100%;
    }
`
