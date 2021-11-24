import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const Text = styled.p`
    color: #000000;
    font-size: 1rem;
    margin-bottom: 0.2rem;
    display: flex;
    gap: 0.5rem;
    z-index: 100;
    position: ${(props) => (props.isHome ? 'absolute' : '')};
    right: ${(props) => (props.isHome ? '32px' : '0')};

    & > a {
        color: #000000;
        text-decoration: none;

        &.active {
            font-weight: bold;
        }
    }
`

export const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        margin-bottom: 0;
        font-size: 1.1rem;
        /* padding-left: 50px; */

        & > span {
            font-weight: bold;
        }
    }

    .dropdown {
        #nav-dropdown {
            color: black;
            font-weight: bold;
            padding-left: 0.5rem;
            font-size: 1.1rem;
            margin-top: -1px;
            font-family: 'Proxima Nova';
        }

        .dropdown-menu {
            font-size: 1.1rem;
            width: 300px;
            margin-top: 20px;
        }

        #sign-out {
            color: red;
        }
    }

    .profile__badge {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -3px;

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
        font-size: 14px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
`
