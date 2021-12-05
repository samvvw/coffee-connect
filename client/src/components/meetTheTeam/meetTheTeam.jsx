import Image from '../image/image'
import Button from '../button/button'
import { Link } from 'react-router-dom'
import { theme } from '../../theme/theme'
import {
    Container,
    Heading,
    Paragraph,
    BoldParagraph,
} from './meetTheTeam.styles'
import homeTeam from '../../assets/images/home-team.png'

const MeetTheTeam = ({ onClick, urlImg = homeTeam }) => {
    return (
        <Container>
            <Heading>Helping farmers transform</Heading>

            <Paragraph>
                We're driven by our mission to improve the quality of life for
                our farmers and believe connecting them directly with consumers
                who buy their products is the first step to achieving that goal.
            </Paragraph>

            <BoldParagraph>
                From the developers to the designers, get to know the team
                pioneering the modern way coffee farmers bring their specialty
                coffee beans to the world.
            </BoldParagraph>

            <Link to="/about-us">
                <Button
                    onClick={onClick}
                    title={'Meet the Team'}
                    backgroundColor={theme.pallette.primary[500]}
                    textColor={'#ffffff'}
                    border="none"
                    width="80vw"
                ></Button>
            </Link>

            <Image urlImg={urlImg} border="none" padding="1rem 0 0 0"></Image>
        </Container>
    )
}

export default MeetTheTeam
