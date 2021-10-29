import { Link } from 'react-router-dom'
import { StyledLogo } from './logo.styles'

const Logo = (props) => {
    return (
        <StyledLogo>
            <Link to="/">Qafa</Link>
        </StyledLogo>
    )
}

export default Logo
