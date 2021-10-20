import styled from 'styled-components'

export const HeaderContainer = styled.div`
    background-color: ${(props) => props.backgroundColor || '#f2f2f2'};
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    /* gap: 233px; */
    padding-top: 1rem;
    padding-bottom: 1rem;
    /* width: 100%; */
`
export const HeaderMainContainer = styled.div`
    display: grid;
    grid-template-columns: 4fr 3fr 1fr;
    grid-template-rows: 1fr;
    width: 800px;

    @media only screen and (max-width: 400px) {
        display: flex;
        flex-direction: column;
    }
`
export const HeaderChildContainer = styled.div`
    grid-column: ${(props) => props.gridColumn};
    grid-row: ${(props) => props.gridRow};
    display: flex;
    flex-direction: ${(props) => props.flexDirection || 'row'};
    align-items: ${(props) => props.alignItems || 'auto'};
    padding-right: 1rem;
    padding-left: 1rem;
    gap: ${(props) => props.gap || '0'};

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

    @media only screen and (max-width: 400px) {
        order: ${(props) => props.order};
        justify-content: ${(props) => (props.order === '1' ? 'end' : 'auto')};
    }
`
export const HeaderChildContainerExtended = styled(HeaderChildContainer)`
    @media only screen and (max-width: 400px) {
        align-items: center;
        border: none;
        flex-direction: row;
        padding-left: ${(props) =>
            props.gridColumn === '1/2' || props.gridColumn === '3/4'
                ? '0'
                : props.padingLeft};

        justify-content: space-between;

        grid-row: ${(props) =>
            props.gridColumn === '1/2' || props.gridColumn === '2/3'
                ? '1/2'
                : '2/3'};

        border-left: ${(props) =>
            props.gridColumn === '2/3'
                ? `1px solid ${props.borderRight || 'transparent'}`
                : 'none'};

        grid-column: ${(props) =>
            props.gridColumn === '3/4' ? '1/2' : props.gridColumn};

        p {
            display: ${(props) =>
                props.gridColumn === '2/3' ? 'none' : 'block'};
        }
        h5 {
            font-size: 1rem;
        }
    }
`

export const HeaderOriginLocationAtitudContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;

    @media only screen and (max-width: 400px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
`
