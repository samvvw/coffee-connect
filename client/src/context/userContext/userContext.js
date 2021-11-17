import { createContext, useReducer, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import dayjs from 'dayjs'
import { UserReducer } from './userReducer'
import axios from 'axios'
const initialState = {
    user: {},
    error: {},
    loading: false,
    token: '',
}

export const UserContext = createContext(initialState)

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState)

    useEffect(() => {
        verifyTokenInStorage()
    }, [])

    const signUp = async (user) => {
        try {
            // dispatch({ type: 'LOADING' })
            const response = await fetch('/api/user/sign-up', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            })

            if (response.status === 201) {
                const data = await response.json()
                localStorage.setItem('token', data.token)
                const decoded = jwt_decode(data.token)
                dispatch({
                    type: 'USER_SIGN_UP',
                    payload: { user: decoded, token: data.token },
                })
            }
            // dispatch({ type: 'UNLOADING' })
            return response
        } catch (err) {
            dispatch({ type: 'ERROR', payload: err })
            console.log('User cannot be registered', err)
        }
    }

    const signIn = async (user) => {
        try {
            // dispatch({ type: 'LOADING' })
            const response = await fetch('/api/user/sign-in', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            })

            if (response.status === 200) {
                const data = await response.json()
                localStorage.setItem('token', data.token)
                const decoded = jwt_decode(data.token)
                dispatch({
                    type: 'USER_SIGN_IN',
                    payload: { user: decoded, token: data.token },
                })
            }
            // dispatch({ type: 'UNLOADING' })
            return response
        } catch (err) {
            dispatch({ type: 'ERROR', payload: err })
            console.log('User cannot be logged in', err)
        }
    }

    const updateUser = async () => {
        try {
            const token = localStorage.getItem('token')
            const decoded = jwt_decode(token)
            axios({
                method: 'post',
                url: '/api/user',
                headers: { 'Content-type': 'application/json' },
                data: { token: token },
            })
                .then((res) => {
                    dispatch({
                        type: 'UPDATE_USER',
                        payload: {
                            token: token,
                            user: res.data.user,
                            userId: decoded.id,
                        },
                    })
                })
                .catch((error) => console.log('error getting user', error))
        } catch (err) {}
    }

    const verifyTokenInStorage = () => {
        // dispatch({ type: 'LOADING' })
        const token = localStorage.getItem('token')
        if (token) {
            const decoded = jwt_decode(token)
            axios({
                method: 'post',
                url: '/api/user',
                headers: { 'Content-type': 'application/json' },
                data: { token: token },
            })
                .then((res) => {
                    dispatch({
                        type: 'UPDATE_USER',
                        payload: {
                            token: token,
                            user: res.data.user,
                            userId: decoded.id,
                        },
                    })
                })
                .catch((error) => console.log('error getting user', error))
        } else {
            dispatch({ type: 'UNLOADING' })
        }
    }

    const signOut = () => {
        // dispatch({ type: 'LOADING' })
        localStorage.clear()
        dispatch({ type: 'LOGOUT' })
    }

    const isTokenExpired = () => {
        const token = localStorage.getItem('token')
            ? localStorage.getItem('token')
            : ''
        let isExpired = true
        if (token) {
            const user = jwt_decode(token)
            isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1
            if (isExpired) {
                console.log('TOKEN EXPIRED!')
                dispatch({ type: 'EXPIRED' })
                localStorage.clear()
            }
        }

        return isExpired
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
                signOut,
                verifyTokenInStorage,
                isTokenExpired,
                updateUser,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
