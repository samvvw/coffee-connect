import { Container, IconsContainer } from './teamMemberCard.styles'

import behance from '../../assets/images/icons/behance_icon.png'
import git from '../../assets/images/icons/git_icon.png'
import linkedin from '../../assets/images/icons/linkedin_icon.png'

import { useState, useCallback } from 'react'

const TeamMemberCard = ({ imgUrl, arrObjMemberData }) => {
    const title = arrObjMemberData.title
    let icon

    if (title === 'designer') icon = behance
    else icon = git

    function useToggle(initialValue = false) {
        const [value, setValue] = useState(initialValue)
        const toggle = useCallback(() => {
            setValue((v) => !v)
        }, [])
        return [value, toggle]
    }

    const [isbioShort, toggleBio] = useToggle()
    return (
        <Container>
            <img src={imgUrl} alt={arrObjMemberData.name} />
            <h3>{arrObjMemberData.name}</h3>
            <h4>{arrObjMemberData.role}</h4>

            <h5>
                {isbioShort
                    ? arrObjMemberData.bioLong
                    : arrObjMemberData.bioShort}
                <span>
                    <button type="button" onClick={toggleBio}>
                        {isbioShort ? 'Read less' : 'Read more'}
                    </button>
                </span>
            </h5>

            <IconsContainer>
                <a href={arrObjMemberData.linkedin}>
                    <img src={linkedin} alt="LinkedIn" />
                </a>

                <a href={arrObjMemberData.socialNetwork}>
                    <img src={icon} alt="social-network" />
                </a>
            </IconsContainer>
        </Container>
    )
}

export default TeamMemberCard
