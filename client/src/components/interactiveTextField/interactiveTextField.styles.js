import styled from 'styled-components'
import { theme } from '../../theme/theme'


export const Container = styled.form`
    position: relative;
    width: 311px;
    margin: 0 auto;

    @media only screen and (min-width: ${theme.layout.desktop}){
        width: 100%;
    }
`

export const Input = styled.input`
    display: block;
    width: 100%;
    height: 3rem;
    border-radius: 50px;
    border: none;
    text-indent: 1rem;
`

export const Button = styled.button`
    background-color: ${theme.pallette.secondary.c800};
    color: #ffffff;
    border: none;
    border-radius: 50px;
    padding: 5px 20px;
    position: absolute; 
    top: 7px;
    right: 5px
`

export const Message = styled.p`
    color: #ffffff;
    font-size: 1rem;
    margin-top: 0.5rem; 
`