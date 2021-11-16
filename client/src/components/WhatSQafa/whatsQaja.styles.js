import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
    max-width: 35%;
    margin: 0 auto;
    text-align: center;
`

export const Heading = styled.h2`
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 0;
    @media only screen and (max-width: 400px) {
        font-size: 1rem;
    }
`
export const StyledParagraph = styled.p`
    font-size: 1.1rem;
    @media only screen and (max-width: 400px) {
        font-size: 0.75rem;
    }
`
