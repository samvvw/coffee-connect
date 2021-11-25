import { Container } from './farmProfileGallery.styles'
import placeholder from '../../assets/images/placeholder.png'
const FarmProfileGallery = ({ arrPicFarmGallery, farmID }) => {
    return (
        <Container>
            <h2>Farm Media Gallery</h2>
            <div id="galleryWrapper">
                <div id="div1">
                    <div>
                        <img
                            src={arrPicFarmGallery[0]?.image || placeholder}
                            alt=""
                        />
                    </div>
                </div>
                <div id="div2">
                    <div>
                        <img
                            src={arrPicFarmGallery[1]?.image || placeholder}
                            alt=""
                        />
                    </div>
                </div>
                <div id="div3">
                    <div>
                        <img
                            src={arrPicFarmGallery[2]?.image || placeholder}
                            alt=""
                        />
                    </div>
                </div>
                <div id="div4">
                    <div>
                        <img
                            src={arrPicFarmGallery[3]?.image || placeholder}
                            alt=""
                        />
                    </div>
                </div>
                <div id="div5">
                    <div>
                        <img
                            src={arrPicFarmGallery[4]?.image || placeholder}
                            alt=""
                        />
                    </div>
                </div>
                <div id="div6">
                    <div>
                        <img
                            src={arrPicFarmGallery[5]?.image || placeholder}
                            alt=""
                        />
                    </div>
                </div>
                <div id="div7">
                    <div>
                        <img
                            src={arrPicFarmGallery[6]?.image || placeholder}
                            alt=""
                        />
                    </div>
                </div>
                <div id="div8">
                    <div>
                        <img
                            src={arrPicFarmGallery[7]?.image || placeholder}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default FarmProfileGallery
