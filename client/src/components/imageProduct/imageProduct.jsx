import { Container } from './imageProduct.styles'
import { useState } from 'react'
// import axios from 'axios'

const ImageProduct = ({
    urlImg,
    width,
    height,
    alt = '',
    widthButton,
    heightButton,
    tabImagesDisabled,
    idContainer,
    idProduct,
}) => {
    const [bgImage, setBgImage] = useState()
    const importFiles = (idContainer) => {
        let input = document.createElement('input')
        input.type = 'file'
        input.onchange = (_) => {
            // you can use this method to get file and perform respective operations
            let files = Array.from(input.files)
            const farmId = '61834b3e802aa4a8e981ebdc'

            const productId = idProduct
            const token = localStorage.getItem('token')
            const form = new FormData()
            form.append('productFile', files[0])
            form.append('token', token)
            const data = { method: 'post', body: form }

            fetch(`/api/farm/${farmId}/product/${productId}/pictures`, data)
                .then((res) => res.json())
                .then((data) => {
                    setBgImage(data.picture[+idContainer])
                })
                .catch((error) => console.log(error))

            // console.log(files[0])
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
            <button
                onClick={() => importFiles(idContainer)}
                disabled={tabImagesDisabled}
            >
                +
            </button>
        </Container>
    )
}

export default ImageProduct
