import DropdownList from '../../dropdownList/dropdownList'
import Button from '../../button/button'
import { CardContainer } from './productDetailCard.styles'
import { useState } from 'react'
import { theme } from '../../../theme/theme'

const ProductDetailCard = ({
    productName,
    objArraySizes,
    objProductValues,
}) => {
    const [price, setPrice] = useState()

    return (
        <CardContainer>
            <div id="farmProduct">
                <h2>{productName}</h2>
            </div>
            <div id="roastLevel">
                <div>
                    <p>Roast level:</p>
                </div>
                <div>
                    <p>{objProductValues.roastLevel}</p>
                </div>
            </div>
            <div id="process">
                <div>
                    <p>Process:</p>
                </div>
                <div>
                    <p>{objProductValues.coffeeProcess}</p>
                </div>
            </div>
            <div id="variety">
                <div>
                    <p>Variety:</p>
                </div>
                <div>
                    <p>{objProductValues.coffeeVariety}</p>
                </div>
            </div>
            <div id="roastDate">
                <div>
                    <p>Roast date:</p>
                </div>
                <div>
                    <p>{objProductValues.roastDate}</p>
                </div>
            </div>
            <div id="size">
                <div>
                    <p>Size:</p>
                </div>
                <div>
                    <DropdownList
                        width="95%"
                        objArraySizes={objArraySizes}
                        setPrice={setPrice}
                    />
                </div>
            </div>
            <div id="price">
                <div>
                    <p>Price:</p>
                </div>
                {price && <div>${price} CAD</div>}
            </div>
            <div id="button">
                <Button
                    title="Available"
                    backgroundColor={theme.pallette.accent1[50]}
                    textColor="Black"
                    borderColor={theme.pallette.accent1[50]}
                ></Button>
            </div>
        </CardContainer>
    )
}

export default ProductDetailCard
