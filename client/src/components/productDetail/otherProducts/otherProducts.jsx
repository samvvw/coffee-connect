import OtherProductsCarousel from './otherProductsCarousel'
import OtherProductsBanner from './otherProductsBanner'
import { StyledOtherProductsContainer } from './otherProducts.styles'

import { useEffect, useState } from 'react'
import { theme } from '../../../theme/theme'

const OtherProducts = ({ arrUrlImage, imageWidth, arrObjProductDetails }) => {
    const [matches, setMatches] = useState(
        window.matchMedia('(min-width: 401px)').matches
    )

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            `(min-width: ${theme.layout.desktop})`
        )

        mediaQuery.onchange = () => {
            setMatches(mediaQuery.matches)
        }
    }, [])

    return (
        <StyledOtherProductsContainer width="100%">
            {!matches && (
                <OtherProductsCarousel
                    arrUrlImage={arrUrlImage}
                    imageWidth={imageWidth}
                    arrObjProductDetails={arrObjProductDetails}
                />
            )}
            {matches && (
                <OtherProductsBanner
                    arrUrlImage={arrUrlImage}
                    imageWidth={imageWidth}
                    arrObjProductDetails={arrObjProductDetails}
                />
            )}
        </StyledOtherProductsContainer>
    )
}

export default OtherProducts
