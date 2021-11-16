import Button from '../button/button'

const Logout = (props) => {
    const handleLogout = () => {
        localStorage.removeItem('token')
    }

    return <Button title="Logout" onClick={handleLogout} />
}

export default Logout
