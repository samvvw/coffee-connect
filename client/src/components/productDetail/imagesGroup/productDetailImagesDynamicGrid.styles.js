import styled from 'styled-components'

export const ImageGroupParent = styled.div`
    display: grid;
    grid-template-columns: repeat(${(props) => props.totalCols}, 1fr);
    grid-template-rows: repeat(${(props) => props.totalRows}, 1fr);
    gap: 0.5rem;
    height: 600px;

    #div1 {
        grid-column: ${(props) => props.colsDiv1};
        grid-row: ${(props) => props.rowsDiv1};
    }

    #div2 {
        grid-column: ${(props) => props.colsDiv2};
        grid-row: ${(props) => props.rowsDiv2};
        display: ${(props) => props.displayDiv2};
    }
    #div3 {
        grid-column: ${(props) => props.colsDiv3};
        grid-row: ${(props) => props.rowsDiv3};
        display: ${(props) => props.displayDiv3};
    }
    #div4 {
        grid-column: ${(props) => props.colsDiv4};
        grid-row: ${(props) => props.rowsDiv4};
        display: ${(props) => props.displayDiv4};
    }
    img {
        /* border: 3px solid red; */
        width: 100%;

        height: ${(props) => (props.imgsTotal === 1 ? '600px' : '100%')};

        object-fit: cover;
    }
`
