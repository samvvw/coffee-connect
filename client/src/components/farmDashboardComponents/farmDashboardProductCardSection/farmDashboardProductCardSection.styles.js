import styled from 'styled-components'
import { theme } from '../../../theme/theme'
export const FarmDashboardProductCardSectionWrapper = styled.section.attrs({
    className: 'farm-dashboard-product-card-section',
})`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-content: center;
    padding-top: 3rem;
    padding-right: 2rem;
    padding-left: 2rem;
    padding-bottom: 7rem;

    /*  @media only screen and (min-width: ${(props) =>
        props.theme.desktop}) { */
    @media only screen and (min-width: ${theme.layout.desktop}) {
        max-width: ${(props) => props.theme.layout.screenMaxWidth};
        width: 100%;
        margin: 0 auto;
        margin-bottom: 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 330px));
        grid-template-rows: auto;
        row-gap: 2rem;
        column-gap: 3.5rem;
        justify-content: flex-start;
        padding-right: 2rem;
        padding-left: 2rem;
    }
`
