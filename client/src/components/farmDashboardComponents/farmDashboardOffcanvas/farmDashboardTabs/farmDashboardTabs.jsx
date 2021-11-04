import { useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import FarmDashboardTabProductInformation from './farmDashboardTabProductInformation/farmDashboardTabProductInformation'
import FarmDasboardTabImages from './farmDashboardTabImages/farmDashboardTabImages'

import { Container } from './farmDashboardTabs.styles'

const OffCanvasTabs = ({ onHide }) => {
    /*this state is to control tabs if needed*/
    const [key, setKey] = useState('productInformation')

    return (
        <Container>
            <Tabs
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-2"
                defaultActiveKey="productInformation"
                id="tab"
            >
                <Tab eventKey="productInformation" title="Product Information">
                    <FarmDashboardTabProductInformation onHide={onHide} />
                </Tab>
                <Tab eventKey="images" title="Images">
                    <FarmDasboardTabImages />
                </Tab>
            </Tabs>
        </Container>
    )
}

export default OffCanvasTabs
