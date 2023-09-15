import logo from "../../assets/logo.svg"
import "./styles.css"

export function Header() {
    return (
        <div className="headerContainer">
            <img src={logo} alt="logo"/>

            <nav className="actions">
                <a href="#">Twitter</a>
                <a href="#">Changelog</a>
                <a href="#">Sign in</a>
            </nav>
        </div>
    )
}