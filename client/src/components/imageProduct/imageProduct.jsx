import { Container } from './imageProduct.styles'
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../context/userContext/userContext'
import { theme } from '../../theme/theme'

import blankmg from '../../assets/images/blankImg.jpg'
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
    setTotalProducts,
}) => {
    const [bgImage, setBgImage] = useState(urlImg)
    const { user } = useContext(UserContext)
    const farmID = user.farms[0]

    // variables to control centered button
    const [centeredCircleDisplay, setCenteredCircleDisplay] = useState(false)

    // variables to control delete button
    const [deleteCircleDisplay, setDeleteCircleDisplay] = useState(false)

    // variables to control dashed border for images
    const [imgBorder, setImgBorder] = useState({
        border: `2px dashed ${theme.pallette.primary[500]}`,
    })

    useEffect(() => {
        if (urlImg) {
            setCenteredCircleDisplay(false)
            setDeleteCircleDisplay(true)
            setImgBorder({ border: `none` })
        } else {
            setCenteredCircleDisplay(true)
            setDeleteCircleDisplay(false)
            setImgBorder({
                border: `2px dashed ${theme.pallette.primary[500]}`,
            })
        }
    }, [])
    const importFiles = (idContainer) => {
        let input = document.createElement('input')
        input.type = 'file'
        input.onchange = (_) => {
            // you can use this method to get file and perform respective operations
            let files = Array.from(input.files)

            const productId = idProduct
            const token = localStorage.getItem('token')
            const form = new FormData()
            form.append('productFile', files[0])
            form.append('token', token)
            const data = { method: 'post', body: form }

            fetch(`/api/farm/${farmID}/product/${productId}/pictures`, data)
                .then((res) => {
                    res.json().then((data) => {
                        setBgImage(data.picture[+idContainer])
                        setTotalProducts((prev) => prev + 1)
                    })
                    setCenteredCircleDisplay(false)
                    setDeleteCircleDisplay(true)
                    setImgBorder({ border: `none` })
                })
                .catch((error) => console.log(error))
        }
        input.click()
    }

    const deleteFile = () => {
        const form = new FormData()
        const token = localStorage.getItem('token')
        form.append('token', token)
        form.append('deleteUrl', bgImage)
        const data = { method: 'delete', body: form }

        fetch(`/api/farm/${farmID}/product/${idProduct}/pictures`, data)
            .then((res) => {
                setCenteredCircleDisplay(true)
                setDeleteCircleDisplay(false)
                setBgImage(blankmg)
                setTotalProducts((prev) => prev + 1)
                setImgBorder({
                    border: `2px dashed ${theme.pallette.primary[500]}`,
                })
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
            <img src={bgImage || urlImg} alt={alt} style={imgBorder} />
            {centeredCircleDisplay && (
                <button
                    id="centeredCircle"
                    onClick={() => importFiles(idContainer)}
                    disabled={tabImagesDisabled}
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

export default ImageProduct
