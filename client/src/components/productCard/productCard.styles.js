import styled from 'styled-components'

export const Container = styled.div`
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`
export const DetailsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, auto);
    margin-top: 1rem;
`
export const DetailsContainerChild = styled.div`
    grid-column: ${(props) => props.gridColumn};
    grid-row: ${(props) => props.gridRow};
`
export const Label = styled.label`
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.fontColor || '#000000'};
    font-weight: ${(props) => props.fontWeight || 'Normal'};
`
