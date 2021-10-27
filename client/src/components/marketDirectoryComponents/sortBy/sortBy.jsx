import RadioButton from '../radioButton/radioButton'
import { Container, Small } from './sortBy.styles'

const SortBy = ({ filters }) => {
    return (
        <Container>
            <Small>Sort by: </Small>
            {filters.map((filter) => (
                <RadioButton
                    key={filter.value}
                    name="filter"
                    id={filter.id}
                    value={filter.value}
                    label={filter.label}
                />
            ))}
        </Container>
    )
}

export default SortBy
