import { useState } from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { checkedStyled } from './radioButton.styles'

const RadioButton = ({ id, value, label, onChange }) => {
    const [checked, setChecked] = useState(false)

    const handleChange = (e) => {
        setChecked(e.currentTarget.checked)
        onChange(e.currentTarget.value, e.currentTarget.checked)
    }

    return (
        <>
            <ToggleButton
                id={id}
                type="checkbox"
                variant={checked ? 'outline-warning' : 'outline-dark'}
                checked={checked}
                value={value}
                onChange={(e) => handleChange(e)}
                style={checked ? checkedStyled : { borderRadius: '15px' }}
            >
                {label}
            </ToggleButton>
        </>
    )
}

export default RadioButton
