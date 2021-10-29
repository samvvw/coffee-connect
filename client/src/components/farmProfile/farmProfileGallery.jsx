import { Container } from './farmProfileGallery.styles'

const FarmProfileGallery = ({ arrPicFarmGallery }) => {
    return (
        <Container>
            <h2>Farm Media Gallery</h2>
            <div id="galleryWrapper">
                {arrPicFarmGallery.map(function (img) {
                    return <img src={img} alt="" class="item" />
                })}
            </div>
        </Container>
    )
}

export default FarmProfileGallery
