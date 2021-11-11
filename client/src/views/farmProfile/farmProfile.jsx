import { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Container } from './farmProfile.styles'

import FarmProfileHero from '../../components/farmProfile/farmProfileHero'
import FarmProfileDescription from '../../components/farmProfile/farmProfileDescription'
import FarmProfileProducts from '../../components/farmProfile/farmProfileProducts'
import FarmProfileHeader from '../../components/farmProfile/farmProfileHeader'
import FarmProfileCertificates from '../../components/farmProfile/farmProfileCertificates'
import FarmProfileGallery from '../../components/farmProfile/farmProfileGallery'
import { LoggedNavBar } from '../../components'
import { UserContext } from '../../context/userContext/userContext'

//delete after connect to db
import placeHolder from '../../assets/images/placeholder.png'
import Map from '../../components/map/map'

//delete images for testing
import pic1 from '../../assets/testImages/pic1.png'
import pic2 from '../../assets/testImages/pic2.png'
import pic3 from '../../assets/testImages/pic3.png'
import pic4 from '../../assets/testImages/pic4.png'
import pic5 from '../../assets/testImages/pic5.png'
import pic6 from '../../assets/testImages/pic6.png'
import pic7 from '../../assets/testImages/pic7.png'
import pic8 from '../../assets/testImages/pic8.png'

const FarmProfile = () => {
    const { isTokenExpired } = useContext(UserContext)
    const history = useHistory()

    useEffect(() => {
        if (isTokenExpired()) {
            history.replace('/sign-in')
        }
    })

    // delete objects after connect to db

    const arrPicFarmGallery = [
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
        pic6,
        pic7,
        pic8,
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
        pic6,
        pic7,
    ]

    const objFarmProfile = {
        farmSize: '10Km',
        farmDescriptionShort:
            'Tellus sit ipsum sit iaculis tortor aliquet egestas. Tempus hac fames sagittis felis curabitur ultricies. Enim at adipiscing gravida diam venenatis, pellentesque metus montes. Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ut. Eget dapibus eros, ullamcorper vestibulum vel congue proin. ',
        farmDescriptionLong:
            'Tellus sit ipsum sit iaculis tortor aliquet egestas. Tempus hac fames sagittis felis curabitur ultricies. Enim at adipiscing gravida diam venenatis, pellentesque metus montes. Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ut. Eget dapibus eros, ullamcorper vestibulum vel congue proin. \n Tellus sit ipsum sit iaculis tortor aliquet egestas. Tempus hac fames sagittis felis curabitur ultricies. Enim at adipiscing gravida diam venenatis, pellentesque metus montes. Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ut. Eget dapibus eros, ullamcorper vestibulum vel congue proin',
    }

    /*coordinates for the map*/
    const data = [[4.11, -72.93]]

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

    const objFarmProfileHeader = {
        farmLogoUrl: { placeHolder },
        farmName: 'Farm Name',
        origin: 'South America',
        location: 'Colombia',
        altitude: '1200masl',
    }
    const arrImgCertificates = [placeHolder, placeHolder, placeHolder]
    /************************************************* */
    //Verify when to show map

    const [matches, setMatches] = useState(
        window.matchMedia('(min-width: 401px)').matches
    )

    useEffect(() => {
        const handler = (e) => setMatches(e.matches)
        window.matchMedia('(min-width: 401px)').addListener(handler)
    }, [])
    /**************************************************** */

    // Verify if gallery has images

    let hasImages = false
    if (arrPicFarmGallery.length > 0) hasImages = true

    return (
        <>
            <LoggedNavBar />
            <Container>
                <div id="mainContainer">
                    <FarmProfileHeader
                        farmLogoUrl={
                            objFarmProfileHeader.farmLogoUrl.placeHolder
                        }
                        farmName={objFarmProfileHeader.farmName}
                        origin={objFarmProfileHeader.origin}
                        location={objFarmProfileHeader.location}
                        altitude={objFarmProfileHeader.altitude}
                    />
                    <FarmProfileHero farmName={objFarmProfileHeader.farmName} />

                    <FarmProfileDescription objFarmProfile={objFarmProfile} />

                    {/* Show map only in desktop */}
                    {matches && (
                        <div id="map">
                            {/* Map */}
                            <div>
                                <p>Our location</p>
                            </div>
                            <Map
                                data={data}
                                style={{ width: '100%', height: '300px' }}
                                zoom={4}
                            />
                        </div>
                    )}

                    <FarmProfileCertificates
                        arrImgCertificates={arrImgCertificates}
                    />

                    <FarmProfileProducts
                        imageWidth="100%"
                        arrObjProductDetails={arrObjProductDetails}
                    />
                </div>
                {hasImages && (
                    <div id="gallery">
                        <FarmProfileGallery
                            arrPicFarmGallery={arrPicFarmGallery}
                        />
                    </div>
                )}
            </Container>
        </>
    )
}

export default FarmProfile
