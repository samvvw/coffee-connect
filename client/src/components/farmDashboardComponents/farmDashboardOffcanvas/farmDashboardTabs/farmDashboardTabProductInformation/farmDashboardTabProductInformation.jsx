import { Container } from './farmDashboardTabProductInformation.styles'
import Button from '../../../../button/button'
import { theme } from '../../../../../theme/theme'
import { useState } from 'react'
import axios from 'axios'
const FarmDashboardTabProductInformation = ({ onHide }) => {
    const [body, setBody] = useState({
        farmId: '61834b3e802aa4a8e981ebdc',
        productName: '',
        description: '',
        taste: [],
        aromas: [],
        roastLevel: '',
        coffeeProcess: '',
        coffeeVariety: '',
        roastDate: '',
        coffeeType: '',
        sizePrice: [
            { size: 0, price: 0 },
            { size: 0, price: 0 },
            { size: 0, price: 0 },
        ],
    })

    const validateOption = (prev, current) => {
        if (current.checked) {
            return [...prev, current.value]
        } else {
            const index = prev.indexOf(current.value)
            return prev.splice(index, 1)
        }
    }

    const getSizePrice = (prev, current, index) => {
        prev[index] = { size: +current.size, price: +current.price }
        return prev
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        // console.log(body)

        axios
            .post('/api/farm/61834b3e802aa4a8e981ebdc/product', {
                ...body,
                token: localStorage.getItem('token'),
            })
            .then((res) => {
                // console.log('Yey!', res)
                onHide()
            })
            .catch((error) => console.log(error))
    }

    return (
        <Container>
            <form
                id="newProduct"
                method="POST"
                //action="/api/farm/61834b3e802aa4a8e981ebdc/product"
                onSubmit={(event) => handleSubmit(event)}
            >
                <div id="divName">
                    <label htmlFor="productName">
                        Product Name <span>*</span>
                    </label>
                    <input
                        type="text"
                        name="productName"
                        placeholder="e.g. Jamaican Blue Mountain"
                        required
                        onChange={(event) => {
                            return setBody((prevBody) => ({
                                ...prevBody,
                                productName: event.target.value,
                            }))
                        }}
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
                        name="description"
                        placeholder="Description..."
                        required
                        onChange={(event) => {
                            return setBody((prevBody) => ({
                                ...prevBody,
                                description: event.target.value,
                            }))
                        }}
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
                                    value="Sour"
                                    type="checkbox"
                                    name="taste"
                                    id="tasteSour"
                                    onChange={(event) => {
                                        return setBody((prevBody) => ({
                                            ...prevBody,
                                            taste: [
                                                ...validateOption(
                                                    prevBody.taste,
                                                    event.target
                                                ),
                                            ],
                                        }))
                                    }}
                                />
                                <span class="checkmarkCheckbox"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="tasteBitter">Bitter</label>
                            <label class="containerCheckbox">
                                <input
                                    value="Bitter"
                                    type="checkbox"
                                    name="taste"
                                    id="tasteBitter"
                                    onChange={(event) => {
                                        return setBody((prevBody) => ({
                                            ...prevBody,
                                            taste: [
                                                ...validateOption(
                                                    prevBody.taste,
                                                    event.target
                                                ),
                                            ],
                                        }))
                                    }}
                                />
                                <span class="checkmarkCheckbox"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="tasteSweet">Sweet</label>
                            <label class="containerCheckbox">
                                <input
                                    value="Sweet"
                                    type="checkbox"
                                    name="taste"
                                    id="tasteSweet"
                                    onChange={(event) => {
                                        return setBody((prevBody) => ({
                                            ...prevBody,
                                            taste: [
                                                ...validateOption(
                                                    prevBody.taste,
                                                    event.target
                                                ),
                                            ],
                                        }))
                                    }}
                                />
                                <span class="checkmarkCheckbox"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="tasteSalt">Salty</label>
                            <label class="containerCheckbox">
                                <input
                                    value="Salty"
                                    type="checkbox"
                                    name="taste"
                                    id="tasteSalt"
                                    onChange={(event) => {
                                        return setBody((prevBody) => ({
                                            ...prevBody,
                                            taste: [
                                                ...validateOption(
                                                    prevBody.taste,
                                                    event.target
                                                ),
                                            ],
                                        }))
                                    }}
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
                                    value="Flowery"
                                    type="checkbox"
                                    name="aromas"
                                    id="aroma1"
                                    onChange={(event) => {
                                        return setBody((prevBody) => ({
                                            ...prevBody,
                                            aromas: [
                                                ...validateOption(
                                                    prevBody.aromas,
                                                    event.target
                                                ),
                                            ],
                                        }))
                                    }}
                                />
                                <span class="checkmarkCheckbox"></span>
                            </label>
                        </div>

                        <div>
                            <label htmlFor="aroma2">Resinous</label>
                            <label class="containerCheckbox">
                                <input
                                    value="Resinous"
                                    type="checkbox"
                                    name="aromas"
                                    id="aroma2"
                                    onChange={(event) => {
                                        return setBody((prevBody) => ({
                                            ...prevBody,
                                            aromas: [
                                                ...validateOption(
                                                    prevBody.aromas,
                                                    event.target
                                                ),
                                            ],
                                        }))
                                    }}
                                />
                                <span class="checkmarkCheckbox"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="aroma3">Fruity</label>
                            <label class="containerCheckbox">
                                <input
                                    value="Fruity"
                                    type="checkbox"
                                    name="aromas"
                                    id="aroma3"
                                    onChange={(event) => {
                                        return setBody((prevBody) => ({
                                            ...prevBody,
                                            aromas: [
                                                ...validateOption(
                                                    prevBody.aromas,
                                                    event.target
                                                ),
                                            ],
                                        }))
                                    }}
                                />
                                <span class="checkmarkCheckbox"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="aroma4">Spicy</label>
                            <label class="containerCheckbox">
                                <input
                                    value="Spicy"
                                    type="checkbox"
                                    name="aromas"
                                    id="aroma4"
                                    onChange={(event) => {
                                        return setBody((prevBody) => ({
                                            ...prevBody,
                                            aromas: [
                                                ...validateOption(
                                                    prevBody.aromas,
                                                    event.target
                                                ),
                                            ],
                                        }))
                                    }}
                                />
                                <span class="checkmarkCheckbox"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="aroma5">Herby</label>
                            <label class="containerCheckbox">
                                <input
                                    value="Herby"
                                    type="checkbox"
                                    name="aromas"
                                    id="aroma5"
                                    onChange={(event) => {
                                        return setBody((prevBody) => ({
                                            ...prevBody,
                                            aromas: [
                                                ...validateOption(
                                                    prevBody.aromas,
                                                    event.target
                                                ),
                                            ],
                                        }))
                                    }}
                                />
                                <span class="checkmarkCheckbox"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="aroma6">Carbony</label>
                            <label class="containerCheckbox">
                                <input
                                    value="Carbony"
                                    type="checkbox"
                                    name="aromas"
                                    id="aroma6"
                                    onChange={(event) => {
                                        return setBody((prevBody) => ({
                                            ...prevBody,
                                            aromas: [
                                                ...validateOption(
                                                    prevBody.aromas,
                                                    event.target
                                                ),
                                            ],
                                        }))
                                    }}
                                />
                                <span class="checkmarkCheckbox"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="aroma7">Nutty</label>
                            <label class="containerCheckbox">
                                <input
                                    value="Nutty"
                                    type="checkbox"
                                    name="aromas"
                                    id="aroma7"
                                    onChange={(event) => {
                                        return setBody((prevBody) => ({
                                            ...prevBody,
                                            aromas: [
                                                ...validateOption(
                                                    prevBody.aromas,
                                                    event.target
                                                ),
                                            ],
                                        }))
                                    }}
                                />
                                <span class="checkmarkCheckbox"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="aroma8">Chocolatey</label>
                            <label class="containerCheckbox">
                                <input
                                    value="Chocolatery"
                                    type="checkbox"
                                    name="aromas"
                                    id="aroma8"
                                    onChange={(event) => {
                                        return setBody((prevBody) => ({
                                            ...prevBody,
                                            aromas: [
                                                ...validateOption(
                                                    prevBody.aromas,
                                                    event.target
                                                ),
                                            ],
                                        }))
                                    }}
                                />
                                <span class="checkmarkCheckbox"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="aroma9">Caramelly</label>
                            <label class="containerCheckbox">
                                <input
                                    value="Caramelly"
                                    type="checkbox"
                                    name="aromas"
                                    id="aroma9"
                                    onChange={(event) => {
                                        return setBody((prevBody) => ({
                                            ...prevBody,
                                            aromas: [
                                                ...validateOption(
                                                    prevBody.aromas,
                                                    event.target
                                                ),
                                            ],
                                        }))
                                    }}
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
                                    value="Light"
                                    type="radio"
                                    name="roastLevel"
                                    id="roastLevel1"
                                    onChange={(event) => {
                                        return setBody((prevBody) => ({
                                            ...prevBody,
                                            roastLevel: event.target.value,
                                        }))
                                    }}
                                />
                                <span class="checkmarkRadio"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="roastLevel2">Medium-Dark</label>

                            <label class="containerRadio">
                                <input
                                    value="Medium - Dark"
                                    type="radio"
                                    name="roastLevel"
                                    id="roastLevel2"
                                    onChange={(event) => {
                                        return setBody((prevBody) => ({
                                            ...prevBody,
                                            roastLevel: event.target.value,
                                        }))
                                    }}
                                />
                                <span class="checkmarkRadio"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="roastLevel3">Medium</label>

                            <label class="containerRadio">
                                <input
                                    value="Medium"
                                    type="radio"
                                    name="roastLevel"
                                    id="roastLevel3"
                                    onChange={(event) => {
                                        return setBody((prevBody) => ({
                                            ...prevBody,
                                            roastLevel: event.target.value,
                                        }))
                                    }}
                                />
                                <span class="checkmarkRadio"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="roastLevel4">Dark</label>

                            <label class="containerRadio">
                                <input
                                    value="Dark"
                                    type="radio"
                                    name="roastLevel"
                                    id="roastLevel4"
                                    onChange={(event) => {
                                        return setBody((prevBody) => ({
                                            ...prevBody,
                                            roastLevel: event.target.value,
                                        }))
                                    }}
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
                                    value="Natural"
                                    type="radio"
                                    name="coffeeProcess"
                                    id="coffeProcess1"
                                    onChange={(event) => {
                                        return setBody((prevBody) => ({
                                            ...prevBody,
                                            coffeeProcess: event.target.value,
                                        }))
                                    }}
                                />
                                <span class="checkmarkRadio"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="coffeProcess2">Honey</label>

                            <label class="containerRadio">
                                <input
                                    value="Honey"
                                    type="radio"
                                    name="coffeeProcess"
                                    id="coffeProcess2"
                                    onChange={(event) => {
                                        return setBody((prevBody) => ({
                                            ...prevBody,
                                            coffeeProcess: event.target.value,
                                        }))
                                    }}
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
                                    value="Pulped Natural"
                                    type="radio"
                                    name="coffeeProcess"
                                    id="coffeProcess3"
                                    onChange={(event) => {
                                        return setBody((prevBody) => ({
                                            ...prevBody,
                                            coffeeProcess: event.target.value,
                                        }))
                                    }}
                                />
                                <span class="checkmarkRadio"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="coffeProcess4">Washed</label>

                            <label class="containerRadio">
                                <input
                                    value="Washed"
                                    type="radio"
                                    name="coffeeProcess"
                                    id="coffeProcess4"
                                    onChange={(event) => {
                                        return setBody((prevBody) => ({
                                            ...prevBody,
                                            coffeeProcess: event.target.value,
                                        }))
                                    }}
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
                                    value="Robusta"
                                    type="radio"
                                    name="coffeeVariety"
                                    id="variety1"
                                    onChange={(event) => {
                                        return setBody((prevBody) => ({
                                            ...prevBody,
                                            coffeeVariety: event.target.value,
                                        }))
                                    }}
                                />
                                <span class="checkmarkRadio"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="variety2">Arabica</label>

                            <label class="containerRadio">
                                <input
                                    value="Arabica"
                                    type="radio"
                                    name="coffeeVariety"
                                    id="variety2"
                                    onChange={(event) => {
                                        return setBody((prevBody) => ({
                                            ...prevBody,
                                            coffeeVariety: event.target.value,
                                        }))
                                    }}
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
                        name="roastDate"
                        placeholder="mm/dd/yyyy"
                        required
                        onChange={(event) => {
                            return setBody((prevBody) => ({
                                ...prevBody,
                                roastDate: event.target.value,
                            }))
                        }}
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
                                <input
                                    value="Whole Bean"
                                    type="radio"
                                    name="coffeeType"
                                    id="Type1"
                                    onChange={(event) => {
                                        return setBody((prevBody) => ({
                                            ...prevBody,
                                            coffeeType: event.target.value,
                                        }))
                                    }}
                                />
                                <span class="checkmarkRadio"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="Type2">Grounded</label>

                            <label class="containerRadio">
                                <input
                                    value="Grounded"
                                    type="radio"
                                    name="coffeeType"
                                    id="Type2"
                                    onChange={(event) => {
                                        return setBody((prevBody) => ({
                                            ...prevBody,
                                            coffeeType: event.target.value,
                                        }))
                                    }}
                                />
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
                                type="number"
                                name="size1"
                                placeholder="0"
                                required
                                onChange={(event) => {
                                    return setBody((prevBody) => ({
                                        ...prevBody,
                                        sizePrice: [
                                            ...getSizePrice(
                                                prevBody.sizePrice,
                                                {
                                                    size: event.target.value,
                                                    price: prevBody.sizePrice[0]
                                                        .price,
                                                },
                                                0
                                            ),
                                        ],
                                    }))
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="productPrice1">
                                Price <span>*</span>
                            </label>
                            <input
                                id="productPrice1"
                                type="number"
                                name="price1"
                                placeholder="0.00"
                                required
                                onChange={(event) => {
                                    return setBody((prevBody) => ({
                                        ...prevBody,
                                        sizePrice: [
                                            ...getSizePrice(
                                                prevBody.sizePrice,
                                                {
                                                    price: event.target.value,
                                                    size: prevBody.sizePrice[0]
                                                        .size,
                                                },
                                                0
                                            ),
                                        ],
                                    }))
                                }}
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
                                type="number"
                                name="size2"
                                placeholder="0"
                                required
                                onChange={(event) => {
                                    return setBody((prevBody) => ({
                                        ...prevBody,
                                        sizePrice: [
                                            ...getSizePrice(
                                                prevBody.sizePrice,
                                                {
                                                    size: event.target.value,
                                                    price: prevBody.sizePrice[1]
                                                        .price,
                                                },
                                                1
                                            ),
                                        ],
                                    }))
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="productPrice2">Price</label>
                            <input
                                id="productPrice2"
                                type="number"
                                name="price2"
                                placeholder="0.00"
                                required
                                onChange={(event) => {
                                    return setBody((prevBody) => ({
                                        ...prevBody,
                                        sizePrice: [
                                            ...getSizePrice(
                                                prevBody.sizePrice,
                                                {
                                                    price: event.target.value,
                                                    size: prevBody.sizePrice[1]
                                                        .size,
                                                },
                                                1
                                            ),
                                        ],
                                    }))
                                }}
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
                                type="number"
                                name="size3"
                                placeholder="0"
                                required
                                onChange={(event) => {
                                    return setBody((prevBody) => ({
                                        ...prevBody,
                                        sizePrice: [
                                            ...getSizePrice(
                                                prevBody.sizePrice,
                                                {
                                                    size: event.target.value,
                                                    price: prevBody.sizePrice[2]
                                                        .price,
                                                },
                                                2
                                            ),
                                        ],
                                    }))
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="productPrice3">Price</label>
                            <input
                                id="productPrice3"
                                type="number"
                                name="price3"
                                placeholder="0.00"
                                required
                                onChange={(event) => {
                                    return setBody((prevBody) => ({
                                        ...prevBody,
                                        sizePrice: [
                                            ...getSizePrice(
                                                prevBody.sizePrice,
                                                {
                                                    price: event.target.value,
                                                    size: prevBody.sizePrice[2]
                                                        .size,
                                                },
                                                2
                                            ),
                                        ],
                                    }))
                                }}
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