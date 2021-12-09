import { Container, IconContainer, Input } from './homeSearchBar.styles'
import SearchIcon from '@material-ui/icons/Search'
// import { useState } from 'react';
import { useHistory } from 'react-router-dom'

const HomeSearchBar = ({ setQuerySearch, querySearch }) => {
    const handleQueryInput = (event) => {
        setQuerySearch(event.target.value.trim())
    }

    const history = useHistory()

    const handleSubmitQuery = (event, query) => {
        event.preventDefault()
        history.push({
            pathname: '/marketplace',
        })
    }

    return (
        <Container onSubmit={(event) => handleSubmitQuery(event)}>
            <IconContainer>
                <SearchIcon fontSize="medium" style={{ fill: '#009999' }} />
            </IconContainer>
            <Input
                type="text"
                placeholder="Search by product name etc..."
                value={querySearch}
                onChange={(event) => handleQueryInput(event)}
            />
        </Container>
    )
}

export default HomeSearchBar
