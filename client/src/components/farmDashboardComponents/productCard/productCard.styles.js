import styled from 'styled-components'

export const Container = styled.div`
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    #imageContainer {
        img {
            height: 200px;
            object-fit: cover;
        }

        position: relative;
        & > :nth-child(2) {
            position: absolute;
            top: 20px;
            right: 20px;
            display: flex;

            justify-content: space-between;
            //heart button
            button {
                background-color: white;
                width: 2rem;
                border-radius: 50%;
            }
        }
    }
`
export const DetailsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    margin-top: 1rem;
`
export const DetailsContainerChild = styled.div`
    grid-column: ${(props) => props.gridColumn};
    grid-row: ${(props) => props.gridRow};
    div {
        span {
            font-weight: bold;
        }
        p {
            font-size: 0.7rem;
            margin: 0;
        }
    }
`
export const Label = styled.label`
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.fontColor || '#000000'};
    font-weight: ${(props) => props.fontWeight || 'Normal'};
`
