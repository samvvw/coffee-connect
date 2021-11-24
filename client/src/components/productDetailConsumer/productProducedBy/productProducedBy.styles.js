import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
    height: 48px;
    padding-left: 2rem;
    padding-right: 2rem;
    align-items: center;
    img {
        border-radius: 50%;
        width: 100%;
    }
    div {
        display: flex;
        flex-direction: column;
    }
    p {
        font-size: 0.75rem;
    }
    h5 {
        font-size: 1rem;
        font-weight: bold;
    }
    & > :nth-child(2) {
        padding-left: 1rem;
    }
`
