import Button from '../button/button'
import FarmProfileProductCard from './farmProfileProductCard'
import { Container } from './farmProfileProducts.styles'
import { useEffect, useState } from 'react'
import { theme } from '../../theme/theme'
const FarmProfileProducts = ({ imageWidth, arrObjProductDetails }) => {
    const cardWidth = '100%'

    // *******************************************************

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
        <Container>
            <h5>Farm Products</h5>
            <div id="divProducts">
                {matches &&
                    arrObjProductDetails.map(function (product) {
                        return (
                            <FarmProfileProductCard
                                imageWidth={imageWidth}
                                imageHeight="auto"
                                width={cardWidth}
                                height="auto"
                                objProductDetails={product}
                            />
                        )
                    })}
                {!matches &&
                    arrObjProductDetails.slice(0, 3).map(function (product) {
                        return (
                            <FarmProfileProductCard
                                imageWidth={imageWidth}
                                imageHeight="auto"
                                width={cardWidth}
                                height="auto"
                                objProductDetails={product}
                            />
                        )
                    })}
            </div>
            <div id="divButton">
                <Button
                    title="See all the products"
                    backgroundColor="lightgray"
                    textColor="Black"
                />
            </div>
        </Container>
    )
}

export default FarmProfileProducts
