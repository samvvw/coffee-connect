import CircleButton from '../../circleButton/circleButton'

import {
    HeaderContainer,
    HeaderMainContainer,
    HeaderChildContainer,
    HeaderOriginLocationAtitudContainer,
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
                >
                    <h4>{productName}</h4>
                    <p>{farmName}</p>
                </HeaderChildContainer>
                <HeaderChildContainer gridColumn="2/3" gridRow="1/2">
                    <HeaderOriginLocationAtitudContainer>
                        <HeaderChildContainer
                            gridColumn="1/2"
                            gridRow="1/2"
                            flexDirection="column"
                            borderRight="#898989"
                            alignItems="flex-end"
                        >
                            <p>Origin:</p>
                            <h5>{origin}</h5>
                        </HeaderChildContainer>
                        <HeaderChildContainer
                            gridColumn="2/3"
                            gridRow="1/2"
                            flexDirection="column"
                            borderRight="#898989"
                            alignItems="flex-end"
                        >
                            <p>Location:</p>
                            <h5>{location}</h5>
                        </HeaderChildContainer>
                        <HeaderChildContainer
                            gridColumn="3/4"
                            gridRow="1/2"
                            flexDirection="column"
                            borderRight="#898989"
                            alignItems="flex-end"
                        >
                            <p>Altitude</p>
                            <h5>{altitude}</h5>
                        </HeaderChildContainer>
                    </HeaderOriginLocationAtitudContainer>
                </HeaderChildContainer>
                <HeaderChildContainer
                    gridColumn="3/4"
                    gridRow="1/2"
                    alignItems="center"
                >
                    {/* <CircleButton IconName="FavoriteEmptyIcon" onClick="" />
                    <CircleButton IconName="ShareIcon" onClick="" /> */}
                </HeaderChildContainer>
            </HeaderMainContainer>
        </HeaderContainer>
    )
}

export default ProductDetailHeader
