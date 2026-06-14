import "./navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="container">
          <div className="journal-title">KonserwacjaWRO</div>
          <div className="journal-subtitle">Czasopismo naukowe</div>
        </div>
      </div>

      <nav className="navbar-bottom">
        <div className="container nav-inner">
          {/* O CZASOPIŚMIE */}
          <div className="nav-item dropdown">
            <span className="nav-link">O czasopiśmie</span>
            <div className="dropdown-menu">
              <a href="#/" className="dropdown-link">
                Cele i zakres
              </a>
              <a href="#/" className="dropdown-link">
                Redaktor naczelny
              </a>
              <a href="#/" className="dropdown-link">
                Rada naukowa
              </a>
              <a href="#/" className="dropdown-link">
                Recenzja
              </a>
            </div>
          </div>

          {/* AKTUALNY NUMER */}
          <div className="nav-item dropdown">
            <span className="nav-link">Aktualny numer</span>
            <div className="dropdown-menu">
              <a href="#/" className="dropdown-link">
                Tom 1 (2026)
              </a>
              <a href="#/" className="dropdown-link">
                Artykuły
              </a>
            </div>
          </div>

          {/* ARCHIWUM */}
          <div className="nav-item dropdown">
            <span className="nav-link">Archiwum</span>
            <div className="dropdown-menu">
              <a href="#/archive" className="dropdown-link">
                Wszystkie numery
              </a>
              <a href="#/" className="dropdown-link">
                Wyszukiwanie
              </a>
            </div>
          </div>

          {/* POZOSTAŁE */}
          <a href="#/" className="nav-link">
            Dla autorów
          </a>
          <a href="#/" className="nav-link">
            Kontakt
          </a>
        </div>
      </nav>
    </header>
  );
}
