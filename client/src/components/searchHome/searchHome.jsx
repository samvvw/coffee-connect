import SearchBar from '../searchBar/searchBar'
import Image from '../image/image'
import { Heading, SearchHomeContainer } from './searchHome.styles'
import image from '../../assets/images/home-map.png'

const SearchHome = (props) => {
    return (
        <SearchHomeContainer>
            <Heading>Start Looking for your coffee farmer</Heading>
            <SearchBar />
            <Image urlImg={image} width="1149px" />
        </SearchHomeContainer>
    )
}

export default SearchHome
