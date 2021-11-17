import { Container } from './TabProductInformation.styles'
import Button from '../../../../button/button'
import { theme } from '../../../../../theme/theme'
import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import MessageModal from '../../../../messageModal/messageModal'
import { UserContext } from '../../../../../context/userContext/userContext'
import { useHistory } from 'react-router-dom'

const TabProductInformation = ({
    // setTabImagesDiabled,
    // setSubmitImagesButtonBgc,
    // setMessageDisplay,
    setKeyTab,
    // setIdProduct,
    setTotalProducts,
    productData,
}) => {
    const history = useHistory()
    const { user, isTokenExpired } = useContext(UserContext)

    useEffect(() => {
        if (isTokenExpired()) {
            history.replace('/sign-in')
        }
    })

    let farmID = user.farms[0]

    const [body, setBody] = useState({
        farmId: farmID,
        productName: productData.productName,
        description: productData.description,
        taste: productData.taste,
        aromas: productData.aromas,
        roastLevel: productData.roastLevel,
        coffeeProcess: productData.coffeeProcess,
        coffeeVariety: productData.coffeeVariety,
        roastDate: productData.roastDate,
        coffeeType: productData.coffeeType,
        sizePrice: productData.sizePrice,
    })

    /*variables to control messages in modal*/
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)

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

    //state tu disabled submit button
    // const [submitProductButtonDisabled, setSubmitProductButtonDisabled] =
    //     useState(false)
    //state de change submit color button
    // const [submitProductButtonBgc, setSubmitProductButtonBgc] = useState(
    //     theme.pallette.secondary.c800
    // )

    const [modalMessage, setModalMessage] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(`/api/farm/${body.farmId}/product/${productData._id}`, body)

        axios
            .put(`/api/farm/${body.farmId}/product/${productData._id}`, {
                ...body,
                token: localStorage.getItem('token'),
            })
            .then((res) => {
                // onHide()
                //save new idProduct
                // console.log('Qui toy', res.data.data)
                // setIdProduct(res.data.data._id)

                //Desable Submit Button
                // setSubmitProductButtonDisabled(true)
                // setSubmitProductButtonBgc(theme.pallette.disabledButton.light)

                //Change behavior of image tab submitt button
                // setTabImagesDiabled(false)
                //Change bgc of image tab submit button
                // setSubmitImagesButtonBgc(theme.pallette.secondary.c800)
                //Show message on Images Tab about product information has been saved
                // setMessageDisplay('block')
                //change selected tab to images tab
                setKeyTab('images')
                //change the number of totalproduct variable just to rerender list of products
                setTotalProducts((prev) => prev + 1)

                setModalMessage(
                    'Product updated, please update images if needed'
                )
                setShow(true)
            })
            .catch((error) => {
                console.log('ERROR!', error)
                setModalMessage(error)
                setShow(true)
            })
    }

    function convert(str) {
        var date = new Date(str),
            mnth = ('0' + (date.getMonth() + 1)).slice(-2),
            day = ('0' + date.getDate()).slice(-2)
        return [date.getFullYear(), mnth, day].join('-')
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
                        defaultValue={productData.productName}
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
                        defaultValue={productData.description}
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
                    <div className="gridChkRadioWrapper">
                        <div className="gridChkRadio">
                            <label className="containerCheckbox">
                                <input
                                    value="Sour"
                                    type="checkbox"
                                    name="taste"
                                    id="tasteSour"
                                    defaultChecked={productData.taste.some(
                                        (e) => e === 'Sour'
                                    )}
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
                                <span className="checkmarkCheckbox"></span>
                            </label>
                            <label htmlFor="tasteSour">Sour</label>
                        </div>
                        <div className="gridChkRadio">
                            <label className="containerCheckbox">
                                <input
                                    defaultChecked={productData.taste.some(
                                        (e) => e === 'Bitter'
                                    )}
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
                                <span className="checkmarkCheckbox"></span>
                            </label>
                            <label htmlFor="tasteBitter">Bitter</label>
                        </div>
                        <div className="gridChkRadio">
                            <label className="containerCheckbox">
                                <input
                                    defaultChecked={productData.taste.some(
                                        (e) => e === 'Sweet'
                                    )}
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
                                <span className="checkmarkCheckbox"></span>
                            </label>
                            <label htmlFor="tasteSweet">Sweet</label>
                        </div>
                        <div className="gridChkRadio">
                            <label className="containerCheckbox">
                                <input
                                    defaultChecked={productData.taste.some(
                                        (e) => e === 'Salty'
                                    )}
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
                                <span className="checkmarkCheckbox"></span>
                            </label>
                            <label htmlFor="tasteSalt">Salty</label>
                        </div>
                    </div>
                </div>
                <div id="divAromas">
                    <label htmlFor="productAromas">
                        Aromas<span>*</span>
                    </label>
                    <label className="labelDescription">
                        Please select multiple choices if applicable.
                    </label>
                    <div id="productAromas" className="gridChkRadioWrapper">
                        <div className="gridChkRadio">
                            <label className="containerCheckbox">
                                <input
                                    defaultChecked={productData.aromas.some(
                                        (e) => e === 'Flowery'
                                    )}
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
                                <span className="checkmarkCheckbox"></span>
                            </label>
                            <label htmlFor="aroma1">Flowery</label>
                        </div>

                        <div className="gridChkRadio">
                            <label className="containerCheckbox">
                                <input
                                    defaultChecked={productData.aromas.some(
                                        (e) => e === 'Resinous'
                                    )}
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
                                <span className="checkmarkCheckbox"></span>
                            </label>
                            <label htmlFor="aroma2">Resinous</label>
                        </div>
                        <div className="gridChkRadio">
                            <label className="containerCheckbox">
                                <input
                                    defaultChecked={productData.aromas.some(
                                        (e) => e === 'Fruity'
                                    )}
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
                                <span className="checkmarkCheckbox"></span>
                            </label>
                            <label htmlFor="aroma3">Fruity</label>
                        </div>
                        <div className="gridChkRadio">
                            <label className="containerCheckbox">
                                <input
                                    defaultChecked={productData.aromas.some(
                                        (e) => e === 'Spicy'
                                    )}
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
                                <span className="checkmarkCheckbox"></span>
                            </label>
                            <label htmlFor="aroma4">Spicy</label>
                        </div>
                        <div className="gridChkRadio">
                            <label className="containerCheckbox">
                                <input
                                    defaultChecked={productData.aromas.some(
                                        (e) => e === 'Herby'
                                    )}
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
                                <span className="checkmarkCheckbox"></span>
                            </label>
                            <label htmlFor="aroma5">Herby</label>
                        </div>
                        <div className="gridChkRadio">
                            <label className="containerCheckbox">
                                <input
                                    defaultChecked={productData.aromas.some(
                                        (e) => e === 'Carbony'
                                    )}
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
                                <span className="checkmarkCheckbox"></span>
                            </label>
                            <label htmlFor="aroma6">Carbony</label>
                        </div>
                        <div className="gridChkRadio">
                            <label className="containerCheckbox">
                                <input
                                    defaultChecked={productData.aromas.some(
                                        (e) => e === 'Nutty'
                                    )}
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
                                <span className="checkmarkCheckbox"></span>
                            </label>
                            <label htmlFor="aroma7">Nutty</label>
                        </div>
                        <div className="gridChkRadio">
                            <label className="containerCheckbox">
                                <input
                                    defaultChecked={productData.aromas.some(
                                        (e) => e === 'Chocolatey'
                                    )}
                                    value="Chocolatey"
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
                                <span className="checkmarkCheckbox"></span>
                            </label>
                            <label htmlFor="aroma8">Chocolatey</label>
                        </div>
                        {/* <div>
                            <label className="containerCheckbox">
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
                                <span className="checkmarkCheckbox"></span>
                            </label>
                            <label htmlFor="aroma9">Caramelly</label>
                        </div> */}
                    </div>
                </div>
                <div id="divRoastLevel">
                    <label htmlFor="productRoastLevel">
                        Roast Level<span>*</span>
                    </label>
                    <div id="productRoastLevel" className="gridChkRadioWrapper">
                        <div className="gridChkRadio">
                            <label className="containerRadio">
                                <input
                                    defaultChecked={
                                        productData.roastLevel === 'Light'
                                            ? true
                                            : false
                                    }
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
                                <span className="checkmarkRadio"></span>
                            </label>
                            <label htmlFor="roastLevel1">Light</label>
                        </div>
                        <div className="gridChkRadio">
                            <label className="containerRadio">
                                <input
                                    defaultChecked={
                                        productData.roastLevel ===
                                        'Medium - Dark'
                                            ? true
                                            : false
                                    }
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
                                <span className="checkmarkRadio"></span>
                            </label>
                            <label htmlFor="roastLevel2">Medium-Dark</label>
                        </div>
                        <div className="gridChkRadio">
                            <label className="containerRadio">
                                <input
                                    defaultChecked={
                                        productData.roastLevel === 'Medium'
                                            ? true
                                            : false
                                    }
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
                                <span className="checkmarkRadio"></span>
                            </label>
                            <label htmlFor="roastLevel3">Medium</label>
                        </div>
                        <div className="gridChkRadio">
                            <label className="containerRadio">
                                <input
                                    defaultChecked={
                                        productData.roastLevel === 'Dark'
                                            ? true
                                            : false
                                    }
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
                                <span className="checkmarkRadio"></span>
                            </label>
                            <label htmlFor="roastLevel4">Dark</label>
                        </div>
                    </div>
                </div>
                <div id="divcoffeProcess">
                    <label htmlFor="productCoffeProcess">
                        Coffee Process<span>*</span>
                    </label>
                    <div
                        id="productCoffeProcess"
                        className="gridChkRadioWrapper"
                    >
                        <div className="gridChkRadio">
                            <label className="containerRadio">
                                <input
                                    defaultChecked={
                                        productData.coffeeProcess === 'Natural'
                                            ? true
                                            : false
                                    }
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
                                <span className="checkmarkRadio"></span>
                            </label>
                            <label htmlFor="coffeProcess1">Natural</label>
                        </div>
                        <div className="gridChkRadio">
                            <label className="containerRadio">
                                <input
                                    defaultChecked={
                                        productData.coffeeProcess === 'Honey'
                                            ? true
                                            : false
                                    }
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
                                <span className="checkmarkRadio"></span>
                            </label>
                            <label htmlFor="coffeProcess2">Honey</label>
                        </div>
                        <div className="gridChkRadio">
                            <label className="containerRadio">
                                <input
                                    defaultChecked={
                                        productData.coffeeProcess ===
                                        'Pulped Natural'
                                            ? true
                                            : false
                                    }
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
                                <span className="checkmarkRadio"></span>
                            </label>
                            <label htmlFor="coffeProcess3">
                                Pulped Natural
                            </label>
                        </div>
                        <div className="gridChkRadio">
                            <label className="containerRadio">
                                <input
                                    defaultChecked={
                                        productData.coffeeProcess === 'Washed'
                                            ? true
                                            : false
                                    }
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
                                <span className="checkmarkRadio"></span>
                            </label>
                            <label htmlFor="coffeProcess4">Washed</label>
                        </div>
                    </div>
                </div>
                <div id="divcoffeeVariety">
                    <label htmlFor="productCoffeVariety">
                        Coffee Variety<span>*</span>
                    </label>
                    <div
                        id="productCoffeVariety"
                        className="gridChkRadioWrapper"
                    >
                        <div className="gridChkRadio">
                            <label className="containerRadio">
                                <input
                                    defaultChecked={
                                        productData.coffeeVariety === 'Robusta'
                                            ? true
                                            : false
                                    }
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
                                <span className="checkmarkRadio"></span>
                            </label>
                            <label htmlFor="variety1">Robusta</label>
                        </div>
                        <div className="gridChkRadio">
                            <label className="containerRadio">
                                <input
                                    defaultChecked={
                                        productData.coffeeVariety === 'Arabica'
                                            ? true
                                            : false
                                    }
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
                                <span className="checkmarkRadio"></span>
                            </label>
                            <label htmlFor="variety2">Arabica</label>
                        </div>
                    </div>
                </div>
                <div id="divRoastDate">
                    <label htmlFor="productRoastDate">
                        Roast Date <span>*</span>
                    </label>
                    <input
                        defaultValue={convert(productData.roastDate)} //"2021-01-01"
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
                    <div id="productCoffeType" className="gridChkRadioWrapper">
                        <div className="gridChkRadio">
                            <label className="containerRadio">
                                <input
                                    defaultChecked={
                                        productData.coffeeType === 'Whole Bean'
                                            ? true
                                            : false
                                    }
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
                                <span className="checkmarkRadio"></span>
                            </label>
                            <label htmlFor="Type1">Whole Bean</label>
                        </div>
                        <div className="gridChkRadio">
                            <label className="containerRadio">
                                <input
                                    defaultChecked={
                                        productData.coffeeType === 'Grounded'
                                            ? true
                                            : false
                                    }
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
                                <span className="checkmarkRadio"></span>
                            </label>
                            <label htmlFor="Type2">Grounded</label>
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
                                defaultValue={productData.sizePrice[0].size}
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
                                defaultValue={productData.sizePrice[0].price}
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
                                defaultValue={productData.sizePrice[1].size}
                                id="productSize2"
                                type="number"
                                name="size2"
                                placeholder="0"
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
                                defaultValue={productData.sizePrice[1].price}
                                id="productPrice2"
                                type="number"
                                name="price2"
                                placeholder="0.00"
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
                                defaultValue={productData.sizePrice[2].size}
                                id="productSize3"
                                type="number"
                                name="size3"
                                placeholder="0"
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
                                defaultValue={productData.sizePrice[2].price}
                                id="productPrice3"
                                type="number"
                                name="price3"
                                placeholder="0.00"
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
                        title="Save Changes"
                        disabled={false}
                        borderColor={theme.pallette.secondary.c800}
                    />
                </div>
            </form>
            <MessageModal
                handleClose={handleClose}
                show={show}
                title="Qafa"
                message={modalMessage}
            />
        </Container>
    )
}

export default TabProductInformation

// div>(div>label[htmlFor=roastLevel$]+input:radio[name=roasLevel])*4
