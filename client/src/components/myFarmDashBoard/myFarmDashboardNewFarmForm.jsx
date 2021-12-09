import { theme } from '../../theme/theme'
import { Container } from './myFarmDashboardNewFarmForm.style'
import Button from '../button/button'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import MessageModal from '../messageModal/messageModal'
import { UserContext } from '../../context/userContext/userContext'

const MyFarmDashboardNewFarmForm = () => {
    /*variables to control messages in modal*/
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    // const handleShow = () => setShow(true)
    /************************************* */

    const [countries, setCountries] = useState([])
    const [selected, setSelected] = useState({})
    const [selectedCountry, setSelectedCountry] = useState('')
    const [selectedOrigin, setSelectedOrigin] = useState('')
    const [selectedLatLng, setSelectedLatLng] = useState()
    const history = useHistory()

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
                    return country
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

    const [body, setBody] = useState([
        {
            name: '',
            location: '',
            origin: '',
            altitude: 0,
            farmSize: 0,
            description: '',
            coordinate: [],
        },
    ])

    useEffect(() => {
        setSelected(
            countries.filter((country) => country.name === selectedCountry)
        )
    }, [selectedCountry])

    useEffect(() => {
        // console.log('selected', selected)
        if (selected.length > 0) {
            setSelectedOrigin(selected[0].region)
            setSelectedLatLng(selected[0].latlng)
        }
    }, [selected])

    useEffect(() => {
        setBody((prevBody) => ({
            ...prevBody,
            origin: selectedOrigin,
        }))
        setBody((prevBody) => ({
            ...prevBody,
            coordinate: selectedLatLng,
        }))
        setBody((prevBody) => ({
            ...prevBody,
            location: selectedCountry,
        }))
    }, [selectedOrigin])

    const { updateUser } = useContext(UserContext)

    // const [user, setUser] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()

        axios
            .post(`/api/farm/`, {
                ...body,
                token: localStorage.getItem('token'),
            })
            .then((res) => {
                setShow(false)

                updateUser()
                history.push('/farm-profile')
            })
            .catch((error) => {
                console.log('Error creating farm', error)
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
                        type="text"
                        name="farmName"
                        placeholder="e.g. Finca Loma Verde"
                        required
                        onChange={(event) => {
                            return setBody((prevBody) => ({
                                ...prevBody,
                                name: event.target.value,
                            }))
                        }}
                    />
                </div>
                <div id="farmCountry">
                    <label htmlFor="country">
                        Country<span>*</span>
                    </label>
                    <select
                        defaultValue="default"
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
                        type="text"
                        name="altitude"
                        placeholder=""
                        required
                        onChange={(event) => {
                            return setBody((prevBody) => ({
                                ...prevBody,
                                altitude: event.target.value,
                            }))
                        }}
                    />
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
                        onChange={(event) => {
                            return setBody((prevBody) => ({
                                ...prevBody,
                                farmSize: event.target.value,
                            }))
                        }}
                    />
                </div>
                <div id="farmAbout">
                    <label htmlFor="about">About the Farm</label>
                    <textarea
                        rows="10"
                        name="about"
                        placeholder=""
                        onChange={(event) => {
                            return setBody((prevBody) => ({
                                ...prevBody,
                                description: event.target.value,
                            }))
                        }}
                    />
                </div>
                <div id="submit">
                    <Button
                        type="submit"
                        backgroundColor={theme.pallette.secondary.c800}
                        borderColor={theme.pallette.secondary.c800}
                        textColor="white"
                        title="Create"
                    />
                </div>
            </form>

            <MessageModal
                handleClose={handleClose}
                show={show}
                title="Message from Qafa"
                message="There are some errors in your data. Farm could not be created."
            />
        </Container>
    )
}

export default MyFarmDashboardNewFarmForm
