import imgPlaceholder from '../../assets/images/aboutUsHero.png'

import { Container, SubContainer, ChildContainer } from './AboutUsHero.styles'

const AboutUsHero = () => {
    return (
        <Container>
            <ChildContainer gridColumn="1/2" gridRow="2/3">
                <div className="image-wrapper">
                    <img src={imgPlaceholder} alt="" />
                </div>
            </ChildContainer>
            <ChildContainer gridColumn="1/2" gridRow="1/2">
                <SubContainer>
                    <h1>
                        Behind every human achievement, there is a team.
                    </h1>
                    <p>
                        Here is the team, who worked closely with each other from designing to developing the qafa platform.
                    </p>
                </SubContainer>
            </ChildContainer>
        </Container>
    )
}

export default AboutUsHero
