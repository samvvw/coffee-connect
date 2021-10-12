import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/sign-up">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/sign-in">Sign In</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
