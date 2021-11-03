import { Container } from './farmDashboardTabProductInformation.styles'
import Button from '../../../../button/button'
import { theme } from '../../../../../theme/theme'
const FarmDashboardTabProductInformation = () => {
    return (
        <Container>
            <form id="newProduct" method="POST">
                <div id="divName">
                    <label htmlFor="productName">
                        Product Name <span>*</span>
                    </label>
                    <input
                        type="text"
                        name="productName"
                        placeholder="e.g. Jamaican Blue Mountain"
                        required
                    />
                </div>
                <div id="divDescription">
                    <label htmlFor="productDescription">
                        Provide a description of this product
                    </label>
                    <label>
                        (How would you describe this product to your customers.
                        This will be displayed on the product details page)
                    </label>
                    <input
                        type="text"
                        name="productDescription"
                        placeholder="Description..."
                        required
                    />
                </div>
                <div id="divTaste">
                    <label htmlFor="productTaste">
                        Taste<span>*</span>
                    </label>
                    <label>Please select multiple choices if applicable.</label>
                    <div>
                        <div>
                            <label htmlFor="tasteSour">Sour</label>
                            <label class="containerCheckbox">
                                <input
                                    type="checkbox"
                                    name="taste"
                                    id="tasteSour"
                                />
                                <span class="checkmarkCheckbox"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="tasteBitter">Bitter</label>
                            <label class="containerCheckbox">
                                <input
                                    type="checkbox"
                                    name="taste"
                                    id="tasteBitter"
                                />
                                <span class="checkmarkCheckbox"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="tasteSweet">Sweet</label>
                            <label class="containerCheckbox">
                                <input
                                    type="checkbox"
                                    name="taste"
                                    id="tasteSweet"
                                />
                                <span class="checkmarkCheckbox"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="tasteSalt">Salt</label>
                            <label class="containerCheckbox">
                                <input
                                    type="checkbox"
                                    name="taste"
                                    id="tasteSalt"
                                />
                                <span class="checkmarkCheckbox"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div id="divAromas">
                    <label htmlFor="productAromas">
                        Aromas<span>*</span>
                    </label>
                    <label>Please select multiple choices if applicable.</label>
                    <div id="productAromas">
                        <div>
                            <label htmlFor="aroma1">Flowery</label>
                            <label class="containerCheckbox">
                                <input
                                    type="checkbox"
                                    name="aroma"
                                    id="aroma1"
                                />
                                <span class="checkmarkCheckbox"></span>
                            </label>
                        </div>

                        <div>
                            <label htmlFor="aroma2">Resinous</label>
                            <label class="containerCheckbox">
                                <input
                                    type="checkbox"
                                    name="aroma"
                                    id="aroma2"
                                />
                                <span class="checkmarkCheckbox"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="aroma3">Fruity</label>
                            <label class="containerCheckbox">
                                <input
                                    type="checkbox"
                                    name="aroma"
                                    id="aroma3"
                                />
                                <span class="checkmarkCheckbox"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="aroma4">Spicy</label>
                            <label class="containerCheckbox">
                                <input
                                    type="checkbox"
                                    name="aroma"
                                    id="aroma4"
                                />
                                <span class="checkmarkCheckbox"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="aroma5">Herby</label>
                            <label class="containerCheckbox">
                                <input
                                    type="checkbox"
                                    name="aroma"
                                    id="aroma5"
                                />
                                <span class="checkmarkCheckbox"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="aroma6">Carbony</label>
                            <label class="containerCheckbox">
                                <input
                                    type="checkbox"
                                    name="aroma"
                                    id="aroma6"
                                />
                                <span class="checkmarkCheckbox"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="aroma7">Nutty</label>
                            <label class="containerCheckbox">
                                <input
                                    type="checkbox"
                                    name="aroma"
                                    id="aroma7"
                                />
                                <span class="checkmarkCheckbox"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="aroma8">Chocolatey</label>
                            <label class="containerCheckbox">
                                <input
                                    type="checkbox"
                                    name="aroma"
                                    id="aroma8"
                                />
                                <span class="checkmarkCheckbox"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="aroma9">Caramelly</label>
                            <label class="containerCheckbox">
                                <input
                                    type="checkbox"
                                    name="aroma"
                                    id="aroma9"
                                />
                                <span class="checkmarkCheckbox"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div id="divRoastLevel">
                    <label htmlFor="productRoastLevel">
                        Roast Level<span>*</span>
                    </label>
                    <div id="productRoastLevel">
                        <div>
                            <label htmlFor="roastLevel1">Light</label>
                            <label class="containerRadio">
                                <input
                                    type="radio"
                                    name="roastLevel"
                                    id="roastLevel1"
                                />
                                <span class="checkmarkRadio"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="roastLevel2">Medium-Dark</label>

                            <label class="containerRadio">
                                <input
                                    type="radio"
                                    name="roastLevel"
                                    id="roastLevel2"
                                />
                                <span class="checkmarkRadio"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="roastLevel3">Medium</label>

                            <label class="containerRadio">
                                <input
                                    type="radio"
                                    name="roastLevel"
                                    id="roastLevel3"
                                />
                                <span class="checkmarkRadio"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="roastLevel4">Dark</label>

                            <label class="containerRadio">
                                <input
                                    type="radio"
                                    name="roastLevel"
                                    id="roastLevel4"
                                />
                                <span class="checkmarkRadio"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div id="divcoffeProcess">
                    <label htmlFor="productCoffeProcess">
                        Coffee Process<span>*</span>
                    </label>
                    <div id="productCoffeProcess">
                        <div>
                            <label htmlFor="coffeProcess1">Natural</label>

                            <label class="containerRadio">
                                <input
                                    type="radio"
                                    name="coffeProcess"
                                    id="coffeProcess1"
                                />
                                <span class="checkmarkRadio"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="coffeProcess2">Honey</label>

                            <label class="containerRadio">
                                <input
                                    type="radio"
                                    name="coffeProcess"
                                    id="coffeProcess2"
                                />
                                <span class="checkmarkRadio"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="coffeProcess3">
                                Pulped Natural
                            </label>

                            <label class="containerRadio">
                                <input
                                    type="radio"
                                    name="coffeProcess"
                                    id="coffeProcess3"
                                />
                                <span class="checkmarkRadio"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="coffeProcess4">Washed</label>

                            <label class="containerRadio">
                                <input
                                    type="radio"
                                    name="coffeProcess"
                                    id="coffeProcess4"
                                />
                                <span class="checkmarkRadio"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div id="divcoffeeVariety">
                    <label htmlFor="productCoffeVariety">
                        Coffee Variety<span>*</span>
                    </label>
                    <div id="productCoffeVariety">
                        <div>
                            <label htmlFor="variety1">Robusta</label>

                            <label class="containerRadio">
                                <input
                                    type="radio"
                                    name="variety"
                                    id="variety1"
                                />
                                <span class="checkmarkRadio"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="variety2">Arabica</label>

                            <label class="containerRadio">
                                <input
                                    type="radio"
                                    name="variety"
                                    id="variety2"
                                />
                                <span class="checkmarkRadio"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div id="divRoastDate">
                    <label htmlFor="productRoastDate">
                        Roast Date <span>*</span>
                    </label>
                    <input
                        type="date"
                        id="productRoastDate"
                        name="RoastDate"
                        placeholder="mm/dd/yyyy"
                        required
                    />
                </div>
                <div id="divcoffeeType">
                    <label htmlFor="productCoffeType">
                        Coffee Type<span>*</span>
                    </label>
                    <div id="productCoffeType">
                        <div>
                            <label htmlFor="Type1">Whole Bean</label>

                            <label class="containerRadio">
                                <input type="radio" name="Type" id="Type1" />
                                <span class="checkmarkRadio"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="Type2">Grounded</label>

                            <label class="containerRadio">
                                <input type="radio" name="Type" id="Type2" />
                                <span class="checkmarkRadio"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div id="divProductSize1">
                    <label htmlFor="productSize1">Product Size 1</label>
                    <div>
                        <div>
                            <label htmlFor="productSize1">
                                Size <span>*</span>
                            </label>
                            <input
                                id="productSize1"
                                type="text"
                                name="size1"
                                placeholder="0g"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="productPrice1">
                                Price <span>*</span>
                            </label>
                            <input
                                id="productPrice1"
                                type="number"
                                name="Price1"
                                placeholder="0.00"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div id="divProductSize2">
                    <label htmlFor="productSize2">Product Size 2</label>
                    <div>
                        <div>
                            <label htmlFor="productSize2">Size</label>
                            <input
                                id="productSize2"
                                type="text"
                                name="size2"
                                placeholder="0g"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="productPrice2">Price</label>
                            <input
                                id="productPrice2"
                                type="number"
                                name="Price2"
                                placeholder="0.00"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div id="divProductSize3">
                    <label htmlFor="productSize3">Product Size 3</label>
                    <div>
                        <div>
                            <label htmlFor="productSize3">Size</label>
                            <input
                                id="productSize3"
                                type="text"
                                name="size3"
                                placeholder="0g"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="productPrice3">Price</label>
                            <input
                                id="productPrice3"
                                type="number"
                                name="Price3"
                                placeholder="0.00"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div id="divSubmit">
                    <Button
                        type="submit"
                        backgroundColor={theme.pallette.secondary.c800}
                        textColor="white"
                        title=" Save Information"
                    />
                </div>
            </form>
        </Container>
    )
}

export default FarmDashboardTabProductInformation

// div>(div>label[htmlFor=roastLevel$]+input:radio[name=roasLevel])*4
