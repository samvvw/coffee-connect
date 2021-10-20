import styled from 'styled-components'

export const FarmDashboardProductCardSectionWrapper = styled.section.attrs({
    className: 'farm-dashboard-product-card-section',
})`
    max-width: ${(props) => props.theme.layout.screenMaxWidth};
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    justify-items: center;
`
