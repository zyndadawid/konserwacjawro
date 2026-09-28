import DocumentDownload from "../components/ui/DocumentDownload";

export default function ReviewForm() {
  return (
    <main className="page">
      <h1 className="page-title">Formularz recenzji</h1>

      <DocumentDownload href="/documents/Formularz_recenzji_KONSERWACJAWRO.doc">
        Pobierz formularz recenzji
      </DocumentDownload>
    </main>
  );
}
