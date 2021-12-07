import { useState, useEffect } from 'react'
import { theme } from '../../theme/theme'
import ButtonShare from '../../components/buttonShare/buttonShare'

import ButtonBookMark from '../../components/buttonBookMark/buttonBookMark'
import placeholder from '../../assets/images/placeholder.png'

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
    // console.log('LOGO', farmLogoUrl)
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
                            <img
                                alt=""
                                width="102px"
                                height="102px"
                                src={
                                    farmLogoUrl === 'Default Picture URL'
                                        ? placeholder
                                        : farmLogoUrl
                                }
                            ></img>
                        )}
                        {!matches && (
                            <img
                                alt=""
                                width="57px"
                                height="57px"
                                src={
                                    farmLogoUrl === 'Default Picture URL'
                                        ? placeholder
                                        : farmLogoUrl
                                }
                            ></img>
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
                            <h5>
                                {origin}
                                <span className="spanPipe">|</span>
                            </h5>
                            <h5 id="h5Location">{location}</h5>
                        </div>
                        <div>{/* <h5>{location}</h5> */}</div>
                    </div>
                    <div>
                        <p>Altitude:</p>
                        <h5>{altitude}</h5>
                    </div>
                </div>
                {matches && (
                    <div id="divButtons">
                        <ButtonShare
                            borderColor={theme.pallette.black[500]}
                            textColor={theme.pallette.black[900]}
                        ></ButtonShare>
                        <ButtonBookMark
                            borderColor={theme.pallette.black[500]}
                            textColor={theme.pallette.black[900]}
                        />
                    </div>
                )}
            </HeaderMainContainer>
        </HeaderContainer>
    )
}

export default FarmProfileHeader
