import { Container } from './otherProductsBanner.styles'
import ProductCard from './productCard/productCard'
import Button from '../button/button'
import { theme } from '../../theme/theme'
import { useToggle } from '../../assets/functions'
import { useState, useEffect } from 'react'

const OtherProductsBanner = ({ products, farmID }) => {
    const [isButtonVisible, setIsButtonVisible] = useToggle()
    const [buttonTitle, setButtonTitle] = useState('See more products')

    useEffect(() => {
        if (!isButtonVisible) setButtonTitle('See more products')
        else setButtonTitle('See less products')
    }, [isButtonVisible])

    return (
        <Container>
            {products.length > 0 && <h3>Other products from this farmer</h3>}
            <div className="productList">
                {!isButtonVisible &&
                    products.map(
                        (product, index) =>
                            index < 4 && (
                                <ProductCard
                                    key={product.data._id}
                                    width={'270px'}
                                    height="auto"
                                    product={product}
                                    farmID={farmID}
                                />
                            )
                    )}

                {isButtonVisible &&
                    products.map((product) => (
                        <ProductCard
                            key={product.data._id}
                            width={'270px'}
                            height="auto"
                            product={product}
                            farmID={farmID}
                        />
                    ))}
            </div>
            <div>
                {products.length > 4 && (
                    <Button
                        onClick={setIsButtonVisible}
                        title={buttonTitle}
                        backgroundColor="white"
                        textColor={theme.pallette.primary[500]}
                        borderColor={theme.pallette.primary[500]}
                    />
                )}
            </div>
        </Container>
    )
}

export default OtherProductsBanner
