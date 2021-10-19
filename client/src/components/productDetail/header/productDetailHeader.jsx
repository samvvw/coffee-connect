import CircleButton from '../../circleButton/circleButton'

import {
    HeaderContainer,
    HeaderMainContainer,
    HeaderChildContainer,
    HeaderOriginLocationAtitudContainer,
    HeaderChildContainerExtended,
} from './productDetailHeader.styles'

const ProductDetailHeader = ({
    productName,
    farmName,
    origin,
    location,
    altitude,
}) => {
    return (
        <HeaderContainer>
            <HeaderMainContainer>
                <HeaderChildContainer
                    gridColumn="1/2"
                    gridRow="1/2"
                    flexDirection="column"
                    order="2"
                >
                    <h4>{productName}</h4>
                    <p>{farmName}</p>
                </HeaderChildContainer>
                <HeaderChildContainer gridColumn="2/3" gridRow="1/2" order="3">
                    <HeaderOriginLocationAtitudContainer>
                        <HeaderChildContainerExtended
                            gridColumn="1/2"
                            gridRow="1/2"
                            flexDirection="column"
                            borderRight="#898989"
                            alignItems="flex-end"
                        >
                            <p>Origin:</p>
                            <h5>{origin}</h5>
                        </HeaderChildContainerExtended>
                        <HeaderChildContainerExtended
                            gridColumn="2/3"
                            gridRow="1/2"
                            flexDirection="column"
                            borderRight="#898989"
                            alignItems="flex-end"
                        >
                            <p>Location:</p>
                            <h5>{location}</h5>
                        </HeaderChildContainerExtended>
                        <HeaderChildContainerExtended
                            gridColumn="3/4"
                            gridRow="1/2"
                            flexDirection="column"
                            borderRight="#898989"
                            alignItems="flex-end"
                        >
                            <p>Altitude</p>
                            <h5>{altitude}</h5>
                        </HeaderChildContainerExtended>
                    </HeaderOriginLocationAtitudContainer>
                </HeaderChildContainer>
                <HeaderChildContainer
                    gridColumn="3/4"
                    gridRow="1/2"
                    alignItems="center"
                    gap="1rem"
                    order="1"
                >
                    <CircleButton IconName="FavoriteEmpty" onClick="" />
                    <CircleButton IconName="Share" onClick="" />
                </HeaderChildContainer>
            </HeaderMainContainer>
        </HeaderContainer>
    )
}

export default ProductDetailHeader
