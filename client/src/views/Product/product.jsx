import { Container } from './product.styles'

import ProductDetailHeader from '../../components/productDetail/header/productDetailHeader'

import ProductDetailImages from '../../components/productDetail/imagesGroup/productDetailImages'
import ProductDetailCard from '../../components/productDetail/productDetailCard/productDetailCard'
import ProductDescription from '../../components/productDetail/productDescription/productDetailDescription'
import ConnectWithFarmer from '../../components/productDetail/connectWithFarmerCard/connectWithFarmerCard'
import OtherProducts from '../../components/productDetail/otherProducts/otherProducts'

import Map from '../../components/map/map'
import CircleButton from '../../components/circleButton/circleButton'

import placeHolder from '../../assets/images/placeholder.png'
import videoPlaceHolder from '../../assets/images/video-placeholder.png'
import { useEffect, useState } from 'react'

const Product = (props) => {
    /*Remove after connect to db*/
    const headerDetails = {
        productName: 'Balcon de la Montaña',
        farmName: 'Pan de Azucar, Caldas',
        origin: 'South America',
        location: 'Colombia',
        altitude: '1200masl',
    }
    //no more than 4 images
    const urlsArray = [placeHolder, placeHolder, placeHolder, placeHolder]

    const objArraySizes = [
        {
            id: '1',
            option: '340gr',
        },
        {
            id: '2',
            option: '454gr',
        },
        {
            id: '3',
            option: '680gr',
        },
    ]
    const objProductValues = {
        productName: 'Fire Dept. Coffe Original',
        taste: 'Sweet',
        roastLevel: 'Medium dark',
        process: 'Dry',
        variety: 'Arabica',
        roastDate: ' 2/10/2021',
        objPriceUnitSize: [
            {
                size: '340',
                unit: 'gr',
                price: '10us',
            },
            {
                size: '454',
                unit: 'gr',
                price: '12us',
            },
            {
                size: '680',
                unit: 'gr',
                price: '15us',
            },
        ],
    }

    const objProductDescription = {
        process: 'Red Honey',
        aroma: 'Red Apple, Chocolate Bar',
        fermentation: 'Anaerobic Fermentation 72 Hrs. , 6 Hrs, Aerobic',
        drying: 'Canopy',
        roast: 'Scandinavian',
        profile: 'Milk Chocolate, Caramel, Tamarind, Kiwi, Red Apple',
        residuals: 'Sweet, Prolonged',
        acidity: 'Juicy',
        body: 'Creamy',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis tempora animi eveniet ipsam minima quia provident eligendi delectus mollitia aliquam atque ea hic laudantium nesciunt, saepe error voluptatem quidem officia numquam dolores aspernatur ullam, ducimus porro! Minima, at. Ipsa eos reprehenderit obcaecati nam possimus minima odit amet mollitia porro non vel, sit rerum explicabo molestias totam deserunt dolore officia quidem tempora beatae vero! Illum quos eligendi voluptas incidunt omnis.',
    }
    const arrObjProductDetails = [
        {
            productName: 'Whirlwind Coffe Co. Ethiopia',
            productPrice: '18.99 CAD',
            productUnit: '100gr',
            productDescription: 'Yirgacheffe',
        },
        {
            productName: 'Fire Dept. Coffe Original',
            productPrice: '18.99 CAD',
            productUnit: '100g',
            productDescription: 'Medium Roast',
        },
        {
            productName: 'Howler Coffee Co. Bucksaw',
            productPrice: '18.99 CAD',
            productUnit: '100g',
            productDescription: 'Blend',
        },
        {
            productName: 'Onyx Coffee Lab Colombia',
            productPrice: '18.99',
            productUnit: '100g',
            productDescription: 'Aponte Village',
        },
    ]

    const data = [
        {
            coordinates: [4.11, -72.93],
        },
    ]
    const objMemberSince = {
        imgUrl: placeHolder,
        farmName: 'Finca LomaVerde',
        memberSince: '2018',
    }

    // *******************************************************

    const [matches, setMatches] = useState(
        window.matchMedia('(min-width: 401px)').matches
    )

    useEffect(() => {
        const handler = (e) => setMatches(e.matches)
        window.matchMedia('(min-width: 401px)').addListener(handler)
    }, [])

    return (
        <Container>
            <div id="subContainer">
                <div id="headerDesktop">
                    {matches && (
                        <ProductDetailHeader
                            backgroundColor="white"
                            productName={headerDetails.productName}
                            farmName={headerDetails.farmName}
                            origin={headerDetails.origin}
                            location={headerDetails.location}
                            altitude={headerDetails.altitude}
                        />
                    )}
                </div>
                {/* 2 Group of images */}
                <div id="images">
                    <div>
                        <ProductDetailImages
                            urlsArray={urlsArray}
                            width="100%"
                        />
                    </div>
                    <div>
                        <CircleButton IconName="FavoriteFull" onClick="" />
                        <CircleButton IconName="Share" onClick="" />
                    </div>
                </div>
                {/* 1 header */}
                <div id="header">
                    {!matches && (
                        <ProductDetailHeader
                            backgroundColor="white"
                            productName={headerDetails.productName}
                            farmName={headerDetails.farmName}
                            origin={headerDetails.origin}
                            location={headerDetails.location}
                            altitude={headerDetails.altitude}
                        />
                    )}
                </div>
                {/* 3 Product detail card */}
                <div id="detailCard">
                    <ProductDetailCard
                        width="300px"
                        productName={
                            headerDetails.productName +
                            ', ' +
                            headerDetails.farmName
                        }
                        objProductValues={objProductValues}
                        objArraySizes={objArraySizes}
                    />
                </div>
                {/* 5 Product description */}
                <div id="description">
                    <ProductDescription
                        objProductDescription={objProductDescription}
                    />
                </div>
                {/* 8 Map */}
                <div id="map">
                    {/* Map */}
                    <div>
                        <p>Location</p>
                    </div>
                    <Map
                        data={data}
                        style={{ width: '100%', height: '300px' }}
                    />
                </div>
                {/* 4 Connect with farmer */}
                <div id="connectWFarmer">
                    <ConnectWithFarmer
                        objMemberSince={objMemberSince}
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis tempora animi eveniet ipsam minima quia provident eligendi delectus "
                    />
                </div>
            </div>
            {/* 10 Other products card */}
            <div id="otherProducts">
                {/* Other products from this farmer */}
                <h4>Other products from this farmer</h4>
                <OtherProducts
                    arrUrlImage={urlsArray}
                    imageWidth="100%"
                    arrObjProductDetails={arrObjProductDetails}
                />
            </div>
        </Container>
    )
}

export default Product
