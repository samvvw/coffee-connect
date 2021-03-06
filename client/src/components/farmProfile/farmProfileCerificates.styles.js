import styled from 'styled-components'

export const Container = styled.div`
    display: ${(props) => props.display};
    flex-direction: column;
    padding-left: 2rem;
    padding-right: 2rem;
    h5 {
        font-size: 1.5rem;
        padding-bottom: 1rem;
    }
    #certificatesContainer {
        display: flex;
        flex-wrap: wrap-reverse;
        gap: 1rem;
        justify-content: flex-start;
        width: 300px;
        div {
            width: 102px;
            height: 102px;
        }
    }
    /* img {
        width: 100%;
        object-fit: cover;
        border-radius: 50%;
    } */
`
