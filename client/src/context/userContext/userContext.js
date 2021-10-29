import { createContext, useReducer } from 'react'
import jwt_decode from 'jwt-decode'
import { UserReducer } from './userReducer'

const initialState = {
    user: {},
    error: {},
    loading: false,
    token: '',
}

export const UserContext = createContext(initialState)

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState)

    const signUp = async (user) => {
        try {
            dispatch({ type: 'LOADING' })
            const response = await fetch('/api/user/sign-up', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            })

            const data = await response.json()
            localStorage.setItem('token', data.token)
            const decoded = jwt_decode(data.token)
            dispatch({
                type: 'USER_SIGN_UP',
                payload: { user: decoded, token: data.token },
            })
        } catch (err) {
            dispatch({ type: 'ERROR', payload: err })
            console.log('User cannot be registered', err)
        }
    }

    const signIn = async (user) => {
        try {
            dispatch({ type: 'LOADING' })
            const response = await fetch('/api/user/sign-in', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            })

            const data = await response.json()
            localStorage.setItem('token', data.token)
            const decoded = jwt_decode(data.token)
            dispatch({
                type: 'USER_SIGN_IN',
                payload: { user: decoded, token: data.token },
            })
        } catch (err) {
            dispatch({ type: 'ERROR', payload: err })
            console.log('User cannot be logged in', err)
        }
    }

    return (
        <UserContext.Provider
            value={{
                user: state.user,
                error: state.error,
                loading: state.loading,
                token: state.token,
                signUp,
                signIn,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
