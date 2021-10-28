import styled from 'styled-components'

export const DesktopContainer = styled.header`
    padding-top: 0.5rem;
    background-color: #ffffff;
    color: #000000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 100%;
    width: 100%;
`

export const MobileContainer = styled.header`
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    padding-top: 0.5rem;
    justify-content: center;

    & > :nth-child(1) {
        position: absolute;
        left: 0.5rem;
        cursor: pointer;
    }
`
