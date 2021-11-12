import { Container } from './farmProfileGallery.styles'
import ImageFarm from './imageFarm/imageFarm'
import { UserContext } from '../../context/userContext/userContext'
import { useContext, useState } from 'react'

const FarmProfileGallery = ({ arrPicFarmGallery }) => {
    const { user } = useContext(UserContext)
    const farmID = user.farms[0]
    const [iCount, setICount] = useState(0)
    const [iCountMissing, setICountMissing] = useState([])

    return (
        <Container>
            <h2>Farm Media Gallery</h2>
            <div id="galleryWrapper">
                {/* {arrPicFarmGallery.map(function (img) {
                    return <img src={img} alt="" class="item" />
                })} */}

                {arrPicFarmGallery.map((img) => {
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
                })}

                {iCountMissing.map(() => {
                    const Img = (
                        <ImageFarm
                            idFarm={farmID}
                            bgImage=""
                            idContainer={iCount}
                        ></ImageFarm>
                    )
                    setICount((prev) => prev + 1)
                    return Img
                })}
            </div>
        </Container>
    )
}

export default FarmProfileGallery
