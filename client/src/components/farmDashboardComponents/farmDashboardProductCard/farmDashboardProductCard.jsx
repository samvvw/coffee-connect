import { FarmDashboardProductCardWrapper } from './farmDashboardProductCard.styles'

export default function FarmDashboardProductCard({ product }) {
    return (
        <FarmDashboardProductCardWrapper>
            {product?.name}
        </FarmDashboardProductCardWrapper>
    )
}
