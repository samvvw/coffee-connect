import styled from 'styled-components'
import { theme } from '../../theme/theme'


export const Container = styled.div`
    position: relative;
    width: 311px;
    margin: 0 auto;

    @media only screen and (min-width: ${theme.layout.desktop}){
        width: 100%;
    }
`

export const IconContainer = styled.div`
    position: absolute; 
    top: 7px;
    right: 5px
`

export const Input = styled.input`
    display: block;
    width: 100%;
    height: 3rem;
    border-radius: 50px;
    border: none;
    text-indent: 1rem;

`