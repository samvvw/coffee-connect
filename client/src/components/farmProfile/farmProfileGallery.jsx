import { Container } from './farmProfileGallery.styles'
import ImageFarm from './imageFarm/imageFarm'
import { UserContext } from '../../context/userContext/userContext'
import { useContext, useState } from 'react'
// import placeHolder from '../../assets/images/placeholder.png'

const FarmProfileGallery = ({ arrPicFarmGallery }) => {
    const { user } = useContext(UserContext)
    const farmID = user.farms[0]
    // const [iCount, setICount] = useState(0)
    // const [iCountMissing, setICountMissing] = useState([])

    return (
        <Container>
            <h2>Farm Media Gallery</h2>
            <div id="galleryWrapper">
                <div id="div1">
                    <ImageFarm
                        idFarm={farmID}
                        bgImage={arrPicFarmGallery[0]}
                        idContainer={1}
                        fileContainerinDB="gallery"
                    ></ImageFarm>
                </div>
                <div id="div2">
                    <ImageFarm
                        idFarm={farmID}
                        bgImage={arrPicFarmGallery[1]}
                        idContainer={2}
                        fileContainerinDB="gallery"
                    ></ImageFarm>
                </div>
                <div id="div3">
                    <ImageFarm
                        idFarm={farmID}
                        bgImage={arrPicFarmGallery[3]}
                        idContainer={3}
                        fileContainerinDB="gallery"
                    ></ImageFarm>
                </div>
                <div id="div4">
                    <ImageFarm
                        idFarm={farmID}
                        bgImage={arrPicFarmGallery[4]}
                        idContainer={4}
                        fileContainerinDB="gallery"
                    ></ImageFarm>
                </div>
                <div id="div5">
                    <ImageFarm
                        idFarm={farmID}
                        bgImage={arrPicFarmGallery[5]}
                        idContainer={5}
                        fileContainerinDB="gallery"
                    ></ImageFarm>
                </div>
                <div id="div6">
                    <ImageFarm
                        idFarm={farmID}
                        bgImage={arrPicFarmGallery[6]}
                        idContainer={6}
                        fileContainerinDB="gallery"
                    ></ImageFarm>
                </div>
                <div id="div7">
                    <ImageFarm
                        idFarm={farmID}
                        bgImage={arrPicFarmGallery[7]}
                        idContainer={7}
                        fileContainerinDB="gallery"
                    ></ImageFarm>
                </div>
                <div id="div8">
                    <ImageFarm
                        idFarm={farmID}
                        bgImage={arrPicFarmGallery[8]}
                        idContainer={8}
                        fileContainerinDB="gallery"
                    ></ImageFarm>
                </div>
                {/* {arrPicFarmGallery.map(function (img) {
                    return <img src={img} alt="" class="item" />
                })} */}

                {/* {arrPicFarmGallery.map((img) => {
                    const Img = (
                        <ImageFarm
                            idFarm={farmID}
                            bgImage={img}
                            idContainer={iCount}
                        ></ImageFarm>
                    )
                    setICount((prev) => prev + 1)
                    setICountMissing((prev) => [...prev, ''])
                    return Img
                })} */}

                {/* {iCountMissing.map(() => {
                    const Img = (
                        <ImageFarm
                            idFarm={farmID}
                            bgImage=""
                            idContainer={iCount}
                        ></ImageFarm>
                    )
                    setICount((prev) => prev + 1)
                    return Img
                })} */}
            </div>
        </Container>
    )
}

export default FarmProfileGallery
