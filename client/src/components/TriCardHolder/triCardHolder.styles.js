import styled from 'styled-components'

export const StyleTriCardHolder = styled.div`
    width: 80%;
    margin: 0 auto;
    background-color: ${(props) => props.backgroundColor || '#ffffff'};
    padding: 0.5rem;
    align-items: top;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 400px) {
        flex-direction: column;
        align-items: center;
    }
`

export const StyleButtonHolder = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
`
