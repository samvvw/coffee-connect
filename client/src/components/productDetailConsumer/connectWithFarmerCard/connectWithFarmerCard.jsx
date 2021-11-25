import ProductMemberSince from '../productMemberSince/productMemberSince'
import { Container } from './connectWithFarmerCard.styles'

import { Link } from 'react-router-dom'

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

            <Link
                to={{
                    pathname: '/farm-profile-detail',
                    state: {
                        farmID: objMemberSince.farmID,
                    },
                }}
            >
                View Profile
            </Link>
        </Container>
    )
}

export default ConnectWithFarmerCard
