import Button from '../button/button'
// import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
// import BookmarkIcon from '@material-ui/icons/Bookmark'
import { useState } from 'react'

import {
    Container,
    TitleContainer,
    InfoContainer,
    InfoContainerChild,
    ButtonContainer,
} from './connectWithFarmerCard.styles'

const ConnectWithFarmerCard = ({ farmersName, urlImgProfile }) => {
    const clicked =
        '<svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style="fill: black;"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></svg>'
    // "<BookmarkIcon fontSize='medium' style={{ fill: 'black' }}/>"
    const unClicked =
        '<svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style="fill: black;"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></svg>'
    // "<BookmarkBorderIcon fontSize='medium' style={{ fill: 'black' }}/>"
    const [iconClicked, setIconClicked] = useState(clicked)

    onclick = () => {
        if (iconClicked == clicked) setIconClicked(unClicked)
        else setIconClicked(clicked)
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
                    <ButtonContainer type="button" conclick={onclick}>
                        <span
                            dangerouslySetInnerHTML={{ __html: iconClicked }}
                        />
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
