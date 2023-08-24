import logo from "../utils/logo.png"
import eye_button from "../utils/eye_button.png"
const Nav = () => {
    return (
        <nav className="nav-bar">
            <img className="logo" src={logo} alt="logo-img"></img>
            <ul className="menu-list">
                <li>SIGN IN</li>
                <li>LEGAL</li>
                <li>LICENSES</li>
                <li>SECURITY</li>
                <li>CAREERS</li>
                <li>PRESS</li>
                <li>SUPPORT</li>
                <li>STATUS</li>
                <li>CODEBLOG</li>
            </ul>
            <img className="eye-button" src={eye_button} alt="eye-button_img"></img>
        </nav>
    )
}

export default Nav;