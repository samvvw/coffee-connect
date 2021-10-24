import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        text-align: center;
        font-size: 2rem;
    }

    @media only screen and (min-width: 401px) {
        h2 {
            font-size: 3rem;
        }
    }
`
