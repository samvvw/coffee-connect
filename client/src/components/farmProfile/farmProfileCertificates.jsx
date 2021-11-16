import { Container } from './farmProfileCerificates.styles'

const FarmProfileCertificates = ({ arrImgCertificates }) => {
    // if there's no certificates, this component won't show
    let display = ''
    if (arrImgCertificates.length === 0) display = 'none'
    else display = 'flex'

    return (
        <Container display={display}>
            <h5>Certificates</h5>
            <div id="certificatesContainer">
                {arrImgCertificates.map(function (url) {
                    return (
                        <div>
                            <img src={url} alt="" />
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default FarmProfileCertificates
