import styled from 'styled-components'

export const Input = styled.input`
    border-radius: 24px;
    border: 1px solid black;
    width: ${(props) => props.width || '400px'};
    height: ${(props) => props.height || '48px'};
    padding-left: 1rem;
    font-size: 1rem;
    padding-right: 3.5rem;
`

export const Container = styled.div`
    position: relative;
    right: 110px;
    cursor: pointer;
`

export const FieldContainer = styled.div`
    display: flex;
    align-items: center;
`
