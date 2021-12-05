import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const Container = styled.div`
    width: 100%;
    border: 1px solid #b0bec5;
    color: black;
    margin-bottom: 1rem;

    & > ul {
        list-style-type: none;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 2rem;
        padding: 1rem 0;
        width: 50%;
        margin: 0 auto;

        & li > a {
            text-decoration: none;
            color: #000000;
            padding-bottom: 6px;

            &.selected {
                color: ${(props) =>
                    props.userType === 'farmer'
                        ? theme.pallette.secondary.c800
                        : theme.pallette.primary[500]};
                font-weight: bold;
                border-bottom: 4px solid
                    ${(props) =>
                        props.userType === 'farmer'
                            ? theme.pallette.secondary.c800
                            : theme.pallette.primary[500]};
                padding-bottom: 0.9rem;
            }
        }
    }
`
