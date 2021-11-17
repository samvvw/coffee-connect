import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext/userContext'
import { Container } from './account.styles'

const Account = () => {
    const { user } = useContext(UserContext)

    const formatDate = (value) => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ]
        const date = new Date(value)
        return `${
            months[date.getMonth()]
        } ${date.getDate()}, ${date.getFullYear()}`
    }

    return (
        <>
            {user?.firstName && (
                <Container type={user.userType}>
                    <h1>Account</h1>

                    <div className="profile">
                        <div className="profile__badge">
                            <span>
                                {user.firstName.split('')[0].toUpperCase()}
                            </span>
                        </div>
                        <div className="profile__info">
                            <p className="profile__info__name">{`${user.firstName} ${user.lastName}`}</p>
                            <p className="profile__info__date">
                                Joined{' '}
                                {user?.createdAt && formatDate(user.createdAt)}
                            </p>
                        </div>
                    </div>

                    <div className="account">
                        <p className="account__label">Account Status</p>
                        <p className="account__type">Free</p>
                    </div>
                    <div className="actions">
                        <p className="actions__link">Change Password</p>
                        <p className="actions__link">Privacy Policy</p>
                        <p className="actions__link">Delete my account</p>
                    </div>
                </Container>
            )}
        </>
    )
}

export default Account
