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
    a:hover {
        background-color: ${theme.pallette.primary[500]};
        color: white;
    }
    a {
        background-color: white;
        color: ${theme.pallette.primary[500]};
        border-radius: 20px;
        padding: 8px 13px;

        cursor: pointer;
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        border: 1px solid ${theme.pallette.primary[500]};
        text-align: center;
        text-decoration: none;
    }
`
