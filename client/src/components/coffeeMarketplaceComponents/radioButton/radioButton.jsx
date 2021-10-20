import { Input, Label } from './radioButton.styles'

const RadioButton = ({ name, id, value, label, onClick }) => {
    return (
        <>
            <Input
                type="radio"
                id={id}
                name={name}
                value={value}
                onClick={onClick}
            />
            <Label for={id}>{label}</Label>
        </>
    )
}

export default RadioButton
