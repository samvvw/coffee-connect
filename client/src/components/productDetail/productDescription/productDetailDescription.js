import { Description, Heading, Link } from './productDetailDescription.styles'

const ProductDetailDescription = (href) => {
    return (
        <div>
            <Heading>Product Description</Heading>
            <Description>
                Tellus sit ipsum sit iaculis tortor aliquet egestas. Tempus hac
                fames sagittis felis curabitur ultricies. Enim at adipiscing
                gravida diam venenatis, pellentesque metus montes. Mollis
                bibendum leo, pulvinar blandit gravida nec. Adipiscing sed
                pellentesque cras massa urna lectus leo, ut. Eget dapibus eros,
                ullamcorper vestibulum vel congue proin.
            </Description>
            <Link href={href.href}>More Info</Link>
        </div>
    )
}

export default ProductDetailDescription
