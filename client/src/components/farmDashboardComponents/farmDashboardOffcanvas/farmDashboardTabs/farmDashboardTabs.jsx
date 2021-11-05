import { useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import FarmDashboardTabProductInformation from './farmDashboardTabProductInformation/farmDashboardTabProductInformation'
import FarmDasboardTabImages from './farmDashboardTabImages/farmDashboardTabImages'

import { Container } from './farmDashboardTabs.styles'
import { theme } from '../../../../theme/theme'

const OffCanvasTabs = ({ onHide }) => {
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
                    <FarmDashboardTabProductInformation
                        setTabImagesDiabled={setTabImagesDiabled}
                        setSubmitImagesButtonBgc={setSubmitImagesButtonBgc}
                        onHide={onHide}
                        setMessageDisplay={setMessageDisplay}
                        setKeyTab={setKeyTab}
                        setIdProduct={setIdProduct}
                    />
                </Tab>
                <Tab eventKey="images" title="Images">
                    <FarmDasboardTabImages
                        tabImagesDisabled={tabImagesDisabled}
                        onHide={onHide}
                        submitImagesButtonBgc={submitImagesButtonBgc}
                        messageDisplay={messageDisplay}
                        idProduct={idProduct}
                    />
                </Tab>
            </Tabs>
        </Container>
    )
}

export default OffCanvasTabs
