import PrimaryButton from "../../components/PrimaryButton";
import "./styles.css";

export default function SearchProfile() {
    return (
        <main>
            <section id="search-profile-section">
                <form id="form-search" className="profile-container">
                    <h2>Encontre um perfil Github</h2>
                    <input className="textbox" type="text" placeholder="Usuário Github" />
                    <div className="margin-top-button">
                        <PrimaryButton buttonTitle="Encontrar" />
                    </div>
                </form>
            </section>
            <section id="response-section">

            </section>
        </main>
    );
}