import Button from '../../button/button'
import ProductMemberSince from '../productMemberSince/productMemberSince'
import { Container } from './connectWithFarmerCard.styles'

const ConnectWithFarmerCard = ({ objMemberSince, description }) => {
    return (
        <Container>
            <div>
                <h5>Connect with this farmer</h5>
            </div>
            <div id="member">
                <ProductMemberSince objMemberSince={objMemberSince} />
            </div>
            <div id="description">
                <p>{description}</p>
            </div>
            <Button title="View Profile" />
        </Container>
    )
}

export default ConnectWithFarmerCard
