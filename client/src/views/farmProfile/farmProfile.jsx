import { Container } from './farmProfile.styles'

import FarmProfileHero from '../../components/farmProfile/farmProfileHero'
import FarmProfileDescription from '../../components/farmProfile/farmProfileDescription'
import FarmProfileProducts from '../../components/farmProfile/farmProfileProducts'
import FarmProfileHeader from '../../components/farmProfile/farmProfileHeader'

//delete after connect to db
import placeHolder from '../../assets/images/placeholder.png'

const FarmProfile = () => {
    // delete objects after connect to db
    const objFarmProfile = {
        farmSize: '10Km',
        description:
            'Tellus sit ipsum sit iaculis tortor aliquet egestas. Tempus hac fames sagittis felis curabitur ultricies. Enim at adipiscing gravida diam venenatis, pellentesque metus montes. Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ut. Eget dapibus eros, ullamcorper vestibulum vel congue proin. \n Tellus sit ipsum sit iaculis tortor aliquet egestas. Tempus hac fames sagittis felis curabitur ultricies. Enim at adipiscing gravida diam venenatis, pellentesque metus montes. Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ut. Eget dapibus eros, ullamcorper vestibulum vel congue proin.',
    }

    const arrObjProductDetails = [
        {
            productName: 'Cafecito',
            productPrice: '50',
            productUnit: 'lb',
            productLocation: 'Colombia',
            productTaste: 'Sweet',
            productRoastLevel: 'Medium - dark',
            productUrlImage: { placeHolder },
        },
        {
            productName: 'Tecito',
            productPrice: '40',
            productUnit: 'lb',
            productLocation: 'Ingland',
            productTaste: 'Citric',
            productRoastLevel: 'Medium',
            productUrlImage: { placeHolder },
        },
        {
            productName: 'Cocholatito',
            productPrice: '30',
            productUnit: 'lb',
            productLocation: 'Mexico',
            productTaste: 'Unsweet',
            productRoastLevel: '70% cacao',
            productUrlImage: { placeHolder },
        },
    ]

    const objFarmProfileHeader = {
        farmLogoUrl: { placeHolder },
        productName: 'Product Name',
        farmName: 'Farm Name',
        origin: 'South America',
        location: 'Colombia',
        altitude: '1200masl',
    }
    console.log(objFarmProfileHeader.farmLogoUrl)
    return (
        <Container>
            <FarmProfileHeader
                farmLogoUrl={objFarmProfileHeader.farmLogoUrl.placeHolder}
                productName={objFarmProfileHeader.productName}
                farmName={objFarmProfileHeader.farmName}
                origin={objFarmProfileHeader.origin}
                location={objFarmProfileHeader.location}
                altitude={objFarmProfileHeader.altitude}
            />
            <FarmProfileHero />

            <FarmProfileDescription
                farmSize={objFarmProfile.farmSize}
                farmDescription={objFarmProfile.description}
            />
            <FarmProfileProducts
                imageWidth="100%"
                arrObjProductDetails={arrObjProductDetails}
            />
        </Container>
    )
}

export default FarmProfile
