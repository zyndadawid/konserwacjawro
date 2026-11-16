import { footer } from "../data/footer";
import "./pages.css";

export default function Contact() {
  return (
    <main className="page contact-page">
      <h1 className="page-title">Kontakt</h1>
      <section className="contact-details" aria-labelledby="contact-editorial-office">
        <h2 id="contact-editorial-office">Redakcja czasopisma</h2>
        <p className="contact-journal">KonserwacjaWRO. Szkło. Witraż. Ceramika</p>
        <address>
          Katedra Konserwacji i Restauracji Ceramiki i Szkła
          <br />
          {footer.institution.name}
        </address>
        <p>W sprawach związanych z czasopismem prosimy o kontakt mailowy z redakcją.</p>
        <a className="contact-email" href={`mailto:${footer.email}`}>
          {footer.email}
        </a>
      </section>
    </main>
  );
}
