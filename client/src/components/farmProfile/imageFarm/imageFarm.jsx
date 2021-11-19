import { Container } from './imageFarm.styles'
import { useContext, useState, useEffect } from 'react'
import blankmg from '../../../assets/images/blankImg.jpg'
import { UserContext } from '../../../context/userContext/userContext'
const ImageFarm = ({
    width,
    height,
    alt = '',
    widthButton,
    heightButton,
    urlImage,
    idContainer,
    fileContainerinDB,
    idImg,
}) => {
    const [bgImage, setBgImage] = useState(urlImage)
    const { user } = useContext(UserContext)
    const farmID = user.farms[0]

    // variables to control centered button
    const [centeredCircleDisplay, setCenteredCircleDisplay] = useState(false)

    // variables to control delete button
    const [deleteCircleDisplay, setDeleteCircleDisplay] = useState(false)

    useEffect(() => {
        if (urlImage) {
            setCenteredCircleDisplay(false)
            setDeleteCircleDisplay(true)
        } else {
            setCenteredCircleDisplay(true)
            setDeleteCircleDisplay(false)
        }
    }, [urlImage])

    let apiUrl = ''
    const importFiles = () => {
        let input = document.createElement('input')
        input.type = 'file'
        input.onchange = (_) => {
            // you can use this method to get file and perform respective operations
            let files = Array.from(input.files)
            const token = localStorage.getItem('token')
            const form = new FormData()

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
                .then((res) => {
                    res.json().then((data) => {
                        switch (fileContainerinDB) {
                            case 'gallery':
                                console.log(data)
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
                    setCenteredCircleDisplay(false)
                    setDeleteCircleDisplay(true)
                })
                .catch((error) => console.log(error))
        }
        input.click()
    }

    const deleteFile = () => {
        const token = localStorage.getItem('token')

        // const data = {
        //     method: 'delete',
        //     body: {
        //         token: token,
        //         farmLogo: bgImage
        //     },
        // }
        let data

        switch (fileContainerinDB) {
            case 'gallery':
                apiUrl = `/api/farm/${farmID}/gallery/${idImg}`
                data = {
                    method: 'delete',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        token: token,
                    }),
                }
                break
            case 'farmPicture':
                apiUrl = `/api/farm/${farmID}/pictures`
                data = {
                    method: 'delete',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        token: token,
                        farmPicture: bgImage,
                    }),
                }
                break
            case 'logo':
                // data.body['farmLogo'] = bgImage

                data = {
                    method: 'delete',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        token: token,
                        farmLogo: bgImage,
                    }),
                }

                apiUrl = `/api/farm/${farmID}/pictures`
                break
            case 'farmCertificate':
                // data.body['farmCertificate'] = bgImage
                data = {
                    method: 'delete',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        token: token,
                        farmCertificate: bgImage,
                    }),
                }
                apiUrl = `/api/farm/${farmID}/pictures`
                break
            default:
                break
        }

        fetch(apiUrl, data)
            .then((res) => {
                setCenteredCircleDisplay(true)
                setDeleteCircleDisplay(false)
                setBgImage(blankmg)
            })
            .catch((error) => console.log(error))
    }

    return (
        <Container
            width={width}
            height={height}
            widthButton={widthButton}
            heightButton={heightButton}
        >
            <img src={bgImage || urlImage} alt={alt} />
            {centeredCircleDisplay && (
                <button
                    id="centeredCircle"
                    onClick={() => importFiles(idContainer)}
                >
                    +
                </button>
            )}

            {deleteCircleDisplay && (
                <button id="deleteCircle" onClick={() => deleteFile()}>
                    x
                </button>
            )}
        </Container>
    )
}

export default ImageFarm
