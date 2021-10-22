import { Container, ContainerMain, ContainerChild } from './product.styles'

import ProductDetailHeader from '../../components/productDetail/header/productDetailHeader'
import ProductDetailImages from '../../components/productDetail/imagesGroup/productDetailImages'
import ProductDetailCard from '../../components/productDetail/productDetailCard/productDetailCard'
import ProductDescription from '../../components/productDetail/productDescription/productDetailDescription'
import ConnectWithFarmer from '../../components/connectWithFarmerCard/connectWithFarmerCard'
import OtherProducts from '../../components/productDetail/otherProducts/otherProducts'
import RoastLevel from '../../components/productDetail/roastLevel/roastLevel'
import Map from '../../components/map/map'

import placeHolder from '../../assets/images/placeholder.png'
import videoPlaceHolder from '../../assets/images/video-placeholder.png'
import { useEffect, useState } from 'react'

const Product = (props) => {
    /*Remove after connect to db*/
    const urlsArray = [
        placeHolder,
        placeHolder,
        placeHolder,
        placeHolder,
        videoPlaceHolder,
    ]

    const objArrayValues = [
        {
            id: '1',
            option: 'Qty 1',
        },
        {
            id: '2',
            option: 'Qty 2',
        },
        {
            id: '3',
            option: 'Qty 3',
        },
    ]
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
        productName: 'Product Name',
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

    const arrObjProductDetails = [
        {
            productName: 'Cafecito',
            productPrice: '50',
            productUnit: 'lb',
            productLocation: 'Colombia',
            productTaste: 'Sweet',
            productRoastLevel: 'Medium - dark',
        },
        {
            productName: 'Tecito',
            productPrice: '40',
            productUnit: 'lb',
            productLocation: 'Ingland',
            productTaste: 'Citric',
            productRoastLevel: 'Medium',
        },
        {
            productName: 'Cocholatito',
            productPrice: '30',
            productUnit: 'lb',
            productLocation: 'Mexico',
            productTaste: 'Unsweet',
            productRoastLevel: '70% cacao',
        },
    ]

    const data = [
        {
            coordinates: [4.11, -72.93],
        },
    ]
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
            {matches && (
                <ProductDetailHeader
                    productName="Product Name"
                    farmName="Farm Name"
                    origin="South America"
                    location="Colombia"
                    altitude="1200masl"
                />
            )}
            <ContainerMain>
                {/* 1 header */}
                <ContainerChild gridColumn="1/5" gridRow="1/2">
                    {!matches && (
                        <ProductDetailHeader
                            backgroundColor="white"
                            productName="Product Name"
                            farmName="Farm Name"
                            origin="South America"
                            location="Colombia"
                            altitude="1200masl"
                        />
                    )}
                </ContainerChild>
                {/* 2 Group of images */}
                <ContainerChild gridColumn="1/4" gridRow="2/4">
                    <ProductDetailImages urlsArray={urlsArray} width="100%" />
                </ContainerChild>
                {/* 3 Product detail card */}
                <ContainerChild gridColumn="4/5" gridRow="2/3">
                    <ProductDetailCard
                        width="300px"
                        productName="Product Name"
                        objProductValues={objProductValues}
                        objArraySizes={objArraySizes}
                        objArrayQty={objArrayValues}
                    />
                </ContainerChild>
                {/* 4 Connect with farmer */}
                <ContainerChild gridColumn="4/5" gridRow="3/4">
                    {/* connect with this farmer */}
                    <ConnectWithFarmer
                        farmersName="Cafe Colombiano"
                        urlImgProfile={placeHolder}
                    />
                </ContainerChild>
                {/* 5 Product description */}
                <ContainerChild gridColumn="1/4" gridRow="4/5">
                    <ProductDescription href="http://google.com" />
                </ContainerChild>
                {/* 6 Empty space */}
                <ContainerChild gridColumn="4/5" gridRow="4/5"></ContainerChild>
                {/* 7 Product information */}
                <ContainerChild gridColumn="1/4" gridRow="5/6">
                    {/* Product Information */}
                    <RoastLevel
                        roastLevelText="Medium roast"
                        roastLevelValue="3"
                    />
                </ContainerChild>
                {/* 8 Map */}
                <ContainerChild gridColumn="1/4" gridRow="6/7">
                    {/* Map */}
                    <Map
                        data={data}
                        style={{ width: '600px', height: '400px' }}
                    />
                </ContainerChild>
                {/* 9 Other products from TITLE */}
                <ContainerChild gridColumn="1/5" gridRow="7/8">
                    <h4>Other products from this farmer</h4>
                </ContainerChild>
                {/* 10 Other products card */}
                <ContainerChild gridColumn="1/5" gridRow="8/9">
                    {/* Other products from this farmer */}
                    <OtherProducts
                        arrUrlImage={urlsArray}
                        imageWidth="100%"
                        arrObjProductDetails={arrObjProductDetails}
                    />
                </ContainerChild>
            </ContainerMain>
        </Container>
    )
}

export default Product
