import { useState } from "react";
import "./passwordGate.css";

const PROTECTION_ENABLED = import.meta.env.VITE_SITE_PROTECTION === "true";
const PASSWORD = import.meta.env.VITE_SITE_PASSWORD;

export default function PasswordGate({ children }) {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(
    sessionStorage.getItem("site-unlocked") === "true",
  );

  if (!PROTECTION_ENABLED) {
    return children;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input === PASSWORD) {
      sessionStorage.setItem("site-unlocked", "true");
      setUnlocked(true);
    } else {
      alert("Nieprawidłowe hasło.");
    }
  };

  if (unlocked) {
    return children;
  }

  return (
    <div className="password-overlay">
      <form className="password-box" onSubmit={handleSubmit}>
        <h1>KonserwacjaWRO</h1>
        <p>Wersja robocza strony.</p>

        <input
          type="password"
          placeholder="Hasło"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit">Wejdź</button>
      </form>
    </div>
  );
}
