// import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useEffect, useState } from 'react'
import { theme } from '../../../theme/theme'
import { CanvasContainer } from './farmDashboardOffcanvas.style'
import OffCanvasTabs from './farmDashboardTabs/farmDashboardTabs'

const OffCanvas = ({
    name,
    handleClose,
    handleShow,
    show,
    setTotalProducts,
    ...props
}) => {
    // const [show, setShow] = useState(false)

    // const handleClose = () => setShow(false)
    // const handleShow = () => setShow(true)

    const [matches, setMatches] = useState(
        window.matchMedia(`(min-width: ${theme.layout.desktop})`).matches
    )
    useEffect(() => {
        const mediaQuery = window.matchMedia(
            `(min-width: ${theme.layout.desktop})`
        )

        mediaQuery.onchange = () => {
            setMatches(mediaQuery.matches)
        }
    }, [])

    let style, styleHeader, styleTitle, styleBody
    styleBody = { padding: 0 }
    if (matches) {
        //desktop
        style = { width: '65%' }
        styleHeader = {
            backgroundColor: 'white',
            color: theme.pallette.primary[500],
            display: 'grid',
            gridTemplateColumns: '9fr 1fr',
            border: '1px solid gray',
        }
        styleTitle = {
            textAlign: 'left',
        }
    } else {
        //mobile
        style = { width: '100%' }
        styleHeader = {
            backgroundColor: theme.pallette.primary[500],
            color: 'white',
            display: 'grid',
            gridTemplateColumns: '9fr 1fr',
        }
        styleTitle = {
            textAlign: 'center',
        }
    }

    return (
        <CanvasContainer>
            <Offcanvas
                placement="end"
                style={style}
                show={show}
                onHide={handleClose}
                {...props}
            >
                <Offcanvas.Header style={styleHeader} closeButton>
                    <Offcanvas.Title style={styleTitle}>
                        Add New Product
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={styleBody}>
                    <OffCanvasTabs
                        onHide={handleClose}
                        setTotalProducts={setTotalProducts}
                    />
                </Offcanvas.Body>
            </Offcanvas>
        </CanvasContainer>
    )
}

export default OffCanvas
