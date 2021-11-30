import AboutUsHero from '../../components/aboutUs/AboutUsHero'
import TeamMemberCard from '../../components/aboutUs/teamMemberCard'
import { Container, CardsContainer } from './aboutUs.styles'
import tayoDefault from '../../assets/images/aboutUs/tayo-default.png'
import tayoHover from '../../assets/images/aboutUs/tayo-hover.png'
import joseDefault from '../../assets/images/aboutUs/jose-default.png'
import joseHover from '../../assets/images/aboutUs/jose-hover.png'
import elnazDefault from '../../assets/images/aboutUs/elnaz-default.png'
import elnazHover from '../../assets/images/aboutUs/elnaz-hover.png'
import lilianDefault from '../../assets/images/aboutUs/lilian-default.png'
import lilianHover from '../../assets/images/aboutUs/lilian-hover.png'
import alejandraDefault from '../../assets/images/aboutUs/alejandra-default.png'
import alejandraHover from '../../assets/images/aboutUs/alejandra-hover.png'
import megumiDefault from '../../assets/images/aboutUs/megumi-default.png'
import megumiHover from '../../assets/images/aboutUs/megumi-hover.png'
import samuelDefault from '../../assets/images/aboutUs/samuel-default.png'
import samuelHover from '../../assets/images/aboutUs/samuel-hover.png'



const AboutUS = () => {
    const arrObjMemberData = [
        {
            defaultImg: tayoDefault,
            hoverImg: tayoHover,
            firstName: 'Tayo',
            lastName: 'Adetola',
            role: 'Digital Product Designer - UI/UX',
            bioShort:
                'A self-taught product designer with an architectural design technology background',
            bioLong:
                'A self-taught product designer with an architectural design technology background specializing in interface design and user experience for digital products since 2013. I care a lot about using design to create clean, meaningful experiences.',
            title: 'designer',
            linkedin: 'http://linkedin.com/in/tayoadetola',
            socialNetwork: 'http://socialNetwork',
        },
        {
            defaultImg: joseDefault,
            hoverImg: joseHover,
            firstName: 'Jose',
            lastName: 'Arteaga',
            role: 'Front-end Developer',
            bioShort:
                '7 years of experience in software development with Java.',
            bioLong:
                '',
            title: 'developer',
            linkedin: 'http://linkedin.com/in/jharteaga',
            socialNetwork: 'https://github.com/jharteaga',
        },
        {
            defaultImg: elnazDefault,
            hoverImg: elnazHover,
            firstName: 'Elnaz',
            lastName: 'Behravesh',
            role: 'Digital Product Designer - UI/UX',
            bioShort:
                'Over 10 years of experience as a Graphic Designer and Lead designer in an advertising Agency.',
            bioLong:
                '',
            title: 'designer',
            linkedin: 'http://linkedin.com/in/elnazb',
            socialNetwork: 'http://socialNetwork',
        },
        {
            defaultImg: lilianDefault,
            hoverImg: lilianHover,
            firstName: 'Lilian',
            lastName: 'Fajardo Talavera',
            role: 'Digital Product Designer - UI/UX',
            bioShort:
                '8 years of experience as a product designer and 2 years as a project manager developing VR and AR apps.',
            bioLong:
                '',
            title: 'designer',
            linkedin: 'http://linkedin.com/in/lilfajardo',
            socialNetwork: 'http://socialNetwork',
        },
        {
            defaultImg: alejandraDefault,
            hoverImg: alejandraHover,
            firstName: 'Alejandra',
            lastName: 'Hernandez Vega',
            role: 'Full-stack Developer',
            bioShort:
                '3 years of experience in software development with .Net and SQL server.',
            bioLong:
                '',
            title: 'developer',
            linkedin: 'http://linkedin.com/in/alerika',
            socialNetwork: 'https://github.com/alerika2018',
        },
        {
            defaultImg: megumiDefault,
            hoverImg: megumiHover,
            firstName: 'Megumi',
            lastName: 'Takashima',
            role: 'Full-stack Developer, PM',
            bioShort:
                'Experience of building application with MS Excel Macro/VBA.',
            bioLong:
                '',
            title: 'developer',
            linkedin: 'http://linkedin.com/in/megumi-takashima',
            socialNetwork: 'https://github.com/takam3g',
        },
        {
            defaultImg: samuelDefault,
            hoverImg: samuelHover,
            firstName: 'Samuel',
            lastName: 'Villegas Warren',
            role: 'Full-stack Developer',
            bioShort:
                'Self-taught web developer with experience of building app using React, Node.js,',
            bioLong:
                'Self-taught web developer with experience of building app using React, Node.js, SQL/NoSQL databases and cloud services. Background as business developer.',
            title: 'developer',
            linkedin: 'http://linkedin.com/in/samuelvw',
            socialNetwork: 'https://github.com/samvvw',
        },
    ]

    return (
        <Container>
            <AboutUsHero />

            <h2>Meet Us</h2>

            <CardsContainer>
                <TeamMemberCard
                    imgUrl={tayoDefault}
                    arrObjMemberData={arrObjMemberData[0]}
                />
                <TeamMemberCard
                    imgUrl={joseDefault}
                    arrObjMemberData={arrObjMemberData[1]}
                />
                <TeamMemberCard
                    imgUrl={elnazDefault}
                    arrObjMemberData={arrObjMemberData[2]}
                />
                <TeamMemberCard
                    imgUrl={lilianDefault}
                    arrObjMemberData={arrObjMemberData[3]}
                />
                <TeamMemberCard
                    imgUrl={alejandraDefault}
                    arrObjMemberData={arrObjMemberData[4]}
                />
                <TeamMemberCard
                    imgUrl={megumiDefault}
                    arrObjMemberData={arrObjMemberData[5]}
                />
                <TeamMemberCard
                    imgUrl={samuelDefault}
                    arrObjMemberData={arrObjMemberData[6]}
                />
            </CardsContainer>
        </Container>
    )
}

export default AboutUS
