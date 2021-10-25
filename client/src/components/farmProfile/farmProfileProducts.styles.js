import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;

    h5 {
        padding-bottom: 1rem;
        font-size: 1.5rem;
    }

    #divProducts {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
        row-gap: 2rem;
        padding-bottom: 2rem;
        :nth-child(1) {
            grid-column: 1/2;
            grid-row: 1/2;
        }
        :nth-child(2) {
            grid-column: 1/2;
            grid-row: 2/3;
        }
        :nth-child(3) {
            grid-column: 1/2;
            grid-row: 3/4;
        }
    }
    #divButton {
        button {
            width: 100%;
        }
    }
    @media only screen and (min-width: 401px) {
        #divProducts {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 1fr;
            row-gap: 0;
            column-gap: 2rem;
        }
        #divButton {
            display: flex;
            justify-content: center;
            button {
                width: 33%;
            }
        }
    }
`
