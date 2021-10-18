import styled from 'styled-components'

export const FarmMyProductsWrapper = styled.div.attrs({
    className: 'farm-dashboard-my-products-wrapper',
})`
    max-width: ${(props) => props.theme.layout.screenMaxWidth};
    margin: 0 auto;
    display: flex;
    padding: 1rem;
`
