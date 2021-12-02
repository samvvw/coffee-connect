import { Container, IconsContainer } from './teamMemberCard.styles'

// import behance from '../../assets/images/icons/behance_icon.png'
// import git from '../../assets/images/icons/git_icon.png'
import linkedin from '../../assets/images/icons/linkedin_icon.png'

import { useState, useCallback } from 'react'

const TeamMemberCard = ({ imgUrl, arrObjMemberData }) => {
    const title = arrObjMemberData.title
    // let icon

    // if (title === 'designer') icon = behance
    // else icon = git

    function useToggle(initialValue = false) {
        const [value, setValue] = useState(initialValue)
        const toggle = useCallback(() => {
            setValue((v) => !v)
        }, [])
        return [value, toggle]
    }

    const [isbioShort, toggleBio] = useToggle()

    const [memberImg, setMemberImg] = useState(arrObjMemberData.defaultImg)

    const handleOnMouseEnter = () => {
        setMemberImg(arrObjMemberData.hoverImg)
    }

    const handleOnMouseLeave = () => {
        setMemberImg(arrObjMemberData.defaultImg)
    }


    return (
        <Container>
            <div className="team-member-image-wrapper">
                <img src={memberImg} alt={arrObjMemberData.firstName} />
            </div>
            <h3>{arrObjMemberData.firstName} <span>{arrObjMemberData.lastName}</span></h3>
            <h4>{arrObjMemberData.role}</h4>

            <p>
                {isbioShort
                    ? arrObjMemberData.bioLong
                    : arrObjMemberData.bioShort}
                
                {arrObjMemberData.bioLong==='' ? null :
                    <span>
                        <button type="button" onClick={toggleBio}>
                            {isbioShort ? 'Read less' : 'Read more'}
                        </button>
                    </span>
                }
            </p>

            <IconsContainer>
                <a href={arrObjMemberData.linkedin}
                    onMouseEnter = {event => handleOnMouseEnter(event)}
                    onMouseLeave = {event => handleOnMouseLeave(event)}
                >
                    <img src={linkedin} alt="LinkedIn" />
                </a>

                {/* <a href={arrObjMemberData.socialNetwork}
                    onMouseEnter = {event => handleOnMouseEnter(event)}
                    onMouseLeave = {event => handleOnMouseLeave(event)}
                >
                    <img src={icon} alt="social-network" />
                </a> */}
            </IconsContainer>
        </Container>
    )
}

export default TeamMemberCard
