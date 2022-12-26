import axios from "axios";
import { useEffect, useState } from "react";
import MatchResponse from "../../components/MatchResponse";
import NoMatchResponse from "../../components/NoMatchResponse";
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

    const [conditions, setConditions] = useState({
        showResponse: false,
        noContent: false
    });

    const [click, setClick] = useState(0);

    const [profile, setProfile] = useState<ProfileDTO>({
        avatar: '',
        followers: 0,
        location: '',
        name: '',
        url: ''
    });

    function handleImputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name
        setFormData({ ...formData, [name]: value })
    };

    function handleSubmit(event: any) {
        event.preventDefault();
        setClick(click + 1);
        formData.sufixProfile === ''
            ? setConditions({ ...conditions, showResponse: false })
            : setConditions({ ...conditions, showResponse: true })
    };

    useEffect(() => {
        if (formData.sufixProfile != '')
            axios.get(uri + formData.sufixProfile)
                .then(response => {
                    console.log(response.data);
                    setConditions({ ...conditions, noContent: false });
                    setProfile({
                        avatar: response.data.avatar_url,
                        followers: Number(response.data.followers),
                        location: response.data.location,
                        name: response.data.name,
                        url: response.data.url
                    });
                }).catch(() => setConditions({ ...conditions, noContent: true }));
    }, [click]);

    function getProfileDTO(userProfile: string): Promise<any> {
        return axios.get(uri + userProfile)
    };

    return (
        <main>
            <section id="search-profile-section">
                <form id="form-search" onSubmit={handleSubmit} className="profile-container">
                    <h2>Encontre um perfil Github</h2>
                    <input name="sufixProfile" className="textbox"
                        type="text" placeholder="Usuário Github" onChange={handleImputChange}
                        value={formData.sufixProfile}
                    />
                    <div className="margin-top-button">
                        <PrimaryButton buttonTitle="Encontrar" />
                    </div>
                </form>
            </section>
            <section id="response-section">
                {
                    !conditions.showResponse
                        ? (<></>)
                        : conditions.noContent
                            ? (<NoMatchResponse />)
                            : (<MatchResponse profile={profile} />)
                }
            </section>
        </main>
    );
}