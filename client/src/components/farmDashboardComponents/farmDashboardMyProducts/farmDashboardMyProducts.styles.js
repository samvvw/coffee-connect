import styled from 'styled-components'

export const FarmMyProductsWrapper = styled.div.attrs({
    className: 'farm-dashboard-my-products-wrapper',
})`
    max-width: ${(props) => props.theme.layout.screenMaxWidth};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    & > button {
        height: 2rem;
        text-align: center;
        display: flex;
        align-items: center;
        &:hover {
            color: black;
            background-color: #fff;
            border: 1px solid black;
        }
    }
`
