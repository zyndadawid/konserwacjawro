import { NavLink, useLocation } from "react-router-dom";
import { navigation } from "../../../data/navigation";
import "./navbar.css";

export default function Navbar() {
  const location = useLocation();

  const isDropDownActive = (children) =>
    children.some((child) => child.path === location.pathname);

  const linkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";
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
          {navigation.map((item) =>
            item.children ? (
              <div className="nav-item dropdown" key={item.label}>
                <span
                  className={`nav-link ${isDropDownActive(item.children) ? "active" : ""}`}
                >
                  {" "}
                  {item.label}
                </span>
                <div className="dropdown-menu">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.path}
                      to={child.path}
                      className="dropdown-link"
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <div className="nav-item" key={item.path}>
                <NavLink to={item.path} className={linkClass}>
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
