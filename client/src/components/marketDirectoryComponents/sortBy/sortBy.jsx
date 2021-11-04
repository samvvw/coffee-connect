import RadioButton from '../radioButton/radioButton'
import { Container } from './sortBy.styles'

const SortBy = ({ filters }) => {
    return (
        <Container>
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
