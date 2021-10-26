import imgPlaceholder from '../../assets/images/placeholder.png'
import { Container } from './farmProfileDescription.styles'

const FarmProfileDescription = ({ farmSize, farmDescription }) => {
    return (
        <Container>
            <div id="description">
                <h5>Farm Description</h5>
                <div>
                    <p>Farm Size: {farmSize}</p>
                </div>
                <p>{farmDescription}</p>
            </div>
            <div id="certificates">
                <div>
                    <h5>Certificates</h5>
                    <a href="#">See All</a>
                </div>
                <div>
                    <img src={imgPlaceholder} alt="" />
                    <img src={imgPlaceholder} alt="" />
                </div>
            </div>
        </Container>
    )
}

export default FarmProfileDescription
