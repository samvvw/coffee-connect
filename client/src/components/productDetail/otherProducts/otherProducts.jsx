import OtherProductsCarousel from './otherProductsCarousel'
import OtherProductsBanner from './otherProductsBanner'
import { StyledOtherProductsContainer } from './otherProducts.styles'

import { useEffect, useState } from 'react'

const OtherProducts = ({ arrUrlImage, imageWidth, arrObjProductDetails }) => {
    const [matches, setMatches] = useState(
        window.matchMedia('(min-width: 401px)').matches
    )

    useEffect(() => {
        const handler = (e) => setMatches(e.matches)
        window.matchMedia('(min-width: 401px)').addListener(handler)
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
