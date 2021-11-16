import FullStarIcon from '@material-ui/icons/Star'
import EmptyStarIcon from '@material-ui/icons/StarOutline'
import { useState, useEffect } from 'react'

const StarsReview = ({ review = 0 }) => {
    const [stars, setStars] = useState([])

    const getStars = (review) => {
        if (review > 0 && review <= 5)
            setStars([
                ...Array(review).fill(
                    <FullStarIcon
                        fontSize="medium"
                        style={{ fill: '#000000' }}
                    />
                ),
                ...Array(5 - review).fill(<EmptyStarIcon />),
            ])
        else setStars(Array(5).fill(<EmptyStarIcon />))
    }

    useEffect(() => {
        getStars(review)
    }, [review])

    return <>{stars}</>
}

export default StarsReview
