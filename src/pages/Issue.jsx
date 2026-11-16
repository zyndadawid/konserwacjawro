import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { issues } from "../data/issues";

import ArticleCard from "../components/journal/ArticleCard";

export default function Issue() {
  const { slug } = useParams();

  const issue = issues.find((item) => item.slug === slug);

  if (!issue) {
    return (
      <main className="page">
        <h1>Numer nie istnieje</h1>
      </main>
    );
  }

  return (
    <main className="page">
      <h1 className="page-title">
        Nr {issue.number}, {issue.year}
      </h1>
      {issue.cover && (
        <img
          src={issue.cover}
          alt={`Okładka numeru ${issue.number}, ${issue.year}`}
          className="issue-cover"
        />
      )}
      {issue.pdf && (
        <p>
          <a className="pdf-link" href={issue.pdf}>
            📄 Pobierz cały numer (PDF)
          </a>
        </p>
      )}

      {issue.contentsPdf && (
        <p>
          <a className="pdf-link" href={issue.contentsPdf} target="_blank" rel="noopener noreferrer">
            📄 Spis treści (PDF)
          </a>
        </p>
      )}

      {issue.sections.map((section) => (
        <section key={section.id} className="issue-section">
          {section.title && <h2>{section.title}</h2>}

          {section.articles.length > 0 ? (
            section.articles.map((article) => (
              <Fragment key={article.id}>
                <ArticleCard article={article} />
                {article.pdf && (
                  <a
                    className="pdf-link"
                    href={article.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📄 Pobierz artykuł (PDF)
                  </a>
                )}
              </Fragment>
            ))
          ) : (
            <p className="empty-section">Brak artykułów.</p>
          )}
        </section>
      ))}
    </main>
  );
}
