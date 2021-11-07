import { Container } from './originCheckboxes.styles'

const OriginCheckboxes = ({ onChange }) => {
    const handleChange = (e) => {
        onChange(e.currentTarget.value, e.currentTarget.checked)
    }

    return (
        <Container>
            <p className="title">Origin</p>
            <div className="checkboxes-container">
                <div className="row">
                    <label className="containerCheckbox">
                        <input
                            value="South America"
                            type="checkbox"
                            name="origin"
                            id="originSouthAmerica"
                            onChange={(e) => handleChange(e)}
                        />
                        <span className="checkmarkCheckbox"></span>
                    </label>
                    <label htmlFor="originSouthAmerica">South America</label>
                </div>
                <div className="row">
                    <label className="containerCheckbox">
                        <input
                            value="Central America"
                            type="checkbox"
                            name="origin"
                            id="originCentralAmerica"
                            onChange={(e) => handleChange(e)}
                        />
                        <span className="checkmarkCheckbox"></span>
                    </label>
                    <label htmlFor="originCentralAmerica">
                        Central America
                    </label>
                </div>
                <div className="row">
                    <label className="containerCheckbox">
                        <input
                            value="Africa"
                            type="checkbox"
                            name="origin"
                            id="originAfrica"
                            onChange={(e) => handleChange(e)}
                        />
                        <span className="checkmarkCheckbox"></span>
                    </label>
                    <label htmlFor="originAfrica">Africa</label>
                </div>
                <div className="row">
                    <label className="containerCheckbox">
                        <input
                            value="Europe"
                            type="checkbox"
                            name="origin"
                            id="originEurope"
                            onChange={(e) => handleChange(e)}
                        />
                        <span className="checkmarkCheckbox"></span>
                    </label>
                    <label htmlFor="originEurope">Europe</label>
                </div>
            </div>
        </Container>
    )
}

export default OriginCheckboxes
