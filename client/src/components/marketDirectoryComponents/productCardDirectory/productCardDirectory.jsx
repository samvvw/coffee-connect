import React from 'react'
import placeholder from '../../../assets/images/placeholder.png'
import { Container } from './productCardDirectory.styles'

const productCardDirectory = ({ data }) => {
    return (
        <Container>
            <div className="image-container">
                <img src={placeholder} alt="" />
            </div>
            <div className="product">
                <p className="product__title">{data.name}</p>
                <div className="product__metadata">
                    <p className="product__metadata__location">
                        Origin: <span>{data.origin} </span>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                    </p>
                    <p className="product__metadata__taste">
                        Location: <span>{data.location} </span>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                    </p>
                    <p className="product__metadata__roastLevel">
                        Altitude: <span>{data.altitude}</span>
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default productCardDirectory
