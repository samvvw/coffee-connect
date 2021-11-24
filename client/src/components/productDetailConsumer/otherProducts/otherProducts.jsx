// import OtherProductsCarousel from './otherProductsCarousel'
import OtherProductsBanner from './otherProductsBanner'
import { StyledOtherProductsContainer } from './otherProducts.styles'

// import { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import { theme } from '../../../theme/theme'

const OtherProducts = ({ products, farmID }) => {
    // const history = useHistory()

    // const [matches, setMatches] = useState(
    //     window.matchMedia(`(min-width: ${theme.layout.desktop})`).matches
    // )

    // useEffect(() => {
    //     const handler = (e) => setMatches(e.matches)
    //     window
    //         .matchMedia(`(min-width: ${theme.layout.desktop})`)
    //         .addListener(handler)
    // }, [])

    return (
        <StyledOtherProductsContainer width="100%">
            {/* {matches &&  */}
            <OtherProductsBanner products={products} farmID={farmID} />
            {/* } */}
        </StyledOtherProductsContainer>
    )
}

export default OtherProducts
