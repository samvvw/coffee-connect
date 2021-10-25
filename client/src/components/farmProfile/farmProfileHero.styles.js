import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    #buttons {
        display: none;
    }
    #image {
        img {
            width: 100%;
            height: 360px;
            object-fit: cover;
        }
    }

    @media only screen and (min-width: 401px) {
        #buttons {
            display: flex;
            padding: 1rem 0;

            & :nth-child(2) {
                margin-left: 1rem;
            }
        }
        #image {
            height: 360px;
        }
    }
`
