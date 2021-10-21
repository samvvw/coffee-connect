import styled from 'styled-components'

export const RoastLevelContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    h5 {
        font-size: 1.5rem;
    }

    p {
        font-size: 1rem;
        padding-top: 2rem;
    }

    padding-bottom: 2rem;
`

export const RoastLevelSubContainer = styled(RoastLevelContainer)`
    flex-direction: row;
    align-items: center;
`
