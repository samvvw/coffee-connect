import AboutUsHero from '../../components/aboutUs/AboutUsHero'
import TeamMemberCard from '../../components/aboutUs/teamMemberCard'
import imgPlaceholder from '../../assets/images/placeholder.png'
import imgPlaceholder2 from '../../assets/images/placeholder2.png'

import { Container, CardsContainer } from './aboutUs.styles'

const AboutUS = () => {
    const arrObjMemberData = [
        {
            defaultImg: imgPlaceholder,
            hoverImg: imgPlaceholder2,
            firstName: 'Tayo',
            lastName: 'Adetola',
            role: 'Digital Product Designer - UI/UX',
            bioShort:
                'Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ',
            bioLong:
                'Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ',
            title: 'designer',
            linkedin: 'http://linkedin.com',
            socialNetwork: 'http://socialNetwork',
        },
        {
            defaultImg: imgPlaceholder,
            hoverImg: imgPlaceholder2,
            firstName: 'Jose',
            lastName: 'Arteaga',
            role: 'Front-end Developer',
            bioShort:
                'Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ',
            bioLong:
                'Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ',
            title: 'developer',
            linkedin: 'http://linkedin.com',
            socialNetwork: 'http://socialNetwork',
        },
        {
            defaultImg: imgPlaceholder,
            hoverImg: imgPlaceholder2,
            firstName: 'Elnaz',
            lastName: 'Behravesh',
            role: 'Digital Product Designer - UI/UX',
            bioShort:
                'Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ',
            bioLong:
                'Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ',
            title: 'designer',
            linkedin: 'http://linkedin.com',
            socialNetwork: 'http://socialNetwork',
        },
        {
            defaultImg: imgPlaceholder,
            hoverImg: imgPlaceholder2,
            firstName: 'Lilian',
            lastName: 'Fajardo Talavera',
            role: 'Digital Product Designer - UI/UX',
            bioShort:
                'Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ',
            bioLong:
                'Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ',
            title: 'designer',
            linkedin: 'http://linkedin.com',
            socialNetwork: 'http://socialNetwork',
        },
        {
            defaultImg: imgPlaceholder,
            hoverImg: imgPlaceholder2,
            firstName: 'Alejandra',
            lastName: 'Hernandez Vega',
            role: 'Full-stack Developer',
            bioShort:
                'Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ',
            bioLong:
                'Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ',
            title: 'developer',
            linkedin: 'http://linkedin.com',
            socialNetwork: 'http://socialNetwork',
        },
        {
            defaultImg: imgPlaceholder,
            hoverImg: imgPlaceholder2,
            firstName: 'Megumi',
            lastName: 'Takashima',
            role: 'Full-stack Developer, Project Manager',
            bioShort:
                'Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ',
            bioLong:
                'Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ',
            title: 'developer',
            linkedin: 'http://linkedin.com',
            socialNetwork: 'http://socialNetwork',
        },
        {
            defaultImg: imgPlaceholder,
            hoverImg: imgPlaceholder2,
            firstName: 'Samuel',
            lastName: 'Villegas Warren',
            role: 'Full-stack Developer',
            bioShort:
                'Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ',
            bioLong:
                'Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ',
            title: 'developer',
            linkedin: 'http://linkedin.com',
            socialNetwork: 'http://socialNetwork',
        },
    ]

    return (
        <Container>
            <AboutUsHero />

            <h2>Meet Us</h2>

            <CardsContainer>
                <TeamMemberCard
                    imgUrl={imgPlaceholder}
                    arrObjMemberData={arrObjMemberData[0]}
                />
                <TeamMemberCard
                    imgUrl={imgPlaceholder}
                    arrObjMemberData={arrObjMemberData[1]}
                />
                <TeamMemberCard
                    imgUrl={imgPlaceholder}
                    arrObjMemberData={arrObjMemberData[2]}
                />
                <TeamMemberCard
                    imgUrl={imgPlaceholder}
                    arrObjMemberData={arrObjMemberData[3]}
                />
                <TeamMemberCard
                    imgUrl={imgPlaceholder}
                    arrObjMemberData={arrObjMemberData[4]}
                />
                <TeamMemberCard
                    imgUrl={imgPlaceholder}
                    arrObjMemberData={arrObjMemberData[5]}
                />
                <TeamMemberCard
                    imgUrl={imgPlaceholder}
                    arrObjMemberData={arrObjMemberData[6]}
                />
            </CardsContainer>
        </Container>
    )
}

export default AboutUS
