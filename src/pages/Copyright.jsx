import DocumentDownload from "../components/ui/DocumentDownload";
import "./pages.css";

export default function Copyright() {
  return (
    <main className="page">
      <h1 className="page-title">Prawa autorskie</h1>

      <DocumentDownload href="/documents/oswiadczenie_autora_2026.docx">
        Pobierz oświadczenie autora
      </DocumentDownload>
    </main>
  );
}
