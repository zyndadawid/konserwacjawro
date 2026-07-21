import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function Layout() {
  return (
    <div>
      <Navbar />

      <div className="container" style={{ display: "flex", marginTop: "20px" }}>
        <main style={{ flex: 1 }}>
          <Outlet />
          <Footer />
        </main>
      </div>
    </div>
  );
}
