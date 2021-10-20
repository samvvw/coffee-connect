import styled from 'styled-components'

export const Description = styled.p`
    font-size: '1.1rem';
    @media only screen and (max-width: 400px) {
        font-size: 0.75rem;
    }
`

export const Heading = styled.h2`
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 0;
    padding-bottom: 1rem;
    @media only screen and (max-width: 400px) {
        font-size: 1rem;
    }
`
export const Link = styled.a`
    color: ${(props) => props.color || '#000000'};
`
