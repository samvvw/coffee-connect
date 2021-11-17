import styled from 'styled-components'
import { theme } from '../../../../../theme/theme'

export const Container = styled.div`
    form {
        display: flex;
        flex-direction: column;

        input[type='text'],
        input[type='number'],
        input[type='date'] {
            height: 48px;
            width: 100%;
            border-color: ${theme.pallette.accent1.light};
        }

        #divTaste,
        #divRoastDate,
        #divProductSize1,
        #divProductSize2,
        #divAromas,
        #divRoastLevel,
        #divcoffeProcess,
        #divcoffeeVariety,
        #divcoffeeType {
            padding-left: 1rem;
            padding-right: 1rem;
            border-bottom: 1px solid ${theme.pallette.accent1.dark};
            margin-top: 1rem;
            padding-bottom: 2rem;

            & > :nth-child(1) {
                //first label (title of section)
                font-size: 1rem;
                font-weight: bold;
                /* padding-bottom: 1rem; */
                span {
                    color: red;
                }
            }
        }

        #divProductSize3,
        #divName,
        #divDescription {
            padding-left: 1rem;
            padding-right: 1rem;
            margin-top: 1rem;
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
        #divProductSize1,
        #divProductSize2,
        #divProductSize3 {
            font-size: 1rem;
            font-weight: bold;
            span {
                color: red;
            }
        }

        #divName,
        #divDescription,
        #divTaste,
        #divRoastDate,
        #divProductSize1,
        #divProductSize2,
        #divProductSize3,
        #divAromas {
            display: flex;
            flex-direction: column;
        }

        /* #divTaste,
        #divAromas {
            display: flex;
            flex-direction: column;
           
        } */

        #divTaste,
        #divAromas,
        #divRoastLevel,
        #divcoffeProcess,
        #divcoffeeVariety,
        #divcoffeeType {
            .gridChkRadioWrapper {
                display: grid;
                grid-template-columns: 1fr 1fr;
                row-gap: 1rem;
                column-gap: 1rem;
                padding-top: 1rem;

                .gridChkRadio {
                    display: grid;
                    grid-template-columns: 0.3fr 1fr;
                }
            }
        }

        #divProductSize1,
        #divProductSize2,
        #divProductSize3 {
            div {
                display: grid;
                grid-template-columns: 1fr 1fr;
                column-gap: 2rem;
                div {
                    display: flex;
                    flex-direction: column;
                }
            }
        }

        #productAromas {
            div {
                /* margin-bottom: */
            }
        }

        #divSubmit {
            width: 100%;
            padding-left: 2rem;
            padding-right: 2rem;
            padding-bottom: 1rem;
            padding-top: 1rem;
            margin-top: 3rem;
            margin-left: 0;
            /* position: fixed;
            bottom: 0;
            left: 0; */

            box-shadow: 0px 5px 5px 0 ${theme.pallette.black[50]} inset;
        }

        /****************** */
        /*STYLE FOR CHECKBOXES*/

        .containerCheckbox {
            display: block;
            position: relative;
            padding-left: 35px;
            margin-bottom: 12px;
            cursor: pointer;
            font-size: 22px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        /* Hide the browser's default checkbox */
        .containerCheckbox input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }

        /* Create a custom checkbox */
        .checkmarkCheckbox {
            position: absolute;
            top: 0;
            left: 0;
            height: 25px;
            width: 25px;
            /* background-color: #eee; */
            border: 2px solid ${theme.pallette.black[500]};
        }

        /* On mouse-over, add a grey background color */
        .containerCheckbox:hover input ~ .checkmarkCheckbox {
            background-color: #ccc;
        }

        /* When the checkbox is checked, add a blue background */
        .containerCheckbox input:checked ~ .checkmarkCheckbox {
            background-color: ${theme.pallette.primary[500]};
        }

        /* Create the checkmark/indicator (hidden when not checked) */
        .checkmarkCheckbox:after {
            content: '';
            position: absolute;
            display: none;
        }

        /* Show the checkmark when checked */
        .containerCheckbox input:checked ~ .checkmarkCheckbox:after {
            display: block;
        }

        /* Style the checkmark/indicator */
        .containerCheckbox .checkmarkCheckbox:after {
            left: 9px;
            top: 5px;
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }

        /****************** */

        /*STYLE FOR RADIO BUTTONS*/
        /* The container */
        .containerRadio {
            display: block;
            position: relative;
            padding-left: 35px;
            margin-bottom: 12px;
            cursor: pointer;
            font-size: 22px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        /* Hide the browser's default radio button */
        .containerRadio input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
        }

        /* Create a custom radio button */
        .checkmarkRadio {
            position: absolute;
            top: 0;
            left: 0;
            height: 25px;
            width: 25px;
            background-color: #eee;
            border-radius: 50%;
            border: 2px solid ${theme.pallette.black[500]};
        }

        /* On mouse-over, add a grey background color */
        .containerRadio:hover input ~ .checkmarkRadio {
            background-color: #ccc;
        }

        /* When the radio button is checked, add a blue background */
        .containerRadio input:checked ~ .checkmarkRadio {
            background-color: ${theme.pallette.primary[500]};
        }

        /* Create the indicator (the dot/circle - hidden when not checked) */
        .checkmarkRadio:after {
            content: '';
            position: absolute;
            display: none;
        }

        /* Show the indicator (dot/circle) when checked */
        .containerRadio input:checked ~ .checkmarkRadio:after {
            display: block;
        }

        /* Style the indicator (dot/circle) */
        .containerRadio .checkmarkRadio:after {
            top: 7px;
            left: 7px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: white;
        }
        /************************************************************ */
    }

    @media only screen and (min-width: ${(props) =>
            props.theme.layout.desktop}) {
        form {
            margin: 5rem auto;
            width: 70%;

            #divTaste,
            #divRoastDate,
            #divProductSize1,
            #divProductSize2,
            #divAromas,
            #divRoastLevel,
            #divcoffeProcess,
            #divcoffeeVariety,
            #divcoffeeType,
            #divProductSize3,
            #divName,
            #divDescription,
            #divProductSize1,
            #divProductSize2,
            #divProductSize3 {
                display: flex;
                flex-direction: column;

                & > :nth-child(1) {
                    //first label (title of section)
                    font-size: 1.2rem;
                    font-weight: bold;
                    span {
                        font-size: 1.2rem;
                    }
                }
            }

            #divTaste,
            #divAromas,
            #divRoastLevel,
            #divcoffeProcess,
            #divcoffeeVariety,
            #divcoffeeType {
                .gridChkRadioWrapper {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    row-gap: 1rem;
                    column-gap: 1rem;

                    .gridChkRadio {
                        display: grid;
                        grid-template-columns: 0.3fr 1fr;
                    }
                }
            }

            #divSubmit {
                box-shadow: none;
            }
        }
    }
`
