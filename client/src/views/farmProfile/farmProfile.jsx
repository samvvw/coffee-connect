import { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Map from '../../components/map/map'
import axios from 'axios'
import MessageModal from '../../components/messageModal/messageModal'
import { Container } from './farmProfile.styles'
import { theme } from '../../theme/theme'

import FarmProfileHero from '../../components/farmProfile/farmProfileHero'
import FarmProfileDescription from '../../components/farmProfile/farmProfileDescription'
import FarmProfileProducts from '../../components/farmProfile/farmProfileProducts'
import FarmProfileHeader from '../../components/farmProfile/farmProfileHeader'
import FarmProfileCertificates from '../../components/farmProfile/farmProfileCertificates'
import FarmProfileGallery from '../../components/farmProfile/farmProfileGallery'
import { LoggedNavBar } from '../../components'
import { UserContext } from '../../context/userContext/userContext'

import placeHolder from '../../assets/images/placeholder.png'

const FarmProfile = () => {
    const { user } = useContext(UserContext)
    // let farmID = user.farms
    console.log('farmID', user)
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

    useEffect(() => {
        if (Object.keys(user).length > 0) {
            axios
                .get(`/api/farm/${user.farms[0]}`)
                // .get(`/api/farm/${farmID}`)
                .then((res) => {
                    setFarmData(res)
                    console.log('datosssss', res)
                })
                .catch((error) => {
                    // setShow(true)
                    console.log('un error mas:', error)
                })
        }
    }, [user])

    /*coordinates for the map*/
    // const data = [farmData.data.data.coordinate]
    const arrPicFarmGallery = [] //farmData.data.gallery

    // const objFarmProfile = {
    //     farmSize: farmData.data.farmSize,
    //     farmDescriptionShort: farmData.data.description,
    //     farmDescriptionLong: farmData.data.description,
    // }

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

    // const objFarmProfileHeader = {
    //     farmLogoUrl: farmData.data.logo,
    //     farmName: farmData.data.name,
    //     origin: farmData.data.origin,
    //     location: farmData.data.location,
    //     altitude: farmData.data.altitude,
    // }
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

    // Verify if gallery has images

    let hasImages = false
    if (arrPicFarmGallery.length > 0) hasImages = true

    return (
        <>
            <LoggedNavBar />
            {farmData && (
                <Container>
                    <div id="mainContainer">
                        <FarmProfileHeader
                            farmLogoUrl={''}
                            farmName={farmData.data.data.name}
                            origin={farmData.data.data.origin}
                            location={farmData.data.data.location}
                            altitude={`${farmData.data.data.altitude} masl`}
                        />
                        {/*
                    <FarmProfileHero farmName={farmData.data.data.name} />

                    <FarmProfileDescription
                        objFarmProfile={farmData.data.data.description}
                        /> */}
                        {/* <h1>{farmData.data.data.name}</h1> */}
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

                        {/* <FarmProfileCertificates
                        arrImgCertificates={farmData.arrImgCertificates}
                    /> */}

                        <FarmProfileProducts
                            imageWidth="100%"
                            arrObjProductDetails={arrObjProductDetails}
                        />
                    </div>
                    {hasImages && (
                        <div id="gallery">
                            <FarmProfileGallery arrPicFarmGallery={[]} />
                        </div>
                    )}
                </Container>
            )}
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
