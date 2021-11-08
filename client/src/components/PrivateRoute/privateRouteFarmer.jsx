import { useContext, useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { UserContext } from '../../context/userContext/userContext'

const PrivateRouteFarmer = ({ children, path, ...rest }) => {
    const { token, user } = useContext(UserContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [])

    return (
        <>
            {!loading && (
                <Route
                    {...rest}
                    path={path}
                    render={({ location }) => {
                        if (token && user.userType === 'farmer') {
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
            )}
        </>
    )
}

export default PrivateRouteFarmer
