import { profileData } from "../data/profile";
import "./pages.css";

export default function Profile() {
  return (
    <main className="page">
      <h1 className="page-title">Profil naukowy</h1>

      <div className="profile-grid">
        {profileData.map((item) => (
          <div className="profile-item" key={item.label}>
            <strong>{item.label}</strong>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
