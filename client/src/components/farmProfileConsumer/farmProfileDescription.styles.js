import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem 0 2rem;

    h5 {
        font-weight: bold;
    }
    p {
        margin-top: 1rem;
    }
    a {
        color: black;
    }
    button {
        background-color: transparent;
        max-width: 100px;
        border: none;
        cursor: pointer;
        text-decoration: underline;
    }

    #certificates {
        display: flex;
        flex-direction: column;
        margin-bottom: 4rem;

        div {
            display: flex;
            justify-content: space-between;
            margin-top: 1rem;
            img {
                width: 48%;
            }
        }
    }
    @media only screen and (min-width: 401px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 2rem;
        a {
            display: none;
        }
        #description {
            grid-column: 1/3;
            grid-row: 1/2;
            padding-right: 2rem;
        }
        #certificates {
            grid-column: 3/4;
            grid-row: 1/2;
        }
    }
`
