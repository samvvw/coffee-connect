import CircleButton from '../../components/circleButton/circleButton'
import { Container } from './farmProfileHero.styles'
import { useEffect, useState } from 'react'
import { theme } from '../../theme/theme'
import ImageFarm from './imageFarm/imageFarm'
import { Link, useHistory } from 'react-router-dom'
import Pencil from '@material-ui/icons/Create'
import ArrowBack from '@material-ui/icons/ArrowBack'

const FarmProfileHero = ({ urlImage, farmName, handleShowEdit }) => {
    const history = useHistory()

    // *******************************************************

    const [matches, setMatches] = useState(
        window.matchMedia(`(min-width: ${theme.layout.desktop})`).matches
    )

    const handleGoBack = () => {
        history.goBack()
    }

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
                        <div onClick={handleGoBack}>
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
                        <button
                            id="btnEdit"
                            onClick={handleShowEdit}
                            style={{
                                fill: theme.pallette.black[400],
                            }}
                        >
                            <Pencil
                                style={{
                                    fill: theme.pallette.black[400],
                                }}
                            />
                            Edit
                        </button>
                    </div>
                </div>
            )}
            <div id="subContainer">
                <div id="buttons">
                    <div>
                        <CircleButton
                            IconName="BookmarkBorderIcon"
                            buttonBgc="white"
                        />
                        <CircleButton IconName="Share" buttonBgc="white" />
                    </div>
                </div>
                <div id="image">
                    <ImageFarm
                        fileContainerinDB={'farmPicture'}
                        urlImage={urlImage}
                    ></ImageFarm>
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
