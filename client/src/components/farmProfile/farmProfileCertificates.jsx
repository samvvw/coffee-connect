import { Container } from './farmProfileCerificates.styles'
import ImageFarm from './imageFarm/imageFarm'

const FarmProfileCertificates = ({ arrImgCertificates, farmID }) => {
    // if there's no certificates, this component won't show
    let display = ''
    if (arrImgCertificates.length === 0) display = 'none'
    else display = 'flex'

    return (
        <Container display={display}>
            <h5>Certificates</h5>
            <div id="certificatesContainer">
                {/* {arrImgCertificates.map(function (url) {
                    return (
                        <div>
                            <img src={url} alt="" />
                        </div>
                    )
                })} */}
                <ImageFarm
                    idFarm={farmID}
                    bgImage={
                        !arrImgCertificates[0] === 'undefined'
                            ? arrImgCertificates[0]
                            : ''
                    }
                    fileContainerinDB="certificate"
                    width="102px"
                    height="102px"
                ></ImageFarm>

                <ImageFarm
                    idFarm={farmID}
                    bgImage={
                        !arrImgCertificates[1] === 'undefined'
                            ? arrImgCertificates[1]
                            : ''
                    }
                    fileContainerinDB="certificate"
                    width="102px"
                    height="102px"
                ></ImageFarm>
            </div>
        </Container>
    )
}

export default FarmProfileCertificates
