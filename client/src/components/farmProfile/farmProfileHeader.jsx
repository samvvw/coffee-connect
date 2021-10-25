import CircleButton from '../circleButton/circleButton'

import { HeaderContainer } from './farmProfileHeader.styles'

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
            <div id="headerMainContainer">
                <div id="farmLogo">
                    <img src={farmLogoUrl} alt="" />
                    <h4>{farmName}</h4>
                </div>
                <div id="farmData">
                    <div id="originLocation">
                        <div id="origin">
                            <p>Origin:</p>
                            <h5>{origin}</h5>
                        </div>
                        <div id="location">
                            <p>Location:</p>
                            <h5>{location}</h5>
                        </div>
                    </div>
                    <div id="altitude">
                        <div>
                            <p>Altitude</p>
                            <h5>{altitude}</h5>
                        </div>
                    </div>
                </div>
                <div id="farmIcons">
                    <div>
                        <CircleButton IconName="BookmarkBorderIcon" />
                    </div>
                    <div>
                        <CircleButton IconName="Share" />
                    </div>
                </div>
            </div>
        </HeaderContainer>
    )
}

export default FarmProfileHeader
