import { useParams } from "react-router-dom";
import { rewieverLists } from "../data/rewievers";

export default function Reviewers() {
  const { slug } = useParams();

  const rewieversList = rewieverLists.find((item) => item.slug === slug);

  if (!rewieversList) {
    return (
      <main className="page">
        <h1>Lista nie istnieje</h1>
      </main>
    );
  }

  return (
    <main className="page">
      <h1 className="page-title">
        Nr {rewieversList.number}, {rewieversList.year}
      </h1>

      {rewieversList.rewievers.length > 0 ? (
        rewieversList.rewievers.map((rewiever) => (
          <section key={rewiever} className="issue-section">
            <h2>{rewiever}</h2>{" "}
          </section>
        ))
      ) : (
        <p className="empty-section">Brak recenzentów</p>
      )}
    </main>
  );
}
