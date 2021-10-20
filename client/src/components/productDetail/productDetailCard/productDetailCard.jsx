import DropdownList from '../../dropdownList/dropdownList'
import Button from '../../button/button'
import {
    CardContainer,
    CardChildContainer,
    PPrice,
} from './productDetailCard.styles'

const ProductDetailCard = ({
    width,
    height,
    objProductValues,
    objArraySizes,
    objArrayQty,
}) => {
    /*
    Object Product values
        productName
        taste
        roastLevel
        process
        variety
        roastDate
        objPriceUnitSize
    */

    return (
        <CardContainer width={width} height={height}>
            <CardChildContainer gridColumn="1/2" gridRow="1/2">
                <h3>{objProductValues.productName}</h3>
            </CardChildContainer>
            <CardChildContainer gridColumn="1/2" gridRow="2/3">
                <div>
                    <p>Taste:</p>
                </div>
                <div>
                    <p>{objProductValues.taste}</p>
                </div>
            </CardChildContainer>
            <CardChildContainer gridColumn="1/2" gridRow="3/4">
                <div>
                    <p>Roast level:</p>
                </div>
                <div>
                    <p>{objProductValues.roastLevel}</p>
                </div>
            </CardChildContainer>
            <CardChildContainer gridColumn="1/2" gridRow="4/5">
                <div>
                    <p>Process:</p>
                </div>
                <div>
                    <p>{objProductValues.process}</p>
                </div>
            </CardChildContainer>
            <CardChildContainer gridColumn="1/2" gridRow="5/6">
                <div>
                    <p>Variety:</p>
                </div>
                <div>
                    <p>{objProductValues.variety}</p>
                </div>
            </CardChildContainer>
            <CardChildContainer gridColumn="1/2" gridRow="6/7">
                <div>
                    <p>Roast date:</p>
                </div>
                <div>
                    <p>{objProductValues.roastDate}</p>
                </div>
            </CardChildContainer>
            <CardChildContainer gridColumn="1/2" gridRow="7/8">
                <div>
                    <p>Size:</p>
                </div>
                <div>
                    <DropdownList
                        width="95%"
                        selectName="ddlSizes"
                        selectId="ddlIDSizes"
                        objArrayValues={objArraySizes}
                    />
                </div>
            </CardChildContainer>
            <CardChildContainer gridColumn="1/2" gridRow="8/9">
                <div>
                    <DropdownList
                        width="90%"
                        selectName="ddlQty"
                        selectId="ddlIDQty"
                        objArrayValues={objArrayQty}
                    />
                </div>
                <div>
                    <PPrice fontSize="1rem">
                        $10
                        {/* ${objProductValues.objPriceUnitSize.price} */}
                        <span>
                            /100gr{' '}
                            {/* /{objProductValues.objPriceUnitSize.unit} */}
                        </span>
                    </PPrice>
                </div>
            </CardChildContainer>
            <CardChildContainer gridColumn="1/2" gridRow="9/10">
                <Button
                    title="Add to basquet"
                    backgroundColor="#C4C4C4"
                    textColor="Black"
                ></Button>
            </CardChildContainer>
        </CardContainer>
    )
}

export default ProductDetailCard
