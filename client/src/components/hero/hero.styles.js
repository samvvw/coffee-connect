import styled from 'styled-components'

export const StyledHero = styled.div`
    background-color: ${(props) => props.backgroundColor || '#ffffff'};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: ${(props) => props.maxWidth};
    padding: 0.5rem;
    margin: 0 auto;
`
export const StyleParagrahHero = styled.p`
    color: ${(props) => props.pTextColor || '#000000'};
    font-size: ${(props) => props.pFontSize || '.5rem'};
`

export const StyledTitleHero = styled.h1`
    color: ${(props) => props.titleTextColor || '#000000'};
    font-size: ${(props) => props.titleFontSize || '.5rem'};
`
