import Button from '../button/button'
import FarmProfileProductCard from './farmProfileProductCard'
import { Container } from './farmProfileProducts.styles'
import { useEffect, useState } from 'react'
const FarmProfileProducts = ({ imageWidth, arrObjProductDetails }) => {
    const cardWidth = '100%'

    // *******************************************************

    const [matches, setMatches] = useState(
        window.matchMedia('(min-width: 401px)').matches
    )

    useEffect(() => {
        const handler = (e) => setMatches(e.matches)
        window.matchMedia('(min-width: 401px)').addListener(handler)
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
                    onClick=""
                    backgroundColor="lightgray"
                    textColor="Black"
                />
            </div>
        </Container>
    )
}

export default FarmProfileProducts
