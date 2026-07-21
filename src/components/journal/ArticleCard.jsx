import "./articleCard.css";

export default function ArticleCard({ article }) {
  return (
    <article className="article-card">
      <h3>{article.title}</h3>

      <p>{article.authors.map((author) => author.name).join(", ")}</p>

      {article.DOI && <small>DOI: {article.DOI}</small>}
    </article>
  );
}
