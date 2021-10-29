import CircleButton from '../../components/circleButton/circleButton'
import imgPlaceholder from '../../assets/images/placeholderrectangle.png'
import { Container } from './farmProfileHero.styles'
import { useEffect, useState } from 'react'

const FarmProfileHero = ({ farmName }) => {
    // *******************************************************

    const [matches, setMatches] = useState(
        window.matchMedia('(min-width: 401px)').matches
    )

    useEffect(() => {
        const handler = (e) => setMatches(e.matches)
        window.matchMedia('(min-width: 401px)').addListener(handler)
    }, [])

    return (
        <Container>
            <div id="buttons">
                <div>
                    <CircleButton
                        IconName="BookmarkBorderIcon"
                        onClick=""
                        buttonBgc="white"
                    />
                    <CircleButton
                        IconName="Share"
                        onClick=""
                        buttonBgc="white"
                    />
                </div>
            </div>
            <div id="image">
                <img alt="" src={imgPlaceholder} />
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
