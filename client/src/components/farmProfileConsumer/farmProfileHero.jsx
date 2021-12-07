import CircleButton from '../../components/circleButton/circleButton'
import { Container } from './farmProfileHero.styles'
import { useEffect, useState } from 'react'
import { theme } from '../../theme/theme'

import { useHistory } from 'react-router-dom'

import ArrowBack from '@material-ui/icons/ArrowBack'
import placeholder from '../../assets/images/placeholder.png'

const FarmProfileHero = ({
    urlImage,
    farmName,
    handleBookmark,
    bookmark,
    farmID,
    user,
}) => {
    const history = useHistory()

    // *******************************************************

    const [matches, setMatches] = useState(
        window.matchMedia(`(min-width: ${theme.layout.desktop})`).matches
    )

    const handleGoBack = () => {
        history.goBack()
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            `(min-width: ${theme.layout.desktop})`
        )

        mediaQuery.onchange = () => {
            setMatches(mediaQuery.matches)
        }
    }, [])

    return (
        <Container>
            {!matches && (
                <div id="divBannerHeader">
                    <div id="divLink">
                        <div
                            className="goback-container"
                            onClick={handleGoBack}
                        >
                            <ArrowBack
                                style={{
                                    fill: theme.pallette.black[400],
                                }}
                            />
                        </div>
                        {/* <Link to="/my-products">
                            <ArrowBack
                                style={{
                                    fill: theme.pallette.black[400],
                                }}
                            />
                        </Link> */}
                    </div>
                </div>
            )}
            <div id="subContainer">
                {user.id && (
                    <div id="buttons">
                        <CircleButton
                            IconName={
                                bookmark ? 'BookmarkIcon' : 'BookmarkBorderIcon'
                            }
                            buttonBgc="white"
                            onClick={() => handleBookmark(farmID)}
                        />
                        <CircleButton IconName="Share" buttonBgc="white" />
                    </div>
                )}
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
