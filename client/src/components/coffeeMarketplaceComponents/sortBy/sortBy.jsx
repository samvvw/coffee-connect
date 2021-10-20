import RadioButton from '../radioButton/radioButton'
import { Container, Small } from './sortBy.styles'

const SortBy = (props) => {
    const filters = [
        {
            id: 'roast',
            value: 1,
            label: 'Roast Level',
        },
        {
            id: 'origin',
            value: 2,
            label: 'Origin',
        },
        {
            id: 'price',
            value: 3,
            label: 'Price',
        },
    ]

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
