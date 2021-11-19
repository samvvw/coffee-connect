import HomeSearchBar from '../homeSearchBar/homeSearchBar'
import Image from '../image/image'
import { Heading, SearchHomeContainer, MapContainer, SearchBarContainer } from './searchHome.styles'
import image from '../../assets/images/home-map.png'

const SearchHome = (props) => {
    return (
        <SearchHomeContainer>
            <Heading>Let's get you a farm-fresh brew today</Heading>
            <MapContainer>
                <SearchBarContainer>
                    <HomeSearchBar />
                </SearchBarContainer>    
                <Image urlImg={image} border="none" padding="0" />
            </MapContainer>
        </SearchHomeContainer>
    )
}

export default SearchHome
