import styled from 'styled-components'

export const HeaderContainer = styled.div`
    background-color: #f2f2f2;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    /* gap: 233px; */
    padding-top: 1rem;
    padding-bottom: 1rem;

    @media only screen and (max-width: 400px) {
        display: flex;
        flex-direction: column;
    }
`
export const HeaderMainContainer = styled.div`
    display: grid;
    grid-template-columns: 4fr 3fr 1fr;
    grid-template-rows: 1fr;
    width: 800px;
`
export const HeaderChildContainer = styled.div`
    grid-column: ${(props) => props.gridColumn};
    grid-row: ${(props) => props.gridRow};
    display: flex;
    flex-direction: ${(props) => props.flexDirection || 'row'};
    align-items: ${(props) => props.alignItems || 'auto'};
    padding-right: 1rem;
    padding-left: 1rem;

    h4 {
        font-size: 2rem;
    }

    p {
        font-size: 1rem;
    }

    h5 {
        font-size: 1.2rem;
        text-align: right;
    }

    border-right: 1px solid ${(props) => props.borderRight || 'transparent'};
`

export const HeaderOriginLocationAtitudContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
`
