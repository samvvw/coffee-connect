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
    farmID,
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
        const handler = (e) => setMatches(e.matches)
        window
            .matchMedia(`(min-width: ${theme.layout.desktop})`)
            .addListener(handler)
    }, [])
    return (
        <HeaderContainer backgroundColor={backgroundColor}>
            <HeaderMainContainer>
                <div id="divLogoName">
                    {/* <img src={farmLogoUrl} alt="" /> */}
                    {/* <div id="divLogo"> */}
                    <div id="divLogo">
                        {matches && (
                            <ImageFarm
                                idFarm={farmID}
                                bgImage={farmLogoUrl && ''}
                                fileContainerinDB="logo"
                                width="102px"
                                height="102px"
                            ></ImageFarm>
                        )}
                        {!matches && (
                            <ImageFarm
                                idFarm={farmID}
                                bgImage={farmLogoUrl && ''}
                                fileContainerinDB="logo"
                                width="57px"
                                height="57px"
                            ></ImageFarm>
                        )}
                    </div>
                    <div id="divFarmName">
                        <h4>{farmName}</h4>
                    </div>
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
                    />
                </div>
            </HeaderMainContainer>
        </HeaderContainer>
    )
}

export default FarmProfileHeader
