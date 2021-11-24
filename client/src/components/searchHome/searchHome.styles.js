import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const SearchHomeContainer = styled.div`
    
    //for coffee bean loader
    // position: relative;
    // .container {
    //     position: absolute;
    //     top: 30%;
    //     left: 25%;
    //     width: 50%;
    //     height: 50%;
    // }

    @media only screen and (min-width: ${theme.layout.desktop}) {
        margin-bottom: 12rem;
    }
    
`

export const Heading = styled.h2`
    text-align: center;
    font-size: 2rem;
    margin: 3rem auto 1rem auto;
    width: 311px

    @media only screen and (min-width: ${theme.layout.desktop}) {
        width: 811px
    }
`

export const SearchBarContainer = styled.div`
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
`


export const MapContainer = styled.div`
    //Relative is for searchBar
    position: relative;

    height: 400px;
    img {
        height: 400px;
        object-fit: cover;
    }

    @media only screen and (min-width: ${theme.layout.desktop}) {
        height: 600px;
        img {
            height: 600px;
        }
    }
`

//For Map
// export const MapWrapper = styled.div`    
//     z-index: -100;
//     height: 100%;

//     @media only screen and (min-width: ${theme.layout.desktop}) {
//         height: 100%;
//     }
// `
