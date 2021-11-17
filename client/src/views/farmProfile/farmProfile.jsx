import { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Map from '../../components/map/map'
import axios from 'axios'
import MessageModal from '../../components/messageModal/messageModal'
import { Container } from './farmProfile.styles'
import { theme } from '../../theme/theme'
import Offcanvas from 'react-bootstrap/Offcanvas'
import FarmProfileHero from '../../components/farmProfile/farmProfileHero'
import FarmProfileDescription from '../../components/farmProfile/farmProfileDescription'

import FarmProfileHeader from '../../components/farmProfile/farmProfileHeader'
import FarmProfileCertificates from '../../components/farmProfile/farmProfileCertificates'
import FarmProfileGallery from '../../components/farmProfile/farmProfileGallery'
import { LoggedNavBar } from '../../components'
import { UserContext } from '../../context/userContext/userContext'
import FarmProfileEditFarmForm from '../../components/farmProfile/farmProfileEditFarmForm'
// import placeHolder from '../../assets/images/placeholder.png'

const FarmProfile = () => {
    const { user } = useContext(UserContext)
    const { isTokenExpired } = useContext(UserContext)
    const history = useHistory()
    const [farmData, setFarmData] = useState()

    /*variables to control messages in modal*/
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    let errorMessage = ''

    //control when to update data
    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        if (isTokenExpired()) {
            history.replace('/sign-in')
        }
    })

    const [description, setDescription] = useState()
    const [descriptionShort, setDescriptionShort] = useState()
    const [descriptionLong, setDescriptionLong] = useState()

    /*variables to control offcanvas - new product*/
    const [showEdit, setShowEdit] = useState(0)

    const handleCloseEdit = () => setShowEdit(false)
    const handleShowEdit = () => setShowEdit(true)

    const [arrPicFarmGallery, setArrPicFarmGallery] = useState([
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
    ])

    useEffect(() => {
        if (Object.keys(user).length > 0) {
            axios
                .get(`/api/farm/${user.farms[0]}`)

                .then((res) => {
                    res.data.data.description === ''
                        ? setDescription(
                              'A great description is comming soon for this farm.'
                          )
                        : setDescription(res.data.data.description)
                    setFarmData(res)

                    setArrPicFarmGallery(res.data.data.gallery)
                    console.log('res data', res)
                })
                .catch((error) => {
                    console.log('FarmProfile:', error)
                })
        }
    }, [user, updated])

    useEffect(() => {
        if (description) {
            let newDesc = description

            setDescriptionShort(newDesc.substring(0, newDesc.length / 2))
            setDescriptionLong(
                newDesc.substring(newDesc.length / 2, newDesc.length)
            )
        }
    }, [description])

    const [matches, setMatches] = useState(
        window.matchMedia(`(min-width: ${theme.layout.desktop})`).matches
    )

    useEffect(() => {
        const handler = (e) => setMatches(e.matches)
        window
            .matchMedia(`(min-width: ${theme.layout.desktop})`)
            .addListener(handler)
    }, [])
    /**************************************************** */

    // Style for canvas
    let style, styleHeader, styleTitle, styleBody
    styleBody = { padding: 0 }
    if (matches) {
        //desktop
        style = { width: '65%' }
        styleHeader = {
            backgroundColor: 'white',
            color: theme.pallette.primary[500],
            display: 'grid',
            gridTemplateColumns: '9fr 1fr',
            border: '1px solid gray',
        }
        styleTitle = {
            textAlign: 'left',
        }
    } else {
        //mobile
        style = { width: '100%' }
        styleHeader = {
            backgroundColor: theme.pallette.primary[500],
            color: 'white',
            display: 'grid',
            gridTemplateColumns: '9fr 1fr',
        }
        styleTitle = {
            textAlign: 'center',
        }
    }
    // *************************************

    return (
        <>
            <LoggedNavBar />
            {farmData && (
                <Container>
                    <div id="mainContainer">
                        <FarmProfileHeader
                            farmID={user.farms[0]}
                            farmLogoUrl={farmData.data.data.logo}
                            farmName={farmData.data.data.name}
                            origin={farmData.data.data.origin}
                            location={farmData.data.data.location}
                            altitude={`${farmData.data.data.altitude} masl`}
                            handleShowEdit={handleShowEdit}
                        />
                        <FarmProfileHero
                            farmName={farmData.data.data.name}
                            urlImage={farmData.data.data.farmPicture}
                        />
                        <FarmProfileDescription
                            objFarmProfile={{
                                farmSize: farmData.data.data.farmSize,
                                farmDescriptionShort: descriptionShort,
                                farmDescriptionLong: descriptionLong,
                            }}
                        />

                        {/* Show map only in desktop */}
                        {matches && (
                            <div id="map">
                                {/* Map */}
                                <div>
                                    <p>Our location</p>
                                </div>
                                <Map
                                    data={
                                        farmData
                                            ? [farmData.data.data.coordinate]
                                            : [[10, 100]]
                                    }
                                    style={{ width: '100%', height: '300px' }}
                                    zoom={4}
                                />
                            </div>
                        )}
                        <FarmProfileCertificates
                            arrImgCertificates={
                                farmData.data.data.certification
                            }
                        />
                    </div>

                    <div id="gallery">
                        <FarmProfileGallery
                            arrPicFarmGallery={arrPicFarmGallery}
                        />
                    </div>
                </Container>
            )}
            <>
                <Offcanvas
                    onHide={handleCloseEdit}
                    placement="end"
                    show={showEdit}
                    style={style}
                >
                    <Offcanvas.Header style={styleHeader} closeButton>
                        <Offcanvas.Title style={styleTitle}>
                            Edit a Farm Profile
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body style={styleBody}>
                        {farmData && (
                            <FarmProfileEditFarmForm
                                setShow={setShowEdit}
                                farmID={user.farms[0]}
                                farmName={farmData.data.data.name}
                                origin={farmData.data.data.origin}
                                location={farmData.data.data.location}
                                altitude={farmData.data.data.altitude}
                                description={description}
                                farmSize={farmData.data.data.farmSize}
                                coordinate={farmData.data.data.coordinate}
                                setUpdated={setUpdated}
                            />
                        )}
                    </Offcanvas.Body>
                </Offcanvas>
            </>
            <MessageModal
                handleClose={handleClose}
                show={show}
                title="Message from Qafa"
                message={errorMessage}
            />
        </>
    )
}

export default FarmProfile
