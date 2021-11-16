import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    justify-items: center;
    row-gap: 0.5rem;
    max-width: 100%;
    width: 100%;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Heading = styled.h2`
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 0;
`

export const Paragraph = styled.p`
    font-size: 1.1rem;
    max-width: 55ch;
`
