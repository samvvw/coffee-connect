import imgPlaceholder from '../../assets/images/placeholder.png'

import { Container, SubContainer, ChildContainer } from './AboutUsHero.styles'

const AboutUsHero = () => {
    return (
        <Container>
            <ChildContainer gridColumn="1/2" gridRow="2/3">
                <img src={imgPlaceholder} alt="" />
            </ChildContainer>
            <ChildContainer gridColumn="1/2" gridRow="1/2">
                <SubContainer>
                    <h1>
                        Lorem ipsum dolor sit amet, onsectetrasas dipiscing
                        elit.
                    </h1>
                    <p>
                        Mollis bibendum leo, pulvinar blandit gravida nec.
                        Adipiscing sed pellentesque cras massa urna lectus leo,
                        ut. Eget dapibus eros, ullamcorper vestibulum vel congue
                        proin.
                    </p>
                </SubContainer>
            </ChildContainer>
        </Container>
    )
}

export default AboutUsHero
