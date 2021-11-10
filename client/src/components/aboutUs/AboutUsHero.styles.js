import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    .image-wrapper {
        height: 280px;
        overflow: hidden;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50%;
    }

    @media only screen and (min-width: 401px) {
        align-items: center;

        padding-top: 2rem;
        padding-bottom: 5rem;

        width: 100%;
        margin: 0 auto;

        img {
            width: 100%;
            object-fit: cover;
        }
    }
`

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.438rem;

    align-self: center;
    h1 {
        font-size: 2rem;
        font-weight: bold;
    }

    p {
        margin-top: 1rem;
        font-size: 1.125rem;
        font-weight: bold;
    }
    @media only screen and (min-width: 401px) {
        h1 {
            font-size: 4rem;
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
