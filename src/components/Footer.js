import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="text-gray-800">
            <p>Copyright &copy; 2024</p>
            <Link to='/about'>about</Link>
        </footer>
    )
}

export default Footer;