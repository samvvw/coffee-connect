import { Container } from './imageProduct.styles'

const ImageProduct = ({
    urlImg,
    width,
    height,
    alt = '',
    widthButton,
    heightButton,
}) => {
    const importFiles = () => {
        let input = document.createElement('input')
        input.type = 'file'
        input.onchange = (_) => {
            // you can use this method to get file and perform respective operations
            let files = Array.from(input.files)
            console.log(files)
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
            <img src={urlImg} alt={alt} />
            <button onClick={() => importFiles()}>+</button>
        </Container>
    )
}

export default ImageProduct
