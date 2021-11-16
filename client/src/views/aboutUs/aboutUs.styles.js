import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        padding-left: 1.438rem;
        text-align: start;
        font-size: 2rem;
        font-weight: bold;
    }

    @media only screen and (min-width: 401px) {
        h2 {
            font-size: 3rem;
            text-align: center;
        }
    }
`

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    padding-top: 1.312rem;
    padding-bottom: 5rem;

    @media only screen and (min-width: 401px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        width: 80%;
        gap: 1rem;
        margin: 0 auto;
        padding-bottom: 10rem;
    }
`
