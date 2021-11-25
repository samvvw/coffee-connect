import { useEffect, useState } from 'react'

import Map from '../../components/map/map'
import axios from 'axios'
import MessageModal from '../../components/messageModal/messageModal'
import { Container } from './farmProfileConsumer.styles'

import FarmProfileHero from '../../components/farmProfileConsumer/farmProfileHero'
import FarmProfileDescription from '../../components/farmProfileConsumer/farmProfileDescription'

import FarmProfileHeader from '../../components/farmProfileConsumer/farmProfileHeader'
import FarmProfileCertificates from '../../components/farmProfileConsumer/farmProfileCertificates'
import FarmProfileGallery from '../../components/farmProfileConsumer/farmProfileGallery'
import { LoggedNavBar } from '../../components'

import OtherProducts from '../../components/farmProfileConsumer/otherProducts'

const FarmProfileConsumer = (props) => {
    const [farmData, setFarmData] = useState()

    /*variables to control messages in modal*/
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    let errorMessage = ''

    const [description, setDescription] = useState()
    const [descriptionShort, setDescriptionShort] = useState()
    const [descriptionLong, setDescriptionLong] = useState()
    const [products, setProducts] = useState()

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
    let farmID = ''

    if (props.location?.state?.farmID) {
        farmID = props.location.state.farmID
    }
    //else {
    //     farmID = '61931107a3a69e9788cba0e8'
    // }

    useEffect(() => {
        // if (Object.keys(user).length > 0) {
        axios
            .get(`/api/farm/${farmID}`)

            .then((res) => {
                res.data.data.description === ''
                    ? setDescription(
                          'A great description is comming soon for this farm.'
                      )
                    : setDescription(res.data.data.description)
                setFarmData(res)

                setArrPicFarmGallery(res.data.data.gallery)

                setProducts(res.data.allProducts)
            })
            .catch((error) => {
                console.log('FarmProfile:', error)
            })
        // }
    }, [])

    useEffect(() => {
        if (description) {
            let newDesc = description

            setDescriptionShort(newDesc.substring(0, newDesc.length / 2))
            setDescriptionLong(
                newDesc.substring(newDesc.length / 2, newDesc.length)
            )
        }
    }, [description])

    // const [matches, setMatches] = useState(
    //     window.matchMedia(`(min-width: ${theme.layout.desktop})`).matches
    // )

    // useEffect(() => {
    //     const handler = (e) => setMatches(e.matches)
    //     window
    //         .matchMedia(`(min-width: ${theme.layout.desktop})`)
    //         .addListener(handler)
    // }, [])

    return (
        <>
            <LoggedNavBar />
            {farmData && (
                <Container>
                    <div id="mainContainer">
                        <FarmProfileHeader
                            farmID={farmID}
                            farmLogoUrl={farmData.data.data.logo}
                            farmName={farmData.data.data.name}
                            origin={farmData.data.data.origin}
                            location={farmData.data.data.location}
                            altitude={`${farmData.data.data.altitude} masl`}
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

                        <FarmProfileCertificates
                            arrImgCertificates={
                                farmData.data.data.certification
                            }
                        />
                    </div>
                    {products && (
                        <div id="divOtherProducts">
                            <OtherProducts
                                products={products}
                                farmID={farmID}
                            />
                        </div>
                    )}

                    <div id="gallery">
                        <FarmProfileGallery
                            arrPicFarmGallery={arrPicFarmGallery}
                            farmID={farmID}
                        />
                    </div>
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

export default FarmProfileConsumer
