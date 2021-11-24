import ButtonShare from '../../buttonShare/buttonShare'
import ButtonHeart from '../../buttonHeart/buttonHeart'
import { theme } from '../../../theme/theme'
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
                <div id="origin">
                    <div>
                        <div>
                            <p>Origin1:</p>
                            <h5>{origin}</h5>
                        </div>
                        <div>
                            <h5>{location}</h5>
                        </div>
                    </div>
                    <div>
                        <p>Altitude</p>
                        <h5>{altitude}</h5>
                    </div>
                </div>
                <div id="buttons">
                    <ButtonShare
                        borderColor={theme.pallette.black[500]}
                        textColor={theme.pallette.black[900]}
                    ></ButtonShare>
                    <ButtonHeart></ButtonHeart>
                </div>
            </HeaderMainContainer>
        </HeaderContainer>
    )
}

export default ProductDetailHeader
