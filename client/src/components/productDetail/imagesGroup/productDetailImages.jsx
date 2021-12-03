import ProductDetailImagesCarousel from './productDetailImagesCarousel'
import { StyledProductDetailImages } from './productDetailImages.styles'

import { useEffect, useState } from 'react'
import { theme } from '../../../theme/theme'

const ProductDetailImages = ({ urlsArray, width }) => {
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
        <StyledProductDetailImages width={width}>
            {!matches && <ProductDetailImagesCarousel urlsArray={urlsArray} />}

            {/* {matches && <ProductDetailImageDynamicGrid urlsArray={urlsArray} />} */}
        </StyledProductDetailImages>
    )
}

export default ProductDetailImages
