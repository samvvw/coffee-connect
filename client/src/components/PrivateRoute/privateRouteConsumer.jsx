import { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { UserContext } from '../../context/userContext/userContext'

const PrivateRouteConsumer = ({ children, path, ...rest }) => {
    const { token } = useContext(UserContext)
    let userType
    if (token) {
        userType = jwt_decode(token).userType
    }

    return (
        <Route
            {...rest}
            path={path}
            render={({ location }) => {
                if (token && userType === 'consumer') {
                    return children
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: '/sign-in',
                                state: { from: location },
                            }}
                        />
                    )
                }
            }}
        />
    )
}

export default PrivateRouteConsumer
