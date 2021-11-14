import styled from 'styled-components'

const ProductCard = (props) => {
    return (
        <article className={props.className}>
            <div className="product-img-wrapper">
                <img src={props.product.image} alt={props.product.name} />
                <span>HEART</span>
            </div>
            <div className="product-content">
                <h3>{props.product.name}</h3>
                <div>
                    <p>
                        Location: <span>{props.product.location}</span>| Taste:{' '}
                        <span>{props.product.taste}</span>
                    </p>
                    <p>
                        Roast Level: <span>{props.product.roastLevel}</span>
                    </p>
                </div>
                <div>
                    <h4>
                        ${props.product.price} CAD{' '}
                        <span>/ {props.product.size}g</span>
                    </h4>
                </div>
            </div>
        </article>
    )
}

export const DashboardProductCard = styled((props) => (
    <ProductCard {...props} />
))`
    img {
        width: 300px;
        height: auto;
    }
`
