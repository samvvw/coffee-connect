import styled from 'styled-components'

export const FarmHeaderWrapper = styled.div.attrs({
    className: 'farm-header-wrapper',
})`
    width: 100%;
    height: 4rem;
    border: 1px solid black;
    color: ${(props) => props.theme.pallette.text.primary};
`
export const FarmHeaderContent = styled.div`
    /* min-width: 600px; */
    max-width: ${(props) => props.theme.layout.screenMaxWidth};
    margin: 0 auto;
    padding: 0 1rem;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    div:last-child {
        margin-left: auto;
    }
`
