import Button from '../../button/button'
import ProductMemberSince from '../productMemberSince/productMemberSince'
import { Container } from './connectWithFarmerCard.styles'
import { theme } from '../../../theme/theme'

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
            <Button
                title="View Profile"
                backgroundColor="white"
                textColor={theme.pallette.primary[500]}
                borderColor={theme.pallette.primary[500]}
            />
        </Container>
    )
}

export default ConnectWithFarmerCard
