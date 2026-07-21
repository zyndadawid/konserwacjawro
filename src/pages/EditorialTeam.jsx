import { editorialTeamData } from "../data/editorialTeam";
import "./pages.css";

export default function EditorialTeam() {
  return (
    <main className="page">
      <h1 className="page-title">Zespół redakcyjny</h1>

      <article className="profile-grid">
        {editorialTeamData.map((member) => (
          <div className="profile-member" key={member.name}>
            {/* <img src={member.photo} alt={member.name}/> */}
            <h2>{member.name}</h2>
            <p>{member.description}</p>
          </div>
        ))}
      </article>
    </main>
  );
}
