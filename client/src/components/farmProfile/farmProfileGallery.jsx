import { Container } from './farmProfileGallery.styles'
import ImageFarm from './imageFarm/imageFarm'

const FarmProfileGallery = ({ arrPicFarmGallery }) => {
    // console.log(arrPicFarmGallery[0].image)
    return (
        <Container>
            <h2>Farm Media Gallery</h2>
            <div id="galleryWrapper">
                <div id="div1">
                    <ImageFarm
                        urlImage={arrPicFarmGallery[0]?.image}
                        idImg={arrPicFarmGallery[0]?._id}
                        idContainer={1}
                        fileContainerinDB="gallery"
                    ></ImageFarm>
                </div>
                <div id="div2">
                    <ImageFarm
                        urlImage={arrPicFarmGallery[1]?.image}
                        idImg={arrPicFarmGallery[1]?._id}
                        idContainer={2}
                        fileContainerinDB="gallery"
                    ></ImageFarm>
                </div>
                <div id="div3">
                    <ImageFarm
                        urlImage={arrPicFarmGallery[2]?.image}
                        idImg={arrPicFarmGallery[2]?._id}
                        idContainer={3}
                        fileContainerinDB="gallery"
                    ></ImageFarm>
                </div>
                <div id="div4">
                    <ImageFarm
                        urlImage={arrPicFarmGallery[3]?.image}
                        idImg={arrPicFarmGallery[3]?._id}
                        idContainer={4}
                        fileContainerinDB="gallery"
                    ></ImageFarm>
                </div>
                <div id="div5">
                    <ImageFarm
                        urlImage={arrPicFarmGallery[4]?.image}
                        idImg={arrPicFarmGallery[4]?._id}
                        idContainer={5}
                        fileContainerinDB="gallery"
                    ></ImageFarm>
                </div>
                <div id="div6">
                    <ImageFarm
                        urlImage={arrPicFarmGallery[5]?.image}
                        idImg={arrPicFarmGallery[5]?._id}
                        idContainer={6}
                        fileContainerinDB="gallery"
                    ></ImageFarm>
                </div>
                <div id="div7">
                    <ImageFarm
                        urlImage={arrPicFarmGallery[6]?.image}
                        idImg={arrPicFarmGallery[6]?._id}
                        idContainer={7}
                        fileContainerinDB="gallery"
                    ></ImageFarm>
                </div>
                <div id="div8">
                    <ImageFarm
                        urlImage={arrPicFarmGallery[7]?.image}
                        idImg={arrPicFarmGallery[7]?._id}
                        idContainer={8}
                        fileContainerinDB="gallery"
                    ></ImageFarm>
                </div>
            </div>
        </Container>
    )
}

export default FarmProfileGallery
