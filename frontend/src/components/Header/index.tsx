import { NavLink } from "react-router-dom"
import "./styles.css"

export default function Header() {
    return (
        <header>
            <NavLink to="/">
                <h1>Github API</h1>
            </NavLink>
        </header>
    );
}