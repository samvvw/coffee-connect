import styled from 'styled-components'

export const Input = styled.input`
    border-radius: 24px;
    border: 1px solid black;
    width: ${(props) => props.width || '518px'};
    height: ${(props) => props.height || '48px'};
    padding-left: 1rem;
    font-size: 1rem;
    padding-right: 3.5rem;
`

export const IconContainer = styled.div`
    background-color: #000000;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    right: 45px;
    cursor: pointer;
`

export const FieldContainer = styled.div`
    display: flex;
    align-items: center;
`
