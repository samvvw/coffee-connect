import styled from 'styled-components'
import bgImg from '../../assets/images/home-bg.png'
import { theme } from '../../theme/theme'


export const Container = styled.div`
    width: 100%;
    overflow-X: hidden;
`


export const SubContainer = styled.div`
    width: 311px;
    margin: 0 auto;

    @media only screen and (min-width: ${theme.layout.desktop}) { 
        width: 70%;
        background: url('${bgImg}');
        background-repeat: no-repeat;
        background-position: center 25px;

        margin-bottom: 8rem;
    }

`