import axios from "axios";
import { useState } from "react";
import MatchResponse from "../../components/MatchResponse";
import PrimaryButton from "../../components/PrimaryButton";
import { ProfileDTO } from "../../models/Profile/profile";
import "./styles.css";

type FormData = {
    sufixProfile: string;
};

export default function SearchProfile() {
    const uri = 'https://api.github.com/users/';

    const [formData, setFormData] = useState<FormData>({
        sufixProfile: ''
    });

    const [profile, setProfile] = useState<ProfileDTO>({
        avatar: '',
        followers: 0,
        location: '',
        name: '',
        url: ''
    });

    function handleChange(event: any) {
        setFormData({ ...formData, sufixProfile: event.target.value });
    };

    function handleSubmit(event: any) {
        event.preventDefault();
        getProfileDTO(formData.sufixProfile)
            .then(response => {
                setProfile({
                    url: response.data.url,
                    followers: Number(response.data.followers),
                    location: response.data.location,
                    name: response.data.name,
                    avatar: response.data.avatar_url
                })
            });
    };

    function getProfileDTO(userProfile: string): Promise<any> {
        return axios.get(uri + userProfile)
    };

    return (
        <main>
            <section id="search-profile-section">
                <form id="form-search" onSubmit={handleSubmit} className="profile-container">
                    <h2>Encontre um perfil Github</h2>
                    <input name="sufixProfile" className="textbox"
                        type="text" placeholder="Usuário Github" onChange={handleChange}
                        value={formData.sufixProfile}
                    />
                    <div className="margin-top-button">
                        <PrimaryButton buttonTitle="Encontrar" />
                    </div>
                </form>
            </section>
            <section id="response-section">
                <MatchResponse profile={profile} />
            </section>
        </main>
    );
}