import { Input, FieldContainer, IconContainer } from './searchBar.styles'
import SearchIcon from '@material-ui/icons/Search'

const SearchBar = ({ onClick, onKeyUp, width, height, placeholder = '' }) => {
    return (
        <FieldContainer>
            <Input
                type="text"
                name="searchQuery"
                id="searchQuery"
                onKeyUp={onKeyUp}
                width={width}
                height={height}
                placeholder={placeholder}
            />
            <IconContainer onClick={onClick}>
                <SearchIcon fontSize="medium" style={{ fill: 'white' }} />
            </IconContainer>
        </FieldContainer>
    )
}

export default SearchBar
