// import CircleButton from '../../circleButton/circleButton'
import { useState, useEffect } from 'react'
import { theme } from '../../theme/theme'
// import ButtonShare from '../buttonShare/buttonShare'

// import ButtonSave from '../buttonSave/buttonSave'
import Button from '../button/button'
import ImageFarm from './imageFarm/imageFarm'
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
    handleShowEdit,
}) => {
    const [matches, setMatches] = useState(
        window.matchMedia(`(min-width: ${theme.layout.desktop})`).matches
    )

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            `(min-width: ${theme.layout.desktop})`
        )

        mediaQuery.onchange = () => {
            setMatches(mediaQuery.matches)
        }
    }, [])
    return (
        <HeaderContainer backgroundColor={backgroundColor}>
            <HeaderMainContainer>
                <div id="divLogoName">
                    <div id="divLogo">
                        {matches && (
                            <ImageFarm
                                fileContainerinDB="logo"
                                width="102px"
                                height="102px"
                                urlImage={farmLogoUrl}
                            ></ImageFarm>
                        )}
                        {!matches && (
                            <ImageFarm
                                fileContainerinDB="logo"
                                width="57px"
                                height="57px"
                                urlImage={farmLogoUrl}
                            ></ImageFarm>
                        )}
                    </div>
                    <div id="divFarmName">
                        <h4>{farmName}</h4>
                    </div>
                </div>
                <div id="divData">
                    <div>
                        <div>
                            <p>Origin:</p>
                            <h5>{origin}</h5>
                            <span className="h5Span">|</span>
                            <h5 className="h5Location">{location}</h5>
                        </div>
                        <div>
                            {/* <p>Location:</p>
                            <h5 className="h5Location">{location}</h5> */}
                        </div>
                    </div>
                    <div>
                        <p>Altitude:</p>
                        <h5>{altitude}</h5>
                    </div>
                </div>
                {matches && (
                    <div id="divButtons">
                        {/* Buttons */}
                        {/* <ButtonShare></ButtonShare>
                    <ButtonSave></ButtonSave> */}
                        <Button
                            title="Edit"
                            type="button"
                            backgroundColor="white"
                            textColor={theme.pallette.primary[500]}
                            borderColor={theme.pallette.primary[500]}
                            width="148px"
                            onClick={handleShowEdit}
                            hoverBackgroundColor={theme.pallette.primary.dark}
                            hoverTextColor="#fff"
                            activeBackgroundColor={theme.pallette.primary.dark}
                            activeBorderColor={theme.pallette.primary.dark}
                        />
                    </div>
                )}
            </HeaderMainContainer>
        </HeaderContainer>
    )
}

export default FarmProfileHeader
