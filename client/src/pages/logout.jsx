import { useHistory } from 'react-router-dom'
import Button from '../components/button'

const Logout = (props) => {
    let history = useHistory()

    const handleLogout = () => {
        sessionStorage.clear('token')
        history.push('/')
    }

    return <Button title="Logout" onClick={handleLogout} />
}

export default Logout
