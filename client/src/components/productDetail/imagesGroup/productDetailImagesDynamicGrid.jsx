import { ImageGroupParent } from './productDetailImagesDynamicGrid.styles'

const ProductDetailImageDynamicGrid = ({ urlsArray }) => {
    const imgsTotal = urlsArray.length
    // console.log(urlsArray)
    let totalCols, totalRows

    if (imgsTotal === 1) {
        totalCols = 1
    } else if (imgsTotal >= 2) {
        totalCols = 6
    }

    if (imgsTotal === 1 || imgsTotal === 2) {
        totalRows = 1
    } else if (imgsTotal >= 3) {
        totalRows = 3
    }

    let colsDiv1, rowsDiv1
    let colsDiv2, rowsDiv2
    let colsDiv3, rowsDiv3
    let colsDiv4, rowsDiv4
    let displayDiv2, displayDiv3, displayDiv4

    switch (imgsTotal) {
        case 1:
            colsDiv1 = '1/2'
            rowsDiv1 = '1/2'
            colsDiv2 = '0/0'
            rowsDiv2 = '0/0'
            colsDiv3 = '0/0'
            rowsDiv3 = '0/0'
            colsDiv4 = '0/0'
            rowsDiv4 = '0/0'
            displayDiv2 = 'none'
            displayDiv3 = 'none'
            displayDiv4 = 'none'
            break
        case 2:
            colsDiv1 = '1/5'
            rowsDiv1 = '1/4'
            colsDiv2 = '5/7'
            rowsDiv2 = '1/4'
            colsDiv3 = '0/0'
            rowsDiv3 = '0/0'
            colsDiv4 = '0/0'
            rowsDiv4 = '0/0'
            displayDiv2 = 'block'
            displayDiv3 = 'none'
            displayDiv4 = 'none'
            break
        case 3:
            colsDiv1 = '1/5'
            rowsDiv1 = '1/4'
            colsDiv2 = '5/7'
            rowsDiv2 = '1/3'
            colsDiv3 = '5/7'
            rowsDiv3 = '3/4'
            colsDiv4 = '0/0'
            rowsDiv4 = '0/0'
            displayDiv2 = 'block'
            displayDiv3 = 'block'
            displayDiv4 = 'none'
            break
        case 4:
            colsDiv1 = '1/5'
            rowsDiv1 = '1/4'
            colsDiv2 = '5/7'
            rowsDiv2 = '1/3'
            colsDiv3 = '5/6'
            rowsDiv3 = '3/4'
            colsDiv4 = '6/7'
            rowsDiv4 = '3/4'
            displayDiv2 = 'block'
            displayDiv3 = 'block'
            displayDiv4 = 'block'
            break
        default:
            colsDiv1 = '1/1'
            rowsDiv1 = '1/1'
            colsDiv2 = '0/0'
            rowsDiv2 = '0/0'
            colsDiv3 = '0/0'
            rowsDiv3 = '0/0'
            colsDiv4 = '0/0'
            rowsDiv4 = '0/0'
    }

    return (
        <ImageGroupParent
            imgsTotal={imgsTotal}
            totalCols={totalCols}
            totalRows={totalRows}
            colsDiv1={colsDiv1}
            rowsDiv1={rowsDiv1}
            colsDiv2={colsDiv2}
            rowsDiv2={rowsDiv2}
            colsDiv3={colsDiv3}
            rowsDiv3={rowsDiv3}
            colsDiv4={colsDiv4}
            rowsDiv4={rowsDiv4}
            displayDiv2={displayDiv2}
            displayDiv3={displayDiv3}
            displayDiv4={displayDiv4}
        >
            <div id="div1">
                <img src={urlsArray[0]} alt="" />
            </div>
            <div id="div2">
                <img src={urlsArray[1]} alt="" />
            </div>
            <div id="div3">
                <img src={urlsArray[2]} alt="" />
            </div>
            <div id="div4">
                <img src={urlsArray[3]} alt="" />
            </div>
        </ImageGroupParent>
    )
}

export default ProductDetailImageDynamicGrid
