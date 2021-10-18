import {
    FarmHeaderWrapper,
    FarmHeaderContent,
} from './farmDashboardHeader.styles'

export default function FarmDashboardHeader() {
    return (
        <FarmHeaderWrapper>
            <FarmHeaderContent>
                <div className="farm-products-link">My Products</div>
                <div className="farm-my-farm-link">My Farm</div>
                <div className="farm-settings-link">Settings</div>
            </FarmHeaderContent>
        </FarmHeaderWrapper>
    )
}
