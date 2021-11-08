import { theme } from '../../theme/theme'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useEffect, useState } from 'react'

import Button from '../button/button'
import MyFarmDashboardNewFarmForm from './myFarmDashboardNewFarmForm'

import { MyFarmWrapper } from './myFarmDashboard.style'

const MyFarmDashboard = () => {
    const [matches, setMatches] = useState(
        window.matchMedia(`(min-width: ${theme.layout.desktop})`).matches
    )
    useEffect(() => {
        const handler = (e) => setMatches(e.matches)
        window
            .matchMedia(`(min-width: ${theme.layout.desktop})`)
            .addListener(handler)
    }, [])

    /*variables to control offcanvas - new product*/
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    /*----------------------------------------------*/
    console.log(show)

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
        <MyFarmWrapper>
            <div id="divNoFarmYet">
                <p>Welcome to Qafa</p>
                <p>To get started, add your farm information.</p>
                {matches && (
                    //desktop
                    <Button title="New Farm" onClick={handleShow} />
                )}
                {/* mobile */}
                {!matches && <Button title="+" onClick={handleShow} />}
            </div>

            <>
                <Offcanvas
                    onHide={handleClose}
                    placement="end"
                    show={show}
                    style={style}
                >
                    <Offcanvas.Header style={styleHeader} closeButton>
                        <Offcanvas.Title style={styleTitle}>
                            Create a Farm Profile
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body style={styleBody}>
                        <MyFarmDashboardNewFarmForm />
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        </MyFarmWrapper>
    )
}

export default MyFarmDashboard
