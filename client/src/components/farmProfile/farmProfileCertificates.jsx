import { Container } from './farmProfileCerificates.styles'
import ImageFarm from './imageFarm/imageFarm'

const FarmProfileCertificates = ({ arrImgCertificates }) => {
    // if there's no certificates, this component won't show
    let display = ''
    if (arrImgCertificates.length === 0) display = 'none'
    else display = 'flex'

    return (
        <Container display={display}>
            <h5>Certificates</h5>
            <div id="certificatesContainer">
                <ImageFarm
                    fileContainerinDB="farmCertificate"
                    width="102px"
                    height="102px"
                    urlImage={arrImgCertificates[0]}
                ></ImageFarm>

                <ImageFarm
                    fileContainerinDB="farmCertificate"
                    width="102px"
                    height="102px"
                    urlImage={arrImgCertificates[1]}
                ></ImageFarm>
            </div>
        </Container>
    )
}

export default FarmProfileCertificates
