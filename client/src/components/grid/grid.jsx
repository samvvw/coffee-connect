import { StyledGrid } from './grid.styles'

const Grid = ({ children, gridTemplateColumns, gridTemplateRows }) => {
    return (
        <StyledGrid
            gridTemplateRows={gridTemplateRows}
            gridTemplateColumns={gridTemplateColumns}
        >
            {children}
        </StyledGrid>
    )
}

export default Grid
