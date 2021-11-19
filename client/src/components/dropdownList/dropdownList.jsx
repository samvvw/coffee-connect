import { SelectContainer } from './dropdownList.styles'

const DropdownList = ({ width, height, objArraySizes, setPrice }) => {
    // console.log('obj', objArraySizes)

    const handleChange = (e) => {
        if (e.target.value) {
            const j = objArraySizes.findIndex(
                (item) => item._id === e.target.value
            )
            setPrice(objArraySizes[j].price)
        } else {
            setPrice('')
        }
    }

    let optionTemplate = objArraySizes.map(
        (option) =>
            option.size > 0 && (
                <option key={option._id} value={option._id}>
                    {option.size}
                </option>
            )
    )

    return (
        <SelectContainer
            name="sizes"
            width={width}
            height={height}
            onChange={(e) => handleChange(e)}
            defaultValue=""
        >
            <option value=""> </option>
            {optionTemplate}
        </SelectContainer>
    )
}

export default DropdownList
