import { StyledImage } from './image.styles'

const Image = ({ urlImg, width, height, alt = '', border, padding }) => {
    return (
        <StyledImage
            width={width}
            src={urlImg}
            alt={alt}
            height={height}
            border={border} 
            padding={padding}
        ></StyledImage>
    )
}

export default Image
