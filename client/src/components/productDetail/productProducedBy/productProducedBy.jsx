import { Container } from './productProducedBy.styles'

import placeHolder from '../../../assets/images/placeholder.png'

const ProductProducedBy = ({ producedBy }) => {
    return (
        <Container>
            <div>
                <img src={placeHolder} alt="" />
            </div>
            <div>
                <p>Produced by:</p>
                <h5>{producedBy}</h5>
            </div>
        </Container>
    )
}

export default ProductProducedBy
