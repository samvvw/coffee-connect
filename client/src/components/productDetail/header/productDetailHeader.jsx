// import CircleButton from '../../circleButton/circleButton'
import ButtonShare from '../../buttonShare/buttonShare'
import ButtonHeart from '../../buttonHeart/buttonHeart'
import {
    HeaderContainer,
    HeaderMainContainer,
} from './productDetailHeader.styles'

const ProductDetailHeader = ({
    backgroundColor,
    productName,
    farmName,
    origin,
    location,
    altitude,
}) => {
    return (
        <HeaderContainer backgroundColor={backgroundColor}>
            <HeaderMainContainer>
                <div>
                    <h4>
                        {productName}, {farmName}
                    </h4>
                </div>
                <div>
                    <div>
                        <div>
                            <p>Origin:</p>
                            <h5>{origin}</h5>
                        </div>
                        <div>
                            <p>Location:</p>
                            <h5>{location}</h5>
                        </div>
                    </div>
                    <div>
                        <p>Altitude</p>
                        <h5>{altitude}</h5>
                    </div>
                </div>
                <div id="buttons">
                    {/* Buttons */}
                    <ButtonShare></ButtonShare>
                    <ButtonHeart></ButtonHeart>
                </div>
            </HeaderMainContainer>
        </HeaderContainer>
    )
}

export default ProductDetailHeader
