import { Container } from './farmDashboardTabImages.styles'
import ImageProduct from '../../../../imageProduct/imageProduct'
import { theme } from '../../../../../theme/theme'
import Button from '../../../../button/button'

const FarmDasboardTabImages = () => {
    return (
        <Container>
            <div>
                <h2>Add product images</h2>
            </div>
            <div>
                <p>
                    Choose your top 4 photos to be featured on your product page
                    when people search for it.
                </p>
                <div id="images">
                    <ImageProduct width="100%" height="100%"></ImageProduct>

                    <div>
                        <label htmlFor="defaultImage">
                            Set as default image
                        </label>
                        <label class="containerCheckbox">
                            <input
                                type="checkbox"
                                name="defaultImage"
                                id="defaultImage"
                            />
                            <span class="checkmarkCheckbox"></span>
                        </label>
                    </div>

                    <ImageProduct width="100%" height="100%"></ImageProduct>
                    <ImageProduct width="100%" height="100%"></ImageProduct>
                    <ImageProduct width="100%" height="100%"></ImageProduct>
                </div>
                <div id="divSubmit">
                    <Button
                        title="Save Iages"
                        onClick=""
                        type="button"
                        backgroundColor={theme.pallette.secondary.c800}
                        textColor="white"
                    />
                </div>
            </div>
        </Container>
    )
}

export default FarmDasboardTabImages
