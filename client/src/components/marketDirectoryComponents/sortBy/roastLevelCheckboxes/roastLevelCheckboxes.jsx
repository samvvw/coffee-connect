import { Container } from './roastLevelCheckboxes.styles'

const RoastLevelCheckboxes = ({ onChange }) => {
    const handleChange = (e) => {
        onChange(e.currentTarget.value, e.currentTarget.checked)
    }

    return (
        <Container>
            <p className="title">Roast Level</p>
            <div className="checkboxes-container">
                <div className="row">
                    <label className="containerCheckbox">
                        <input
                            value="Light"
                            type="checkbox"
                            name="roastLevel"
                            id="roastLight"
                            onChange={(e) => handleChange(e)}
                        />
                        <span className="checkmarkCheckbox"></span>
                    </label>
                    <label htmlFor="roastLight">Light</label>
                </div>
                <div className="row">
                    <label className="containerCheckbox">
                        <input
                            value="Medium"
                            type="checkbox"
                            name="roastLevel"
                            id="roastMedium"
                            onChange={(e) => handleChange(e)}
                        />
                        <span className="checkmarkCheckbox"></span>
                    </label>
                    <label htmlFor="roastMedium">Medium</label>
                </div>
                <div className="row">
                    <label className="containerCheckbox">
                        <input
                            value="Medium - Dark"
                            type="checkbox"
                            name="roastLevel"
                            id="roastMediumDark"
                            onChange={(e) => handleChange(e)}
                        />
                        <span className="checkmarkCheckbox"></span>
                    </label>
                    <label htmlFor="roastMediumDark">Medium - Dark</label>
                </div>
                <div className="row">
                    <label className="containerCheckbox">
                        <input
                            value="Dark"
                            type="checkbox"
                            name="roastLevel"
                            id="roastDark"
                            onChange={(e) => handleChange(e)}
                        />
                        <span className="checkmarkCheckbox"></span>
                    </label>
                    <label htmlFor="roastDark">Dark</label>
                </div>
            </div>
        </Container>
    )
}

export default RoastLevelCheckboxes
