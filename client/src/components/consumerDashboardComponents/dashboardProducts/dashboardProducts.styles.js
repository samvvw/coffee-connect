import styled from 'styled-components'
import FavoriteIcon from '@material-ui/icons/Favorite'

const ProductCard = (props) => {
    return (
        <article className={props.className}>
            <div className="product-img-wrapper">
                <img src={props.product.image} alt={props.product.name} />
                <span onClick={props.handleLike}>
                    <FavoriteIcon />
                </span>
            </div>
            <div className="product-content">
                <h3>{props.product.name}</h3>
                <div className="product-properties">
                    <p>
                        Location: <span>{props.product.location}</span>| Taste:{' '}
                        <span>{props.product.taste}</span>
                    </p>
                    <p>
                        Roast Level: <span>{props.product.roastLevel}</span>
                    </p>
                </div>
                <div className="product-price">
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
    border-radius: 8px;
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme.pallette.black[100]};
    overflow: hidden;
    .product-img-wrapper {
        position: relative;
        height: 216px;
        width: 368px;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center left;
        }
        span {
            width: 42px;
            height: 42px;
            border-radius: 50%;
            background-color: #fff;
            border: 1px solid ${({ theme }) => theme.pallette.black[50]};
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        svg {
            width: 24px;
            height: 24px;
            fill: red;
        }
        span:hover {
            background-color: #f0f0f0;
        }
    }
    .product-content {
        padding: 1rem;
        h3 {
            font-size: 1.125rem;
            font-weight: bold;
            &::first-letter {
                text-transform: capitalize;
            }
        }
        .product-properties {
            p {
                font-size: 0.875rem;
                font-weight: 500;
                color: ${({ theme }) => theme.pallette.black[400]};
                span {
                    color: ${({ theme }) => theme.pallette.black[900]};
                }
            }
        }
        .product-price {
            h4 {
                font-size: 1rem;
                font-weight: bold;
                span {
                    font-weight: normal;
                }
            }
        }
    }
`
