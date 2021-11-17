// import ProductDetailImageGroup from './productDetailImagesGroup'
// import ProductDetailImageDynamicGrid from './productDetailImagesDynamicGrid'
import ProductDetailImagesCarousel from './productDetailImagesCarousel'
import { StyledProductDetailImages } from './productDetailImages.styles'

import { useEffect, useState } from 'react'

const ProductDetailImages = ({ urlsArray, width }) => {
    const [matches, setMatches] = useState(
        window.matchMedia('(min-width: 401px)').matches
    )

    useEffect(() => {
        const handler = (e) => setMatches(e.matches)
        window.matchMedia('(min-width: 401px)').addListener(handler)
    }, [])

    return (
        <StyledProductDetailImages width={width}>
            {!matches && <ProductDetailImagesCarousel urlsArray={urlsArray} />}

            {/* {matches && <ProductDetailImageDynamicGrid urlsArray={urlsArray} />} */}
        </StyledProductDetailImages>
    )
}

export default ProductDetailImages
