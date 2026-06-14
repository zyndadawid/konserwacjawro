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
          {/* HOME */}
          <div class="nav-item">
            <a href="#/" className="nav-link">
              Strona główna
            </a>
          </div>
          {/* ABOUT DROPDOWN */}
          <div className="nav-item dropdown">
            <span className="nav-link">O czasopiśmie</span>
            <div className="dropdown-menu">
              <a href="#/about" className="dropdown-link">
                O nas
              </a>
              <a href="#/scope" className="dropdown-link">
                Cele i zakres
              </a>
              <a href="#/editor-in-chief" className="dropdown-link">
                Redaktor naczelny
              </a>
              <a href="#/editorial-board" className="dropdown-link">
                Rada naukowa
              </a>
              <a href="#/review-process" className="dropdown-link">
                Proces recenzji
              </a>
            </div>
          </div>
          {/* CURRENT ISSUE */}
          <div className="nav-item dropdown">
            <span className="nav-link">Aktualny numer</span>
            <div className="dropdown-menu">
              <a href="#/current-issue" className="dropdown-link">
                Najnowszy numer
              </a>
              <a href="#/articles" className="dropdown-link">
                Artykuły
              </a>
            </div>
          </div>
          {/* ARCHIVE */}
          <div class="nav-item">
            <a href="#/archive" className="nav-link">
              Archiwum
            </a>
          </div>
          {/* AUTHORS */}
          <div class="nav-item">
            <a href="#/authors" className="nav-link">
              Dla autorów
            </a>
          </div>
          {/* CONTACT */}
          <div class="nav-item">
            <a href="#/contact" className="nav-link">
              Kontakt
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
