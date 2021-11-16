import { Link } from 'react-router-dom'
import { StyledLogo } from './logo.styles'
// import QafaLogo from '../../assets/images/qafa-logo.svg'
import QafaLogo from '../../assets/qafa-logo-final-05.svg'

const Logo = (props) => {
    return (
        <StyledLogo>
            <Link to="/">
                <img src={QafaLogo} alt="" />
            </Link>
        </StyledLogo>
    )
}

export default Logo
