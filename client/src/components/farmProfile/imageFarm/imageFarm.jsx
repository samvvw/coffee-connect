import { Container } from './imageFarm.styles'
import { useState, useContext } from 'react'

import { UserContext } from '../../../context/userContext/userContext'
const ImageFarm = ({
    width,
    height,
    alt = '',
    widthButton,
    heightButton,
    bgImage,
    idContainer,
    // idProduct,
}) => {
    // const [bgImage, setBgImage] = useState()
    const { user } = useContext(UserContext)
    const farmID = user.farms[0]

    const importFiles = (idContainer) => {
        let input = document.createElement('input')
        input.type = 'file'
        input.onchange = (_) => {
            // you can use this method to get file and perform respective operations
            let files = Array.from(input.files)
            // const farmId = '61808eb787ad9fd90a35acdd'
            // const productId = idProduct
            const token = localStorage.getItem('token')
            const form = new FormData()
            form.append('productFile', files[0])
            form.append('token', token)
            const data = { method: 'post', body: form }
            // console.log(`/api/farm/${farmID}/product/${productId}/pictures`)
            // fetch(`/api/farm/${farmID}/product/${productId}/pictures`, data)q
            //     .then((res) =>
            //         res.json().then((data) => {
            //             setBgImage(data.picture[+idContainer])
            //             setTotalProducts((prev) => prev + 1)
            //         })
            //     )
            //     .catch((error) => console.log(error))
        }
        input.click()
    }
    return (
        <Container
            width={width}
            height={height}
            widthButton={widthButton}
            heightButton={heightButton}
        >
            <img src={bgImage} alt={alt} />
            <button onClick={() => importFiles(idContainer)}>+</button>
        </Container>
    )
}

export default ImageFarm