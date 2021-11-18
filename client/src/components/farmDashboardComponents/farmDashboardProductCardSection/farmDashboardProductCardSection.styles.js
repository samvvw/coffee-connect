import styled from 'styled-components'
import { theme } from '../../../theme/theme'
export const FarmDashboardProductCardSectionWrapper = styled.section.attrs({
    className: 'farm-dashboard-product-card-section',
})`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    align-content: center;
    padding-top: 3rem;
    padding-right: 2rem;
    padding-left: 2rem;

    /*  @media only screen and (min-width: ${(props) =>
        props.theme.desktop}) { */
    @media only screen and (min-width: ${theme.layout.desktop}) {
        max-width: ${(props) => props.theme.layout.screenMaxWidth};
        margin: 0 auto;
        margin-bottom: 2rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        justify-items: center;
        grid-gap: 3rem;
    }
`
