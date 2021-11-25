// import ProductDetailImageGroup from './productDetailImagesGroup'
// import ProductDetailImageDynamicGrid from './productDetailImagesDynamicGrid'
import ProductDetailImagesCarousel from './productDetailImagesCarousel'
import { StyledProductDetailImages } from './productDetailImages.styles'

import { useEffect, useState } from 'react'
import { theme } from '../../../theme/theme'

const ProductDetailImages = ({
    urlsArray,
    width,
    farmId,
    productId,
    likes,
}) => {
    const [matches, setMatches] = useState(
        window.matchMedia(`(min-width: ${theme.layout.desktop})`).matches
    )

    useEffect(() => {
        const handler = (e) => setMatches(e.matches)
        window
            .matchMedia(`(min-width: ${theme.layout.desktop})`)
            .addListener(handler)
    }, [])

    return (
        <StyledProductDetailImages width={width}>
            {!matches && (
                <ProductDetailImagesCarousel
                    urlsArray={urlsArray}
                    farmId={farmId}
                    productId={productId}
                    likes={likes}
                />
            )}

            {/* {matches && <ProductDetailImageDynamicGrid urlsArray={urlsArray} />} */}
        </StyledProductDetailImages>
    )
}

export default ProductDetailImages
