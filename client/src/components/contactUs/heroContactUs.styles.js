import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);

    width: 100%;

    img {
        width: 100%;
        height: auto;
    }

    @media only screen and (min-width: 401px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        align-items: center;

        padding-top: 2rem;
        padding-bottom: 5rem;

        width: 80%;
        margin: 0 auto;
    }
`

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    padding-right: 2rem;

    align-self: center;

    h1 {
        font-size: 2.5rem;
        padding-bottom: 2rem;
    }
    p {
        font-size: 1.2rem;
    }

    @media only screen and (min-width: 401px) {
        h1 {
            font-size: 4rem;
            padding-bottom: 4rem;
        }
    }
`
export const ChildContainer = styled.div`
    grid-column: ${(props) => props.gridColumn};
    grid-row: ${(props) => props.gridRows};

    @media only screen and (min-width: 401px) {
        :nth-child(1) {
            grid-column: 1/2;
            grid-row: 1/2;
        }

        :nth-child(2) {
            grid-column: 2/3;
            grid-row: 1/2;
        }
    }
`
