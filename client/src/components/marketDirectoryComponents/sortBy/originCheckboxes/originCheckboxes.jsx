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
                            value="Americas"
                            type="checkbox"
                            name="origin"
                            id="originAmericas"
                            onChange={(e) => handleChange(e)}
                        />
                        <span className="checkmarkCheckbox"></span>
                    </label>
                    <label htmlFor="originAmericas">Americas</label>
                </div>
                <div className="row">
                    <label className="containerCheckbox">
                        <input
                            value="Asia"
                            type="checkbox"
                            name="origin"
                            id="originAsia"
                            onChange={(e) => handleChange(e)}
                        />
                        <span className="checkmarkCheckbox"></span>
                    </label>
                    <label htmlFor="originAsia">Asia</label>
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
                <div className="row">
                    <label className="containerCheckbox">
                        <input
                            value="Oceania"
                            type="checkbox"
                            name="origin"
                            id="originOceania"
                            onChange={(e) => handleChange(e)}
                        />
                        <span className="checkmarkCheckbox"></span>
                    </label>
                    <label htmlFor="originOceania">Oceania</label>
                </div>
            </div>
        </Container>
    )
}

export default OriginCheckboxes
