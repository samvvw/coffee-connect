import styled from 'styled-components'

export const Container = styled.div`
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    #imageContainer {
        img {
            width: 270px;
            height: 216px;
            object-fit: cover;
            border-radius: 10px;
        }
        position: relative;
        & > :nth-child(2) {
            position: absolute;
            top: 20px;
            right: 20px;
            display: flex;
            justify-content: space-between;
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
    & .description label {
        display: -webkit-box;
        max-width: 300px;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`
export const Label = styled.label`
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.fontColor || '#000000'};
    font-weight: ${(props) => props.fontWeight || 'Normal'};
`
