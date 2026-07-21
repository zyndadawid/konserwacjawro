import { NavLink } from "react-router-dom";
import { footer } from "../../../data/footer";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-block">
          <h4>{footer.journal}</h4>
          <NavLink to={footer.institution.url} className="footer-link">
            {footer.institution.name}
          </NavLink>
        </div>

        <div className="footer-block">
          <h4>Nawigacja</h4>
          {footer.links.map((link) => (
            <NavLink key={link.path} to={link.path} className="footer-link">
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="footer-block">
          <h4>Kontakt</h4>
          <p>{footer.email}</p>
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
