import {
    RoastLevelContainer,
    RoastLevelSubContainer,
} from './roastLevel.styles'

import Image0 from '../../../assets/images/roastLevels/Roast0.png'
import Image1 from '../../../assets/images/roastLevels/Roast1.png'
import Image2 from '../../../assets/images/roastLevels/Roast2.png'
import Image3 from '../../../assets/images/roastLevels/Roast3.png'
import Image4 from '../../../assets/images/roastLevels/Roast4.png'
import Image5 from '../../../assets/images/roastLevels/Roast5.png'

const RoastLevel = ({ roastLevelText, roastLevelValue }) => {
    const roastLevelImgs = [
        { id: 0, src: Image0 },
        { id: 1, src: Image1 },
        { id: 2, src: Image2 },
        { id: 3, src: Image3 },
        { id: 4, src: Image4 },
        { id: 5, src: Image5 },
    ]

    const image = roastLevelImgs[roastLevelValue].src

    console.log('imagen', image)
    return (
        <RoastLevelContainer>
            <h5>Product information</h5>
            <p>Roast Level</p>
            <RoastLevelSubContainer>
                <h5>{roastLevelText}</h5>
                <img src={image} alt="" />
            </RoastLevelSubContainer>
        </RoastLevelContainer>
    )
}

export default RoastLevel
