import styled from 'styled-components'

export const StyledGrid = styled.div`
    display: grid;

    grid-template-columns: ${(props) => props.gridTemplateColumns};
    grid-template-rows: ${(props) => props.gridTemplateRows};
`
