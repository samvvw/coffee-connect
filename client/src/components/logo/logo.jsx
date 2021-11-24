import { Link } from 'react-router-dom'
import { StyledLogo } from './logo.styles'
import QafaLogo from '../../assets/qafa-logo-final-05.svg'
import QafaLogoMobile from '../../assets/qafa-logo-mobile.svg'

const Logo = ({ type = 'desktop' }) => {
    return (
        <StyledLogo>
            <Link to="/">
                {type === 'desktop' && <img src={QafaLogo} alt="" />}
                {type === 'mobile' && (
                    <img className="mobile-logo" src={QafaLogoMobile} alt="" />
                )}
            </Link>
        </StyledLogo>
    )
}

export default Logo
