import { Container } from './imageFarm.styles'
import { useContext, useState } from 'react'

import { UserContext } from '../../../context/userContext/userContext'
const ImageFarm = ({
    width,
    height,
    alt = '',
    widthButton,
    heightButton,
    urlImage = '',
    idContainer,
    fileContainerinDB,
}) => {
    const [bgImage, setBgImage] = useState(urlImage)
    const { user } = useContext(UserContext)
    const farmID = user.farms[0]

    const importFiles = () => {
        let input = document.createElement('input')
        input.type = 'file'
        input.onchange = (_) => {
            // you can use this method to get file and perform respective operations
            let files = Array.from(input.files)
            const token = localStorage.getItem('token')
            const form = new FormData()

            let apiUrl = ''

            form.append('token', token)
            switch (fileContainerinDB) {
                case 'gallery':
                    form.append('caption', '')
                    form.append('imageFile', files[0])
                    apiUrl = `/api/farm/${farmID}/gallery`
                    break
                case 'farmPicture':
                    form.append('farmPicture', files[0])
                    apiUrl = `/api/farm/${farmID}/pictures`
                    break
                case 'logo':
                    form.append('farmLogo', files[0])
                    apiUrl = `/api/farm/${farmID}/pictures`
                    break
                case 'farmCertificate':
                    form.append('farmCertificate', files[0])
                    apiUrl = `/api/farm/${farmID}/pictures`
                    break
                default:
                    break
            }

            const data = {
                method: 'post',
                body: form,
            }

            fetch(apiUrl, data)
                .then((res) =>
                    res.json().then((data) => {
                        switch (fileContainerinDB) {
                            case 'gallery':
                                setBgImage(
                                    data.gallery[data.gallery.length - 1].image
                                )
                                break
                            case 'logo':
                                setBgImage(data.logo)
                                break
                            case 'farmPicture':
                                setBgImage(data.farmPicture)
                                break
                            case 'farmCertificate':
                                setBgImage(
                                    data.certification[
                                        data.certification.length - 1
                                    ]
                                )
                                break
                            default:
                                break
                        }
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
            <img src={bgImage || urlImage} alt={alt} />
            <button onClick={() => importFiles(idContainer)}>+</button>
        </Container>
    )
}

export default ImageFarm
