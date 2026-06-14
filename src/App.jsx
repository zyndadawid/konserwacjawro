import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Scope from "./pages/Scope";
import EditorialBoard from "./pages/EditorialBoard";
import EditorInChief from "./pages/EditorInChief";
import ReviewProcess from "./pages/ReviewProcess";
import CurrentIssue from "./pages/CurrentIssue";
import Articles from "./pages/Articles";
import Archive from "./pages/Archive";
import Authors from "./pages/Authors";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* main */}
          <Route index element={<Home />} />

          {/* about section */}
          <Route path="about" element={<About />} />
          <Route path="scope" element={<Scope />} />
          <Route path="editor-in-chief" element={<EditorInChief />} />
          <Route path="editorial-board" element={<EditorialBoard />} />
          <Route path="review-process" element={<ReviewProcess />} />

          {/* content */}
          <Route path="current-issue" element={<CurrentIssue />} />
          <Route path="articles" element={<Articles />} />

          {/* archive + misc */}
          <Route path="archive" element={<Archive />} />
          <Route path="authors" element={<Authors />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
