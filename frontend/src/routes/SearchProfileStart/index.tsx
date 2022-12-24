import { NavLink } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton";
import "./styles.css"

export default function SearchProfileStart() {
    return (
        <main>
            <section id="search-profile-start">
                <h2>Desafio Github API</h2>
                <p>DevSuperior - Escola de programação</p>
                <div className="margin-button">
                    <NavLink to={"/search-profile"}>
                        <PrimaryButton buttonTitle="Começar" />
                    </NavLink>
                </div>
            </section>
        </main>
    );
}