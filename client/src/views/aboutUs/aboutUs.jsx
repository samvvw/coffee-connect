import AboutUsHero from '../../components/aboutUs/AboutUsHero'
import TeamMemberCard from '../../components/aboutUs/teamMemberCard'
import imgPlaceholder from '../../assets/images/placeholder.png'

import { Container, CardsContainer } from './aboutUs.styles'

const AboutUS = () => {
    const arrObjMemberData = [
        {
            name: 'Tayo Adetola',
            role: 'Digital Product Designer',
            bioShort:
                'Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ',
            bioLong:
                'Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ',
            title: 'designer',
            linkedin: 'http://linkedin.com',
            socialNetwork: 'http://socialNetwork',
        },
        {
            name: 'Jose Arteaga',
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
            name: 'Elnaz Behravesh',
            role: 'Product Designer UX/UI',
            bioShort:
                'Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ',
            bioLong:
                'Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ',
            title: 'designer',
            linkedin: 'http://linkedin.com',
            socialNetwork: 'http://socialNetwork',
        },
        {
            name: 'Lilian Fajardo Talavera',
            role: 'Product & UX designer',
            bioShort:
                'Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ',
            bioLong:
                'Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ',
            title: 'designer',
            linkedin: 'http://linkedin.com',
            socialNetwork: 'http://socialNetwork',
        },
        {
            name: 'Alejandra Hernandez Vega',
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
            name: 'Megumi Takashima',
            role: 'Front-end Developer, Project Manager',
            bioShort:
                'Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ',
            bioLong:
                'Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, Mollis bibendum leo, pulvinar blandit gravida nec. Adipiscing sed pellentesque cras massa urna lectus leo, ',
            title: 'developer',
            linkedin: 'http://linkedin.com',
            socialNetwork: 'http://socialNetwork',
        },
        {
            name: 'Samuel Villegas',
            role: 'Front-end Developer',
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

            <h2>About Us</h2>

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
