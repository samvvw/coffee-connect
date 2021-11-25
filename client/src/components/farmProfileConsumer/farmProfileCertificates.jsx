import { Container } from './farmProfileCerificates.styles'

import placeholder from '../../assets/images/placeholder.png'

const FarmProfileCertificates = ({ arrImgCertificates }) => {
    // if there's no certificates, this component won't show
    let display = ''
    if (arrImgCertificates.length === 0) display = 'none'
    else display = 'flex'

    console.log('IMAGEN!~', arrImgCertificates[0])

    return (
        <Container display={display}>
            <h5>Certificates</h5>
            <div id="certificatesContainer">
                <div>
                    <img
                        src={
                            arrImgCertificates?.[0]
                                ? arrImgCertificates[0]
                                : placeholder
                        }
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src={
                            arrImgCertificates?.[1]
                                ? arrImgCertificates[1]
                                : placeholder
                        }
                        alt=""
                    />
                </div>
            </div>
        </Container>
    )
}

export default FarmProfileCertificates
