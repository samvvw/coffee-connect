import styled from 'styled-components'

export const CarouselContainer = styled.div`
    height: 300px;
    position: relative;
    #divCarousel {
        height: 100%;

        div {
            height: 100%;

            div {
                height: 100%;
            }
        }
    }
    #divCircleButtons {
        width: 30%;
        justify-content: space-evenly;
        display: flex;
        position: absolute;
        top: 1rem;
        right: 0;
        z-index: 100;
    }
`
