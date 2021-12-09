// import CircleButton from '../../circleButton/circleButton'
// import ButtonShare from '../../buttonShare/buttonShare'
// import ButtonHeart from '../../buttonHeart/buttonHeart'
// import { useState } from 'react'
import Button from '../../button/button'
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
    handleShow,
}) => {
    // const handleOpenCanvas = () => {
    //     handleShow
    // }
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
                            <p>Origin:</p>
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
                    <Button
                        title="Edit Product"
                        backgroundColor="white"
                        textColor={theme.pallette.secondary.c800}
                        borderColor={theme.pallette.secondary.c800}
                        width="50%"
                        onClick={handleShow}
                        hoverBackgroundColor={theme.pallette.secondary.dark}
                        hoverTextColor="#fff"
                        hoverBorderColor={theme.pallette.secondary.dark}
                        activeBackgroundColor={theme.pallette.secondary.dark}
                        activeBorderColor={theme.pallette.secondary.dark}
                    ></Button>
                    {/* Buttons */}
                    {/* <ButtonShare></ButtonShare>
                    <ButtonHeart></ButtonHeart> */}
                </div>
            </HeaderMainContainer>
        </HeaderContainer>
    )
}

export default ProductDetailHeader
