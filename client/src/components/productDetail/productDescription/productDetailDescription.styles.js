import styled from 'styled-components'

export const Container = styled.div`
    border-top: 1px solid gray;
    margin-left: 2rem;
    margin-right: 2rem;
    padding-top: 2rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    h2 {
        font-size: 1.2rem;
    }
    p {
        font-size: 1rem;
        font-weight: bold;
        span {
            font-weight: normal;
        }
        margin-bottom: 0;
    }
    & > :first-child {
        padding-bottom: 0.5rem;
        font-weight: bold;
    }
    & > :last-child {
        padding-top: 1rem;
    }

    @media only screen and (min-width: 401px) {
        font-size: 0.75rem;
    }
`
