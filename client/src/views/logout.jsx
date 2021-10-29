import Button from '../components/button/button'

const Logout = (props) => {
    const handleLogout = () => {
        localStorage.removeItem('token')
    }

    return <Button title="Logout" onClick={handleLogout} />
}

export default Logout
