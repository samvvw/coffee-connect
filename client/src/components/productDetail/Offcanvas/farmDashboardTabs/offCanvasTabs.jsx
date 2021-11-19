import { useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import TabProductInformation from './TabProductInformation/ProductInformation'
import TabImages from './TabImages/TabImages'

import { Container } from './offCanvasTabs.styles'
import { theme } from '../../../../theme/theme'

const OffCanvasTabs = ({ onHide, setTotalProducts, productData }) => {
    /*this state is to control tabs if needed*/
    const [keyTab, setKeyTab] = useState('productInformation')

    //state to disable submit button for images tab
    const [tabImagesDisabled, setTabImagesDiabled] = useState(true)
    const [submitImagesButtonBgc, setSubmitImagesButtonBgc] = useState(
        theme.pallette.disabledButton.light
    )

    //state to show message after product was saved.
    const [messageDisplay, setMessageDisplay] = useState('none')

    //state to keep idProduct when a new product is saved
    const [idProduct, setIdProduct] = useState()

    return (
        <Container>
            <Tabs
                activeKey={keyTab}
                onSelect={(k) => setKeyTab(k)}
                className="mb-2"
                defaultActiveKey="productInformation"
                id="tab"
            >
                <Tab eventKey="productInformation" title="Product Information">
                    <TabProductInformation
                        setTabImagesDiabled={setTabImagesDiabled}
                        setSubmitImagesButtonBgc={setSubmitImagesButtonBgc}
                        onHide={onHide}
                        setMessageDisplay={setMessageDisplay}
                        setKeyTab={setKeyTab}
                        setIdProduct={setIdProduct}
                        setTotalProducts={setTotalProducts}
                        productData={productData}
                    />
                </Tab>
                <Tab eventKey="images" title="Images">
                    <TabImages
                        tabImagesDisabled={tabImagesDisabled}
                        onHide={onHide}
                        submitImagesButtonBgc={submitImagesButtonBgc}
                        messageDisplay={messageDisplay}
                        idProduct={idProduct}
                        setTotalProducts={setTotalProducts}
                        productData={productData}
                    />
                </Tab>
            </Tabs>
        </Container>
    )
}

export default OffCanvasTabs
