import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;
    h2 {
        padding-bottom: 4rem;
        padding-top: 4rem;
    }
    #galleryWrapper {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-flow: dense;
        .item:nth-child(2n) {
            grid-column: span 2;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
        }

        padding-bottom: 5rem;
    }

    @media only screen and (min-width: 401px) {
        width: 80%;
        margin: 0 auto;
        h2 {
            padding-top: 3rem;
            padding-bottom: 4rem;
            padding-top: 4rem;
        }
        #galleryWrapper {
            grid-template-columns: repeat(auto-fill, minmax(200px, 2fr));
            grid-template-rows: auto;
            grid-auto-flow: dense;

            .item:nth-child(2n) {
                grid-column: span 2;
                grid-row: span 2;
            }

            /* .item:nth-child(3n) {
                grid-row: span 3;
                grid-column: span 3;
            } */
        }
    }
`
