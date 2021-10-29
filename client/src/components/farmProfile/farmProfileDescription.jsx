import { Container } from './farmProfileDescription.styles'
import { useToggle } from '../../assets/functions'

const FarmProfileDescription = ({ objFarmProfile }) => {
    const [isDescriptionShort, toggleDescription] = useToggle()

    return (
        <Container>
            <div id="description">
                <h5>About this farm</h5>
                <div>
                    <p>Farm Size: {objFarmProfile.farmSize}</p>
                </div>
                <p>
                    {isDescriptionShort
                        ? objFarmProfile.farmDescriptionLong
                        : objFarmProfile.farmDescriptionShort}
                    <span>
                        <button type="button" onClick={toggleDescription}>
                            {isDescriptionShort ? 'Read less' : 'Read more'}
                        </button>
                    </span>
                </p>
            </div>
        </Container>
    )
}

export default FarmProfileDescription
