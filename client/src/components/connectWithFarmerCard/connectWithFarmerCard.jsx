import Button from '../button/button'
// import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
// import BookmarkIcon from '@material-ui/icons/Bookmark'
import { ReactComponent as tagIconOn } from '../../assets/tagIconOn.svg'
import { ReactComponent as tagIconOff } from '../../assets/tagIconOff.svg'
import { useState } from 'react'

import {
    Container,
    TitleContainer,
    InfoContainer,
    InfoContainerChild,
    ButtonContainer,
} from './connectWithFarmerCard.styles'

const ConnectWithFarmerCard = ({ farmersName, urlImgProfile }) => {
    const clicked = tagIconOn
    // "<BookmarkIcon fontSize='medium' style={{ fill: 'black' }}/>"
    const unClicked = tagIconOff
    // "<BookmarkBorderIcon fontSize='medium' style={{ fill: 'black' }}/>"
    const [iconClicked, setIconClicked] = useState(true)

    const handleClick = () => {
        setIconClicked((prev) => (prev ? false : true))
    }

    return (
        <Container>
            <TitleContainer>
                <p>Connect with this farmer</p>
            </TitleContainer>
            <InfoContainer urlImgProfile={urlImgProfile}>
                <InfoContainerChild
                    gridColumn="1/2"
                    gridRow="1/2"
                    justifySelf="center"
                    alignSelf="center"
                >
                    <img alt="" src={urlImgProfile}></img>
                </InfoContainerChild>
                <InfoContainerChild
                    gridColumn="2/4"
                    gridRow="1/2"
                    alignSelf="center"
                >
                    <p>{farmersName}</p>
                </InfoContainerChild>
                <InfoContainerChild
                    gridColumn="4/5"
                    gridRow="1/2"
                    alignSelf="center"
                    justifySelf="center"
                >
                    <tagIconOff className="eseve" />
                    <ButtonContainer type="button" onClick={handleClick}>
                        {iconClicked ? <tagIconOn /> : <tagIconOff />}
                    </ButtonContainer>
                </InfoContainerChild>
                <InfoContainerChild gridColumn="1/5" gridRow="2/3">
                    <p>
                        Tellus sit ipsum sit iaculis tortor aliquet egestas.
                        Tempus hac fames sagittis or just say hello.
                    </p>
                </InfoContainerChild>
                <InfoContainerChild gridColumn="1/3" gridRow="3/4">
                    <Button
                        title="View profile"
                        onClick=""
                        type="button"
                        backgroundColor="Black"
                        textColor="white"
                        fontSize=".75rem"
                    ></Button>
                </InfoContainerChild>
                <InfoContainerChild
                    gridColumn="3/5"
                    gridRow="3/4"
                ></InfoContainerChild>
            </InfoContainer>
        </Container>
    )
}

export default ConnectWithFarmerCard
