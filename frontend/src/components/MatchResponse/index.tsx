import { ProfileDTO } from "../../models/Profile/profile";
import "./styles.css";

type Props = {
    profile: ProfileDTO;
}

export default function MatchResponse({ profile }: Props) {
    return (
        <div className="response-container">
            <img src={profile.avatar} alt={profile.name} />
            <div className="response-data-right">
                <h3>Informações</h3>
                <div className="response-detail">
                    <div className="response-textbox">
                        <span className="bold">Perfil:</span>&nbsp;<span className="blue">{profile.url}</span>
                    </div>
                    <div className="response-textbox">
                        <span className="bold">Seguidores:</span>&nbsp;{profile.followers}
                    </div>
                    <div className="response-textbox">
                        <span className="bold">Localidade:</span>&nbsp;{profile.location}
                    </div>
                    <div className="response-textbox">
                        <span className="bold">Nome:</span>&nbsp;{profile.name}
                    </div>
                </div>
            </div>
        </div>
    );
}