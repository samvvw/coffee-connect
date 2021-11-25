import CircleButton from '../../components/circleButton/circleButton'
import { Container } from './farmProfileHero.styles'
import { useEffect, useState } from 'react'
import { theme } from '../../theme/theme'

import { Link } from 'react-router-dom'

import ArrowBack from '@material-ui/icons/ArrowBack'
import placeholder from '../../assets/images/placeholder.png'

const FarmProfileHero = ({ urlImage, farmName }) => {
    // *******************************************************

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
        <Container>
            {!matches && (
                <div id="divBannerHeader">
                    <div id="divLink">
                        <Link to="/my-products">
                            <ArrowBack
                                style={{
                                    fill: theme.pallette.black[400],
                                }}
                            />
                        </Link>
                    </div>
                </div>
            )}
            <div id="subContainer">
                <div id="buttons">
                    <CircleButton
                        IconName="BookmarkBorderIcon"
                        buttonBgc="white"
                    />
                    <CircleButton IconName="Share" buttonBgc="white" />
                </div>
                <div id="image">
                    <img
                        alt=""
                        src={
                            urlImage === 'Default Picture URL'
                                ? placeholder
                                : urlImage
                        }
                    ></img>
                </div>
                {matches && (
                    <div id="farmName">
                        <p>{farmName}</p>
                    </div>
                )}
            </div>
        </Container>
    )
}

export default FarmProfileHero
