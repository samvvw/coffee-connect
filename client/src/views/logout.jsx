import Button from '../components/button/button'

const Logout = (props) => {
    const handleLogout = () => {
        sessionStorage.clear('token')
    }

    return <Button title="Logout" onClick={handleLogout} />
}

export default Logout
