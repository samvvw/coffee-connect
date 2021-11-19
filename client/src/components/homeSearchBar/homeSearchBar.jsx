import { Container, IconContainer, Input } from './homeSearchBar.styles'
import SearchIcon from '@material-ui/icons/Search'

const HomeSearchBar = ({ onClick, onKeyUp, width, height, placeholder = '' }) => {
    return (
        <Container onClick={onClick}>
            <IconContainer>
                <SearchIcon fontSize="medium" style={{ fill: '#009999' }} />
            </IconContainer>
            <Input
            type="text"
            name="searchQuery"
            id="searchQuery"
            placeholder="Search by product name, taste, aromas..."
            onKeyUp={onKeyUp}
            />
        </Container>
    )
}

export default HomeSearchBar
