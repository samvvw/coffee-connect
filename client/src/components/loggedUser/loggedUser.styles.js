import styled from 'styled-components'

export const Text = styled.p`
    color: #000000;
    font-size: 1rem;
    margin-bottom: 0.2rem;

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
        }

        .dropdown-menu {
            font-size: 1rem;
            width: 300px;
            margin-top: 20px;
        }

        #sign-out {
            color: red;
        }
    }
`
