import { useState } from 'react'
import axios from 'axios'
import ButtonShare from '../../buttonShare/buttonShare'
import ButtonHeart from '../../buttonHeart/buttonHeart'
import { theme } from '../../../theme/theme'
import {
    HeaderContainer,
    HeaderMainContainer,
} from './productDetailHeader.styles'
import { api } from '../../../config/api'

const ProductDetailHeader = ({
    backgroundColor,
    productName,
    farmName,
    origin,
    location,
    altitude,
    farmId,
    productId,
}) => {
    const [liked, setLiked] = useState(false)

    const handleLike = () => {
        const token = localStorage.getItem('token')
        axios
            .put(`${api.farms}/${farmId}/product/${productId}/likes`, {
                token,
            })
            .then((res) => {
                setLiked((prevLiked) => !prevLiked)
            })
            .catch((err) => console.log(err))
    }

    const handleShare = () => {
        const width = 200
        const height = 200
        const left = (window.screen.width - 200) / 2
        const top = (window.screen.height - 200) / 4
        var fbpopup = window.open(
            `https://www.facebook.com/sharer/sharer.php?u=https://qafa.ca/`,
            'Qafa',
            `width=${width}, height=${height}, scrollbars=no, left=${left}, top=${top}`
        )
    }

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
                        onClick={handleShare}
                    ></ButtonShare>
                    <ButtonHeart
                        onClick={handleLike}
                        liked={liked}
                    ></ButtonHeart>
                </div>
            </HeaderMainContainer>
        </HeaderContainer>
    )
}

export default ProductDetailHeader
