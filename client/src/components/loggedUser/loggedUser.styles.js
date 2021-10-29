import styled from 'styled-components'

export const Container = styled.div`
    cursor: pointer;
    & > p {
        margin-bottom: 0.2rem;

        & > span {
            font-weight: bold;
        }
    }
`

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
