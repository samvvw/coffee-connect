import { Container } from './TabImages.styles'
import ImageProduct from '../../../../imageProduct/imageProduct'
import { theme } from '../../../../../theme/theme'
import Button from '../../../../button/button'

const TabImages = ({
    // tabImagesDisabled,
    submitImagesButtonBgc,
    messageDisplay,
    // idProduct,
    onHide,
    setTotalProducts,
    productData,
}) => {
    // console.log(tabImagesDisabled)
    const style = { display: messageDisplay }

    return (
        <Container>
            <div>
                <h2>Add product images</h2>
            </div>
            <div>
                <h3 style={style}>
                    Your product information has been saved. Now...
                </h3>
                <p>
                    Choose your top 4 photos to be featured on your product page
                    when people search for it.
                </p>
                <div id="images">
                    <ImageProduct
                        width="100%"
                        height="100%"
                        tabImagesDisabled={false}
                        idProduct={productData._id}
                        idContainer="0"
                        setTotalProducts={setTotalProducts}
                        urlImg={productData.picture[0]}
                    ></ImageProduct>

                    <div>
                        {/* <label htmlFor="defaultImage">
                            Set as default image
                        </label>
                        <label class="containerCheckbox">
                            <input
                                type="checkbox"
                                name="defaultImage"
                                id="defaultImage"
                            />
                            <span class="checkmarkCheckbox"></span>
                        </label> */}
                    </div>

                    <ImageProduct
                        width="100%"
                        height="100%"
                        tabImagesDisabled={false}
                        idProduct={productData._id}
                        idContainer="1"
                        setTotalProducts={setTotalProducts}
                        urlImg={productData.picture[1]}
                    ></ImageProduct>
                    <ImageProduct
                        width="100%"
                        height="100%"
                        tabImagesDisabled={false}
                        idProduct={productData._id}
                        idContainer="2"
                        setTotalProducts={setTotalProducts}
                        urlImg={productData.picture[2]}
                    ></ImageProduct>
                    <ImageProduct
                        width="100%"
                        height="100%"
                        tabImagesDisabled={false}
                        idProduct={productData._id}
                        idContainer="3"
                        setTotalProducts={setTotalProducts}
                        urlImg={productData.picture[3]}
                    ></ImageProduct>
                </div>
                <div id="divSubmit">
                    <Button
                        title="Save Images"
                        onClick={onHide}
                        type="button"
                        backgroundColor={theme.pallette.secondary.c800}
                        textColor="white"
                        disabled={false}
                        borderColor={theme.pallette.secondary.c800}
                    />
                </div>
            </div>
        </Container>
    )
}

export default TabImages
