import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.width || '100%'};
`

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0.5rem;

    p {
        color: #000000;
        font-size: 1rem;
        margin: 0;
    }
`
export const InfoContainer = styled.div`
    width: 100%;
    border: 1px solid black;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, auto);
    padding: 1rem;
`
export const InfoContainerChild = styled.div`
    grid-column: ${(props) => props.gridColumn};
    grid-row: ${(props) => props.gridRow};
    justify-self: ${(props) => props.justifySelf || 'auto'};
    align-self: ${(props) => props.alignSelf || 'auto'};
    p {
        color: #000000;
        font-size: 1rem;
        margin: 0;
        padding: 1rem;
    }
    img {
        border-radius: 50%;
        width: 2rem;
    }
`
export const ButtonContainer = styled.button`
    border: none;
    background-color: transparent;
`
