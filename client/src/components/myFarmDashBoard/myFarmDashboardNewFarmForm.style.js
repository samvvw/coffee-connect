import styled from 'styled-components'
import { theme } from '../../theme/theme'
export const Container = styled.div`
    form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(5, auto);
        width: 65%;
        margin: 0 auto;
        /* gap: 1rem; */
        padding-top: 3rem;
        padding-bottom: 3rem;
        #farmName {
            grid-column: 1/3;
            grid-row: 1/2;
        }
        #farmCountry {
            grid-column: 1/2;
            grid-row: 2/3;
        }
        #farmOrigin {
            grid-column: 2/3;
            grid-row: 2/3;
        }
        #farmAltitud {
            grid-column: 1/2;
            grid-row: 3/4;
        }
        #farmSize {
            grid-column: 2/3;
            grid-row: 3/4;
        }
        #farmAbout {
            grid-column: 1/3;
            grid-row: 4/5;
            textarea {
                height: 200px;
                padding-left: 1rem;
                padding-right: 1rem;
            }
        }
        #submit {
            grid-column: 1/3;
            grid-row: 5/6;
            button {
                width: 50%;
                margin: 0 auto;
                padding: 0.5rem;

                &:hover {
                    background-color: ${theme.pallette.secondary.dark};
                    border-color: ${theme.pallette.secondary.dark};
                }
            }
        }

        input[type='text'] {
            height: 48px;
            width: 100%;
            border-width: 1px;
            border-color: ${theme.pallette.black[400]};
            border-radius: 4px;
            padding-left: 0.5rem;

            &:focus {
                outline: 0;
                border: 1px solid ${theme.pallette.primary[500]};
            }
        }

        select {
            height: 48px;
            width: 100%;
            border-width: 1px;
            border-color: ${theme.pallette.black[400]};
            border-radius: 4px;
            padding-left: 0.5rem;

            &:focus {
                outline: 0;
                border: 1px solid ${theme.pallette.primary[500]};
            }
        }

        textarea {
            border-width: 1px;
            border-color: ${theme.pallette.black[400]};
            border-radius: 4px;
            padding-left: 0.5rem;
            padding-top: 0.5rem;

            &:focus {
                outline: 0;
                border: 1px solid ${theme.pallette.primary[500]};
            }
        }

        div {
            display: flex;
            flex-direction: column;
            padding-left: 1rem;
            padding-right: 1rem;

            margin-top: 1rem;
            padding-bottom: 2rem;

            & > :nth-child(1) {
                //first label (title of section)
                font-size: 1rem;
                font-weight: bold;
                padding-bottom: 1rem;
                span {
                    color: red;
                }
            }
        }
    }
`
