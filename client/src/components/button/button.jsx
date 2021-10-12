const Button = ({ title, onClick, type = 'button' }) => {
    return (
        <button type={type} onClick={onClick}>
            {title}
        </button>
    )
}

export default Button
