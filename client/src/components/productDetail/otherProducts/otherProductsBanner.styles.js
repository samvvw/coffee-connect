import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    flex-wrap: wrap;

    @media only screen and (min-width: 400px) {
        width: 100%;
        background-color: ${(props) => props.backgroundColor || '#ffffff'};
        flex-direction: row;
    }
`
