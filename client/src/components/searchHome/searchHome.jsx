import HomeSearchBar from '../homeSearchBar/homeSearchBar'
import Image from '../image/image'
import { Heading, SearchHomeContainer, MapContainer, SearchBarContainer } from './searchHome.styles'
import image from '../../assets/images/home-map.png'

const SearchHome = ({setQuerySearch, querySearch}) => {
    return (
        <SearchHomeContainer>
            <Heading>Let's get you a farm-fresh brew today</Heading>
            <MapContainer>
                <SearchBarContainer>
                    <HomeSearchBar querySearch={querySearch}  setQuerySearch={setQuerySearch}/>
                </SearchBarContainer>    
                <Image urlImg={image} border="none" padding="0" />
            </MapContainer>
        </SearchHomeContainer>
    )
}

export default SearchHome
