import { StyledImage } from './image.styles'

const Image = ({ urlImg, width, alt = '' }) => {
    return <StyledImage width={width} src={urlImg} alt={alt}></StyledImage>
}

export default Image
