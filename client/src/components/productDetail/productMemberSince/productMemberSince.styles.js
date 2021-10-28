import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
    height: 48px;

    align-items: center;
    img {
        border-radius: 50%;
        height: 48px;
        object-fit: cover;
    }
    div {
        display: flex;
        flex-direction: column;
    }
    p {
        font-size: 0.6rem;
        margin-bottom: 0;
        span {
            font-weight: bold;
            padding-left: 0.3rem;
        }
    }
    h5 {
        font-size: 0.7rem;
        font-weight: bold;
        margin-bottom: 0;
    }
    & > :nth-child(2) {
        padding-left: 1rem;
        display: flex;
    }
`
