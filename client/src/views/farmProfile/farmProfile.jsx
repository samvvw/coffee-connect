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
// import FarmProfileProducts from '../../components/farmProfile/farmProfileProducts'
import FarmProfileHeader from '../../components/farmProfile/farmProfileHeader'
import FarmProfileCertificates from '../../components/farmProfile/farmProfileCertificates'
import FarmProfileGallery from '../../components/farmProfile/farmProfileGallery'
import { LoggedNavBar } from '../../components'
import { UserContext } from '../../context/userContext/userContext'
import FarmProfileEditFarmForm from '../../components/farmProfile/farmProfileEditFarmForm'
import placeHolder from '../../assets/images/placeholder.png'

const FarmProfile = () => {
    const { user } = useContext(UserContext)
    // let farmID = user.farms
    // console.log('farmID', user)
    // let farmID = '618de93d89b847892b6b0421'
    const { isTokenExpired } = useContext(UserContext)
    const history = useHistory()
    const [farmData, setFarmData] = useState()
    /*variables to control messages in modal*/

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    let errorMessage = ''

    useEffect(() => {
        if (isTokenExpired()) {
            history.replace('/sign-in')
        }
    })

    const [description, setDescription] = useState()
    const [descriptionShort, setDescriptionShort] = useState()
    const [descriptionLong, setDescriptionLong] = useState()

    /*variables to control offcanvas - new product*/
    const [showEdit, setShowEdit] = useState(false)

    const handleCloseEdit = () => setShowEdit(false)
    const handleShowEdit = () => setShowEdit(true)

    useEffect(() => {
        if (Object.keys(user).length > 0) {
            axios
                .get(`/api/farm/${user.farms[0]}`)
                // .get(`/api/farm/${farmID}`)
                .then((res) => {
                    res.data.data.description === ''
                        ? setDescription(
                              'A great description is comming soon for this farm.'
                          )
                        : setDescription(res.data.data.description)
                    setFarmData(res)
                    console.log('datosssss', res)
                })
                .catch((error) => {
                    // setShow(true)
                    console.log('FarmProfile:', error)
                })
        }
    }, [user])

    useEffect(() => {
        if (description) {
            let newDesc = description

            setDescriptionShort(newDesc.substring(0, newDesc.length / 2))
            setDescriptionLong(
                newDesc.substring(newDesc.length / 2, newDesc.length)
            )
        }
    }, [description])

    const arrObjProductDetails = [
        {
            productName: 'Whirlwind Coffe Co. Ethiopia',
            productPrice: '18.99 CAD',
            productUnit: '100gr',
            productDescription: 'Yirgacheffe',
            productUrlImage: { placeHolder },
        },
        {
            productName: 'Fire Dept. Coffe Original',
            productPrice: '18.99 CAD',
            productUnit: '100g',
            productDescription: 'Medium Roast',
            productUrlImage: { placeHolder },
        },
        {
            productName: 'Howler Coffee Co. Bucksaw',
            productPrice: '18.99 CAD',
            productUnit: '100g',
            productDescription: 'Blend',
            productUrlImage: { placeHolder },
        },
        {
            productName: 'Onyx Coffee Lab Colombia',
            productPrice: '18.99',
            productUnit: '100g',
            productDescription: 'Aponte Village',
            productUrlImage: { placeHolder },
        },
        {
            productName: 'Whirlwind Coffee Co. Ethiopia',
            productPrice: '17.99',
            productUnit: '100g',
            productDescription: 'Colombia',
            productUrlImage: { placeHolder },
        },
        {
            productName: 'Tecito',
            productPrice: '18.99',
            productUnit: '100g',
            productDescription: 'Ingland',
            productUrlImage: { placeHolder },
        },
        {
            productName: 'Cocholatito',
            productPrice: '16.99',
            productUnit: '100g',
            productLocation: 'Mexico',
            productUrlImage: { placeHolder },
        },
    ]

    // const arrImgCertificates = farmData.data.certification
    /************************************************* */
    //Verify when to show map

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
                            imgUrl={placeHolder}
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
                        {/* <FarmProfileProducts
                            imageWidth="100%"
                            arrObjProductDetails={arrObjProductDetails}
                        /> */}
                        {console.log(farmData.data.data.certification[0])}
                    </div>

                    <div id="gallery">
                        <FarmProfileGallery
                            farmID={user.farms[0]}
                            arrPicFarmGallery={[]}
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
                        <FarmProfileEditFarmForm setShow={setShowEdit} />
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
