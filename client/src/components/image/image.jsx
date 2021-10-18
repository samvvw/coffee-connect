import { StyledImage } from './image.styles'

const Image = ({ urlImg, width, height, alt = '' }) => {
    return (
        <StyledImage
            width={width}
            src={urlImg}
            alt={alt}
            height={height}
        ></StyledImage>
    )
}

export default Image
