// import CircleButton from '../../circleButton/circleButton'
import ButtonShare from '../buttonShare/buttonShare'

import ButtonSave from '../buttonSave/buttonSave'
import {
    HeaderContainer,
    HeaderMainContainer,
} from './farmProfileHeader.styles'

const FarmProfileHeader = ({
    farmLogoUrl,
    backgroundColor,
    farmName,
    origin,
    location,
    altitude,
}) => {
    return (
        <HeaderContainer backgroundColor={backgroundColor}>
            <HeaderMainContainer>
                <div>
                    <img src={farmLogoUrl} alt="" />
                    <h4>{farmName}</h4>
                </div>
                <div>
                    <div>
                        <div>
                            <p>Origin:</p>
                            <h5>{origin}</h5>
                        </div>
                        <div>
                            <p>Location:</p>
                            <h5>{location}</h5>
                        </div>
                    </div>
                    <div>
                        <p>Altitude</p>
                        <h5>{altitude}</h5>
                    </div>
                </div>
                <div id="buttons">
                    {/* Buttons */}
                    <ButtonShare></ButtonShare>
                    <ButtonSave></ButtonSave>
                </div>
            </HeaderMainContainer>
        </HeaderContainer>
    )
}

export default FarmProfileHeader
