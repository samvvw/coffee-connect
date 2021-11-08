export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return { ...state, loading: true }

        case 'UNLOADING':
            return { ...state, loading: false }

        case 'USER_SIGN_UP':
            return {
                ...state,
                loading: false,
                error: {},
                user: {
                    userName: action.payload.user.userName,
                    firstName: action.payload.user.firstName,
                    lastName: action.payload.user.lastName,
                    email: action.payload.user.email,
                    userType: action.payload.user.userType,
                },
                token: action.payload.token,
            }

        case 'USER_SIGN_IN':
            return {
                ...state,
                loading: false,
                error: {},
                user: {
                    userName: action.payload.user.userName,
                    firstName: action.payload.user.firstName,
                    lastName: action.payload.user.lastName,
                    email: action.payload.user.email,
                    userType: action.payload.user.userType,
                    profilePicture: action.payload.user.profilePicture,
                },
                token: action.payload.token,
            }

        case 'LOGOUT':
            return {
                ...state,
                loading: false,
                error: {},
                user: {},
                token: null,
            }

        case 'REFRESH':
            return {
                ...state,
                loading: false,
                user: {
                    userName: action.payload.user.userName,
                    firstName: action.payload.user.firstName,
                    lastName: action.payload.user.lastName,
                    email: action.payload.user.email,
                    userType: action.payload.user.userType,
                    profilePicture: action.payload.user.profilePicture,
                },
                token: action.payload.token,
            }

        case 'EXPIRED':
            return {
                ...state,
                user: {},
                token: '',
            }

        case 'ERROR':
            return { ...state, loading: false, error: action.payload }

        default:
            return state
    }
}
