import { theme } from '../../theme/theme'
import { Container } from './farmProfileEditFarmForm.style'
import Button from '../button/button'
import { useState, useEffect, useContext, useRef } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import MessageModal from '../messageModal/messageModal'
// import { UserContext } from '../../context/userContext/userContext'

const MyFarmDashboardNewFarmForm = (props) => {
    /*variables to control messages in modal*/
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    // const handleShow = () => setShow(true)
    /************************************* */

    const [countries, setCountries] = useState([])
    const [selected, setSelected] = useState({})
    const [selectedCountry, setSelectedCountry] = useState(props.location)
    const [selectedOrigin, setSelectedOrigin] = useState(props.origin)
    const [selectedLatLng, setSelectedLatLng] = useState(props.coordinate)
    const history = useHistory()

    const farmName = useRef(props.farmName)
    const altitude = useRef(props.altitude)
    const farmSize = useRef(props.farmSize)
    const descrption = useRef(props.description)

    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then((res) => {
                let countriesFullList = res.data
                let countriesList = []

                countriesFullList.map((country) => {
                    countriesList.push({
                        name: country.name.common,
                        region: country.region,
                        latlng: country.latlng,
                    })
                })

                function sortByKey(array, key) {
                    return array.sort(function (a, b) {
                        let x = a[key]
                        let y = b[key]
                        return x < y ? -1 : x > y ? 1 : 0
                    })
                }
                countriesList = sortByKey(countriesList, 'name')
                setCountries(countriesList)
            })
            .catch((error) => console.log(error))
    }, [])

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value)
    }

    useEffect(() => {
        setSelected(
            countries.filter((country) => country.name === selectedCountry)
        )
    }, [selectedCountry])

    useEffect(() => {
        if (selected.length > 0) {
            setSelectedOrigin(selected[0].region)
            setSelectedLatLng(selected[0].latlng)
        }
    }, [selected])

    const handleSubmit = (event) => {
        event.preventDefault()

        const body = {
            name: farmName.current.value,
            location: selectedCountry,
            origin: selectedOrigin,
            altitude: altitude.current.value,
            farmSize: farmSize.current.value,
            description: descrption.current.value,
            coordinate: selectedLatLng,
        }

        axios
            .put(`/api/farm/${props.farmID}`, {
                ...body,
                token: localStorage.getItem('token'),
            })
            .then((res) => {
                props.setShow(false)
                props.setUpdated((prev) => prev + 1)
                history.push('/farm-profile')
            })
            .catch((error) => {
                console.log('Error updating farm', error)
                setShow(true)
            })
    }

    return (
        <Container>
            <form
                id="newFarm"
                method="POST"
                onSubmit={(event) => handleSubmit(event)}
            >
                <div id="farmName">
                    <label htmlFor="farmName">
                        Farm Name<span>*</span>
                    </label>
                    <input
                        ref={farmName}
                        defaultValue={props.farmName}
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
                    <select
                        value={selectedCountry}
                        onChange={(e) => handleCountryChange(e)}
                    >
                        <option disabled value="default">
                            Select country
                        </option>
                        {countries &&
                            countries.map((country, index) => (
                                <option key={index} value={country.name}>
                                    {country.name}
                                </option>
                            ))}
                    </select>
                </div>
                <div id="farmOrigin">
                    <label htmlFor="origin">
                        Origin<span>*</span>
                    </label>
                    <input
                        readOnly
                        type="text"
                        name="origin"
                        placeholder=""
                        required
                        value={selectedOrigin}
                    />
                </div>
                <div id="farmAltitude">
                    <label htmlFor="altitude">
                        Altitude (masl)<span>*</span>
                    </label>
                    <input
                        ref={altitude}
                        defaultValue={props.altitude}
                        type="text"
                        name="altitude"
                        placeholder=""
                        required
                    />
                </div>
                <div id="farmSize">
                    <label htmlFor="farmSize">
                        Farm size (km)<span>*</span>
                    </label>
                    <input
                        ref={farmSize}
                        type="text"
                        name="farmSize"
                        placeholder=""
                        required
                        defaultValue={props.farmSize}
                    />
                </div>
                <div id="farmAbout">
                    <label htmlFor="about">About the Farm</label>
                    <textarea
                        ref={descrption}
                        defaultValue={props.description}
                        rows="10"
                        name="about"
                        placeholder=""
                    />
                </div>
                <div id="submit">
                    <Button
                        type="submit"
                        backgroundColor={theme.pallette.secondary.c800}
                        textColor="white"
                        title="Save changes"
                    />
                </div>
            </form>

            <MessageModal
                handleClose={handleClose}
                show={show}
                title="Message from Qafa"
                message="There are some errors in your data. Farm could not be updated."
            />
        </Container>
    )
}

export default MyFarmDashboardNewFarmForm
