import { Container } from './productDetailDescription.styles'

const ProductDetailDescription = ({ objProductDescription }) => {
    return (
        <Container>
            <h2>Product Description</h2>
            <div>
                <p>
                    Process: <span>{objProductDescription.process}</span>
                </p>
            </div>
            {/* <div>
                <p>
                    Fermentation:{' '}
                    <span>{objProductDescription.fermentation}</span>
                </p>
            </div>
            <div>
                <p>
                    Drying: <span>{objProductDescription.drying}</span>
                </p>
            </div>
            <div>
                <p>
                    Roast: <span>{objProductDescription.roast}</span>
                </p>
            </div> */}
            <div>
                <p>
                    Profile: <span>{objProductDescription.profile}</span>
                </p>
            </div>
            <div>
                <p>
                    Aroma: <span>{objProductDescription.aroma}</span>
                </p>
            </div>
            {/* <div>
                <p>
                    Flavor: <span>{objProductDescription.flavor}</span>
                </p>
            </div> */}
            <div>
                <p>
                    Acitidy: <span>{objProductDescription.acidity}</span>
                </p>
            </div>
            <div>
                <p>
                    Body: <span>{objProductDescription.body}</span>
                </p>
            </div>
            <div>
                <p>
                    Process: <span>{objProductDescription.process}</span>
                </p>
            </div>
            <div id="description">{objProductDescription.description}</div>
        </Container>
    )
}

export default ProductDetailDescription
