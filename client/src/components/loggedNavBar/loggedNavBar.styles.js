import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    border: 1px solid #b0bec5;
    color: black;
    margin-bottom: 1rem;

    & > ul {
        list-style-type: none;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 1rem;
        padding: 1rem 0;
        width: 50%;
        margin: 0 auto;

        & li > a {
            text-decoration: none;
            color: #000000;

            &.selected {
                color: #ff9933;
                font-weight: bold;
            }
        }
    }
`
