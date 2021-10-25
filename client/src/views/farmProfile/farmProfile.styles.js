import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    > :nth-child(1) {
        order: 2;
    }
    > :nth-child(2) {
        /* padding-top: 0; */
        order: 1;
    }
    > :nth-child(3) {
        order: 3;
    }
    > :nth-child(4) {
        order: 4;
    }

    @media only screen and (min-width: 401px) {
        width: 80%;
        margin: 0 auto;
        > :nth-child(1) {
            order: 1;
        }
        > :nth-child(2) {
            order: 2;
        }
        > :nth-child(3) {
            order: 3;
        }
        > :nth-child(4) {
            order: 4;
        }
    }
`
