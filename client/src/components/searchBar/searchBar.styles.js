import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const Input = styled.input`
    border-radius: 24px;
    border: 1px solid ${theme.pallette.primary[500]};
    width: ${(props) => props.width || '518px'};
    height: ${(props) => props.height || '48px'};
    padding-left: 1rem;
    font-size: 1rem;
    padding-right: 3.5rem;
`

export const IconContainer = styled.div`
    background-color: #000000;
    height: 40px;
    width: 43px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    right: 47px;
    cursor: pointer;
    border: none;
`

export const FieldContainer = styled.div`
    display: flex;
    align-items: center;
`
