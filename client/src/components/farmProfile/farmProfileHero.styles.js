import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    #buttons {
        position: absolute;
        top: 20px;
        right: 20px;
        display: flex;
        padding: 1rem 0;

        & :nth-child(2) {
            margin-left: 1rem;
        }
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
            display: none;
        }
        #image {
            height: 360px;
        }
        #farmName {
            position: absolute;
            background-color: rgba(160, 160, 160, 0.5);
            height: 50px;
            width: 100%;
            bottom: 0;
            p {
                font-size: 2rem;
                text-align: center;
                text-transform: uppercase;
            }
        }
    }
`
