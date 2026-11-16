import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import "./layout.css";

export default function Layout() {
  return (
    <div className="site-layout">
      <Navbar />

      <div className="container site-body">
        <div className="site-content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
