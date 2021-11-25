import styled from 'styled-components'
import { theme } from '../../theme/theme'
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
      
        width: 300px;
      
        padding-bottom: 3rem;
      
        width: 100%;

        div {
        position: relative;
        width: 100%;
     
        margin: 0 auto;
        background-color: white;
        display: flex;
        justify-content: center;

        img {
            width: 102px;
            height: 102px;

            border-radius: 4px;

            box-sizing: border-box;
            object-fit: cover;
        }
    }
    }
    

    @media only screen and (min-width: ${theme.layout.desktop}) {
        #certificatesContainer {
            flex-wrap: wrap;
            div{
                width: auto;
                margin:0;
            }
    }
`
