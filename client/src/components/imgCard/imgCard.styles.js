import styled from 'styled-components'

export const StyledImgCard = styled.div`
    background-color: ${(props) => props.backgroundColor || '#ffffff'};
    width: ${(props) => props.width};
    min-height: ${(props) => props.height} || auto;
    height: ${(props) => props.height} || auto;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
`

export const StyleParagraph = styled.p`
    color: ${(props) => props.pTextColor || '#000000'};
    font-size: ${(props) => props.pFontSize || '.5rem'};
    margin-top: 0.5rem;
`
