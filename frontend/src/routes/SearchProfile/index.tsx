import MatchResponse from "../../components/MatchResponse";
import PrimaryButton from "../../components/PrimaryButton";
import { ProfileDTO } from "../../models/Profile/profile";
import "./styles.css";

const p: ProfileDTO = {
    url: "alguma.coisa.com.br",
    followers: 250,
    location: "Brasil",
    name: "Eduardo",
    avatar: "https://avatars.githubusercontent.com/u/13897257?v=4"
}

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
                <MatchResponse profile={p} />
            </section>
        </main>
    );
}