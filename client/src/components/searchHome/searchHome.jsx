import HomeSearchBar from '../homeSearchBar/homeSearchBar'
import Image from '../image/image'
import image from '../../assets/images/home-map.png'
import { Heading, SearchHomeContainer,  MapContainer, SearchBarContainer, /* MapWrapper */ } from './searchHome.styles'

//In case to put Map
// import Map from '../../components/map/map'
// import { useEffect, useState, useRef, } from 'react'
// import { useFarms } from '../../hooks'
// import lottie from 'lottie-web'


const SearchHome = ({setQuerySearch, querySearch}) => {

    //In case to put Map
    // const [loading, setLoading] = useState(true)
    // const [farms] = useFarms()
    // const [coordinates, setCoordinates] = useState()
    // const container = useRef()

    // useFarms()

    // useEffect(() => {
    //     lottie.loadAnimation({
    //         container: container.current,
    //         renderer: 'svg',
    //         loop: true,
    //         autoplay: true,
    //         animationData: require('../../assets/cofffee-loading.json')
    //     })
    // }, [])

    // useEffect(() => {
    //     let timeout = setTimeout(() => setLoading(false), 1200)

    //     return () => {
    //         clearTimeout(timeout)
    //     }
    // }, [])

    // useEffect(() => {
    //     const getCoordinates = () => {
    //         const result = farms.map(({ data }) => [
    //             +data.coordinate[0],
    //             +data.coordinate[1],
    //         ])
    //         setCoordinates(result)
    //     }
    //     getCoordinates()
    // }, [farms])

    return (
        <SearchHomeContainer>
            <Heading>Let's get you a farm-fresh brew today</Heading>
            <MapContainer>
                <SearchBarContainer>
                    <HomeSearchBar querySearch={querySearch}  setQuerySearch={setQuerySearch}/>
                </SearchBarContainer>    
                <Image urlImg={image} border="none" padding="0" />
                {/* <MapWrapper>
                    {!loading && (
                        <Map
                            data={coordinates}
                            style={{ width: '100%', height: '100%'}}
                        />
                    )}
                    {loading && <div className="container" ref={container}></div>}
                </MapWrapper> */}
            </MapContainer>
        </SearchHomeContainer>
    )
}

export default SearchHome
