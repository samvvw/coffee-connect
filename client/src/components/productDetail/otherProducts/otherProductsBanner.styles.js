import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background-color: ${(props) => props.backgroundColor || '#ffffff'};
    align-items: top;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media only screen and (max-width: 400px) {
        flex-direction: column;
        align-items: center;
    }
`
