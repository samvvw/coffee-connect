import Button from '../button/button'
import imgPlaceholder from '../../assets/images/placeholderrectangle.png'
import { Container } from './farmProfileHero.styles'

const FarmProfileHero = () => {
    return (
        <Container>
            <div id="buttons">
                <Button
                    title="Follow updates"
                    onClick=""
                    backgroundColor="lightgray"
                    textColor="black"
                />
                <Button
                    title="Share with a friend"
                    onClick=""
                    backgroundColor="lightgray"
                    textColor="black"
                />
            </div>
            <div id="image">
                <img alt="" src={imgPlaceholder} />
            </div>
        </Container>
    )
}

export default FarmProfileHero
