import { StyledSelectedButton } from './selectedButton.styles'
import { useState } from 'react'

const SelectedButton = ({
    title,
    onClick,
    type = 'button',
    backgroundColor,
    backgroundColorClicked,
    textColor,
    textColorClicked,
}) => {
    const [setBgc, setBgcClicked] = useState(backgroundColor)
    const [setColor, setColorClicked] = useState(textColor)

    onClick = () => {
        if (setBgc === backgroundColor) setBgcClicked(backgroundColorClicked)
        else setBgcClicked(backgroundColor)

        if (setColor === textColor) setColorClicked(textColorClicked)
        else setColorClicked(textColor)
    }

    return (
        <StyledSelectedButton
            type={type}
            onClick={onClick}
            backgroundColor={setBgc}
            textColor={setColor}
        >
            {title}
        </StyledSelectedButton>
    )
}

export default SelectedButton
