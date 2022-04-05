import logo from '../images/ironhack-logo-xs.png';
import menuIcon from '../images/menu-top-xs.png';
import './style.css'

const AppNavBar = () => {
    return (
        <nav>
            <img src={logo} alt="logo ironhack"></img>
            <img src={menuIcon} alt="burger menu icone"></img>
        </nav>
    )
}

export default AppNavBar;