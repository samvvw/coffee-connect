import styled from 'styled-components'
import { theme } from '../../theme/theme'
export const Container = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        text-align: center;
        font-size: 2rem;
    }

    img {
        width: 100%;
        object-fit: cover;
        height: 272px;
    }

    #divText {
        padding: 2rem 1rem;
        p {
            padding-top: 1rem;
        }
    }
    @media only screen and (min-width: ${theme.layout.desktop}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        h2 {
            font-size: 3rem;
        }
        img {
            /* min-height: 1160px; */
            height: 100%;
            object-fit: cover;
        }
        #divImg {
            grid-column: 1/2;
            grid-row: 1/3;
        }
        #divText {
            grid-column: 2/3;
            grid-row: 1/2;
            width: 70%;
            margin-left: 1rem;
            margin-top: 2rem;
            p {
                text-align: left;
            }
            /* margin: 0 auto; */
        }
        #divForm {
            grid-column: 2/3;
            grid-row: 2/3;
        }
    }
`
