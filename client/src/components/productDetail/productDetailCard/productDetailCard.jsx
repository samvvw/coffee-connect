import DropdownList from '../../dropdownList/dropdownList'
import Button from '../../button/button'
import { CardContainer } from './productDetailCard.styles'

const ProductDetailCard = ({
    productName,
    farmName,
    objProductSizesPrices,
    objArraySizes,
    objProductValues,
}) => {
    /*
    Object Product values            
        roastLevel
        process
        variety
        roastDate
        objPriceUnitSize
    */

    return (
        <CardContainer>
            <div id="farmProduct">
                <h2>
                    {productName},{farmName}
                </h2>
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
                    <p>{objProductValues.process}</p>
                </div>
            </div>
            <div id="variety">
                <div>
                    <p>Variety:</p>
                </div>
                <div>
                    <p>{objProductValues.variety}</p>
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
                    <p>Select size:</p>
                </div>
                <div>
                    <DropdownList
                        width="95%"
                        selectName="ddlSizes"
                        selectId="ddlIDSizes"
                        objArrayValues={objArraySizes}
                    />
                </div>
            </div>
            <div id="price">
                <div>
                    <p>Price:</p>
                </div>
                <div>
                    $10
                    {/* ${objProductValues.objPriceUnitSize.price} */}
                    <span>
                        /100gr {/* /{objProductValues.objPriceUnitSize.unit} */}
                    </span>
                </div>
            </div>
            <div id="button">
                <Button
                    title="Available"
                    backgroundColor="#C4C4C4"
                    textColor="Black"
                ></Button>
            </div>
        </CardContainer>
    )
}

export default ProductDetailCard
