import styled from 'styled-components'

export const StyleGridColumnRow = styled.div`
    grid-column: ${(props) => props.gridColumn};
    grid-row: ${(props) => props.gridRow};
    padding: 0.3rem;
`
