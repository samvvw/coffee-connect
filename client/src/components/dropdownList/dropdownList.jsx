import { SelectContainer } from './dropdownList.styles'

const DropdownList = ({
    width,
    height,
    selectName,
    selectId,
    objArrayValues,
    onChange,
}) => {
    // objArrayValues = [
    //     {
    //         id: '1',
    //         option: 'Qty 1',
    //     },
    //     {
    //         id: '2',
    //         option: 'Qty 2',
    //     },
    //     {
    //         id: '3',
    //         option: 'Qty 3',
    //     },
    // ]

    let optionTemplate = objArrayValues.map((option) => (
        <option value={option.id}>{option.option}</option>
    ))

    return (
        <SelectContainer
            onChange={onChange}
            name={selectName}
            id={selectId}
            width={width}
            height={height}
        >
            {optionTemplate}
        </SelectContainer>
    )
}

export default DropdownList
