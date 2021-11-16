import CircleButton from '../../components/circleButton/circleButton'
import { Container } from './farmProfileHero.styles'
import { useEffect, useState } from 'react'
import { theme } from '../../theme/theme'
import ImageFarm from './imageFarm/imageFarm'

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
        </Container>
    )
}

export default FarmProfileHero
