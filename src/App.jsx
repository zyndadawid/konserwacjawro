import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

// import Home from "./pages/Home";
// import Archive from "./pages/Archive";
// import Article from "./pages/Article";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} />
          <Route path="archive" element={<Archive />} />
          <Route path="article/:id" element={<Article />} /> */}
        </Route>
      </Routes>
    </HashRouter>
  );
}
