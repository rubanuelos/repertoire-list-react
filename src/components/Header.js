import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ onAdd, showAdd }) => {
    const location = useLocation();

    return (
        <header className="header justify-self-center w-min">
            {location.pathname === '/' && <Button color={showAdd ? "rgb(148 163 184)" : "rgb(203 213 225)"} text={showAdd ? "[-]" : "[+]"} onClick={onAdd} />}
        </header>
    )
}

export default Header