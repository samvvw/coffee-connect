import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    background-image: url(${(props) => props.bgImageUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 450px;
`

export const Heading = styled.h2`
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 0;
`

export const Paragraph = styled.p`
    font-size: 1.1rem;
    width: 55ch;
`
