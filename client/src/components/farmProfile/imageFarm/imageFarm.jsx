import { Container } from './imageFarm.styles'
// import { useState, useContext } from 'react'

import { UserContext } from '../../../context/userContext/userContext'
const ImageFarm = ({
    width,
    height,
    alt = '',
    widthButton,
    heightButton,
    bgImage,
    idContainer,
    fileContainerinDB,
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
            const token = localStorage.getItem('token')

            let apiUrl = ''
            switch (fileContainerinDB) {
                case 'gallery':
                    apiUrl = `/api/farm/${farmID}/gallery`
                    break
                case 'hero':
                    break
                case 'logo':
                    break
                default:
                    break
            }

            const form = new FormData()
            form.append('caption', 'some caption')
            form.append('files', { imageFile: files[0] })
            form.append('token', token)
            const data = {
                method: 'post',
                body: form,
                files: { imageFile: 'hola!' },
            }

            fetch(apiUrl, data)
                .then((res) =>
                    res.json().then((data) => {
                        console.log('save image to gallery', data)
                        // setBgImage(data.picture[+idContainer])
                        // setTotalProducts((prev) => prev + 1)
                    })
                )
                .catch((error) => console.log(error))
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
