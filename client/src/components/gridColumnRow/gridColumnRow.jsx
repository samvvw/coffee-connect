import { StyleGridColumnRow } from './gridColumnRow.styles'

const GridColumnRow = ({ children, gridColumn, gridRow }) => {
    return (
        <StyleGridColumnRow gridColumn={gridColumn} gridRow={gridRow}>
            {children}
        </StyleGridColumnRow>
    )
}

export default GridColumnRow
