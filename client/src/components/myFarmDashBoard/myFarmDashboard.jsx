import { theme } from '../../theme/theme'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../context/userContext/userContext'
import { useHistory } from 'react-router-dom'
import Button from '../button/button'
import MyFarmDashboardNewFarmForm from './myFarmDashboardNewFarmForm'

import { MyFarmWrapper } from './myFarmDashboard.style'
// import { ThemeConsumer } from 'styled-components'

const MyFarmDashboard = () => {
    const history = useHistory()
    const { user } = useContext(UserContext)

    //check if the user has a farm created already, if so, user needs to be redirected to farmProfile
    if (user.farms.length > 0) {
        history.push('/farm-profile')
    }

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

    /*variables to control offcanvas - new product*/
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    /*----------------------------------------------*/
    // console.log(show)

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
            // border: '1px solid gray',
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
                    <Button
                        title="New Farm"
                        onClick={handleShow}
                        borderColor={theme.pallette.primary[500]}
                    />
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
                        <MyFarmDashboardNewFarmForm setShow={setShow} />
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        </MyFarmWrapper>
    )
}

export default MyFarmDashboard
