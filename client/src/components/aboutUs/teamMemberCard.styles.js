import styled from 'styled-components'

export const Container = styled.div`
    width: ${(props) => props.width || '100%'};
    height: 100%;
    display: flex;
    flex-direction: column;

    img {
        width: 100%;
        height: auto;
        padding-bottom: 1rem;
    }

    button {
        background-color: transparent;
        max-width: 100px;
        border: none;
        cursor: pointer;
        text-decoration: underline;
    }

    h3 {
        font-size: 1.5rem;
    }

    h4,
    h5 {
        font-size: 1rem;
    }

    h3,
    h4 {
        padding-bottom: 0.5rem;
    }
`
export const IconsContainer = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-between;

    a {
        width: 24px;
        height: 24px;
    }
`
