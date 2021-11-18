import { StyleTriCardHolder } from './triCardHolder.styles'
import imgTriCard1 from '../../assets/images/home-3card-1.png'
import imgTriCard2 from '../../assets/images/home-3card-2.png'
import imgTriCard3 from '../../assets/images/home-3card-3.png'
import iconTriCard1 from '../../assets/images/home-3card-icon-1.png'
import iconTriCard2 from '../../assets/images/home-3card-icon-2.png'
import iconTriCard3 from '../../assets/images/home-3card-icon-3.png'


const TriCardHolder = () => {

    const cardContents = [
        {
            id: 0,
            img: imgTriCard1,
            icon: iconTriCard1,
            heading: "Coffee Marketplace",
            paragraph: 'Experience better taste. Get freshly sourced specialty coffee directly from local farmers - from the farm to your cup.'
        },
        {
            id: 1,
            img: imgTriCard2,
            icon: iconTriCard2,
            heading: "Farmer's Dashboard",
            paragraph: 'Our comprehensive platform powers your business. From product listing to farm management, we’ve got you covered.'
        },
        {
            id: 2,
            img: imgTriCard3,
            icon: iconTriCard3,
            heading: "User's Dashboard",
            paragraph: 'We make specialty coffee accessible. Our platform is designed to help guide users to the best coffee bean.'
        },

    ]

    return (
        <>
            <StyleTriCardHolder>

                {cardContents.map(content => 
                <li key={content.id}>
                    <div className="image">
                        <img className="img" src={content.img} alt={content.heading} />
                        <img className="icon" src={content.icon} alt={content.heading} />
                    </div>
                    <div className="text">
                        <h5>{content.heading}</h5>
                        <p>{content.paragraph}</p>
                    </div>
                </li>)}

            </StyleTriCardHolder>
        </>
    )
}

export default TriCardHolder
