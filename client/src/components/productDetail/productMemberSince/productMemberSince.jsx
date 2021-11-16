import { Container } from './productMemberSince.styles'

const ProductMemberSince = ({ objMemberSince }) => {
    /* objData
        imgUrl
        farmName
        memberSince
    */
    return (
        <Container>
            <div>
                <img src={objMemberSince.imgUrl} alt="" />
            </div>
            <div>
                <h5>{objMemberSince.farmName}</h5>
                <p>
                    Qafa member since<span>{objMemberSince.memberSince}</span>
                </p>
            </div>
        </Container>
    )
}

export default ProductMemberSince
