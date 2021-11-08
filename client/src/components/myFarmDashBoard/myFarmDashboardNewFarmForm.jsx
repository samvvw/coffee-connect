import { theme } from '../../theme/theme'
import { Container } from './myFarmDashboardNewFarmForm.style'
import Button from '../button/button'
const MyFarmDashboardNewFarmForm = () => {
    return (
        <Container>
            <form>
                <div id="farmName">
                    <label htmlFor="farmName">
                        Farm Name<span>*</span>
                    </label>
                    <input
                        type="text"
                        name="farmName"
                        placeholder="e.g. Finca Loma Verde"
                        required
                    />
                </div>
                <div id="farmCountry">
                    <label htmlFor="country">
                        Country<span>*</span>
                    </label>
                    <select>
                        <option disabled value="default">
                            Select country
                        </option>
                    </select>
                </div>
                <div id="farmOrigin">
                    <label htmlFor="origin">
                        Origin<span>*</span>
                    </label>
                    <input type="text" name="origin" placeholder="" required />
                </div>
                <div id="farmAltitud">
                    <label htmlFor="altitud">
                        Altitud (masl)<span>*</span>
                    </label>
                    <input type="text" name="altitud" placeholder="" required />
                </div>
                <div id="farmSize">
                    <label htmlFor="farmSize">
                        Farm size (km)<span>*</span>
                    </label>
                    <input
                        type="text"
                        name="farmSize"
                        placeholder=""
                        required
                    />
                </div>
                <div id="farmAbout">
                    <label htmlFor="about">About the Farm</label>
                    <textarea rows="10" name="about" placeholder="" />
                </div>
                <div id="submit">
                    <Button
                        type="submit"
                        backgroundColor={theme.pallette.secondary.c800}
                        textColor="white"
                        title="Create"
                    />
                </div>
            </form>
        </Container>
    )
}

export default MyFarmDashboardNewFarmForm
