import styled from 'styled-components'
import { theme } from '.././../../theme/theme'
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    padding-right: 2rem;

    h5 {
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }
    #description {
        padding-top: 1rem;
        p {
            font-size: 1rem;
        }
        padding-bottom: 0.7rem;
    }
    #member {
        display: flex;
        padding-bottom: 1rem;
    }
    button:hover {
        background-color: ${theme.pallette.primary[500]};
        color: white;
    }
`
