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

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    padding-top: 5rem;
    padding-bottom: 5rem;

    @media only screen and (min-width: 401px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        width: 80%;
        gap: 3rem;
        margin: 0 auto;
    }
`
