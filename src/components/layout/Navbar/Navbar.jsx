import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navigation } from "../../../data/navigation";
import logo from "../../../assets/kw-logo.svg";
import "./navbar.css";

export default function Navbar() {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const isDropDownActive = (children) =>
    children.some((child) => child.path === location.pathname);

  const linkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (label) => {
    setOpenDropdown((current) => (current === label ? null : label));
  };

  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="container navbar-header">
          <NavLink to="/" onClick={closeMenu}>
            <img src={logo} alt="KonserwacjaWRO" className="navbar-logo" />
          </NavLink>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav
        id="main-navigation"
        className={`navbar-bottom ${menuOpen ? "menu-open" : ""}`}
        aria-label="Nawigacja główna"
      >
        <div className="container nav-inner">
          {navigation.map((item) =>
            item.children ? (
              <div
                className={`nav-item dropdown ${
                  openDropdown === item.label ? "dropdown-open" : ""
                }`}
                key={item.label}
              >
                <button
                  type="button"
                  className={`nav-link dropdown-toggle ${
                    isDropDownActive(item.children) ? "active" : ""
                  }`}
                  aria-expanded={openDropdown === item.label}
                  onClick={() => toggleDropdown(item.label)}
                >
                  {item.label}
                  <span className="dropdown-arrow">⌄</span>
                </button>

                <div className="dropdown-menu">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.path}
                      to={child.path}
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <div className="nav-item" key={item.path}>
                <NavLink
                  to={item.path}
                  className={linkClass}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </div>
            ),
          )}
        </div>
      </nav>
    </header>
  );
}
