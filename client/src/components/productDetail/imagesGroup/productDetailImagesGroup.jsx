import {
    ImageGroupParent,
    ImageGroupChild,
} from './productDetailImagesGroup.styles'

import Image from '../../image/image'

const ProductDetailImageGroup = ({ urlsArray }) => {
    return (
        <ImageGroupParent>
            <ImageGroupChild gridColumn="1/5" gridRow="1/4">
                <Image
                    urlImg={urlsArray.urlsArray[0]}
                    height="100%"
                    width="100%"
                ></Image>
            </ImageGroupChild>
            <ImageGroupChild gridColumn="1/2" gridRow="4/5">
                <Image
                    urlImg={urlsArray.urlsArray[1]}
                    height="100%"
                    width="100%"
                ></Image>
            </ImageGroupChild>
            <ImageGroupChild gridColumn="2/3" gridRow="4/5">
                <Image
                    urlImg={urlsArray.urlsArray[2]}
                    height="100%"
                    width="100%"
                ></Image>
            </ImageGroupChild>
            <ImageGroupChild gridColumn="3/4" gridRow="4/5">
                <Image
                    urlImg={urlsArray.urlsArray[3]}
                    height="100%"
                    width="100%"
                ></Image>
            </ImageGroupChild>
            <ImageGroupChild gridColumn="4/5" gridRow="4/5">
                <Image
                    urlImg={urlsArray.urlsArray[4]}
                    height="100%"
                    width="100%"
                ></Image>
            </ImageGroupChild>
        </ImageGroupParent>
    )
}

export default ProductDetailImageGroup
