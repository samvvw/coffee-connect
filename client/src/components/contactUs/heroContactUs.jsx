import imgPlaceholder from '../../assets/images/placeholder.png'

import { Container, SubContainer, ChildContainer } from './heroContactUs.styles'

const HeroContactUs = () => {
    return (
        <Container>
            <ChildContainer gridColumn="1/2" gridRow="1/2">
                <SubContainer>
                    <h1>We would like hearing from you.</h1>
                    <p>
                        Mollis bibendum leo, pulvinar blandit gravida nec.
                        Adipiscing sed pellentque cras massa urna lectus leo,
                        ut. Eget dapibus eros, ullamcorper vestibulum vel congue
                        proin.
                    </p>
                </SubContainer>
            </ChildContainer>
            <ChildContainer gridColumn="1/2" gridRow="2/3">
                <img src={imgPlaceholder} alt="" />
            </ChildContainer>
        </Container>
    )
}

export default HeroContactUs
