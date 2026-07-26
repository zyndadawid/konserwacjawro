import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

// pages
import Profile from "./pages/Profile";
import EditorialTeam from "./pages/EditorialTeam";
import ScientificBoard from "./pages/ScientificBoard";
import Policy from "./pages/Policy";
import Issue from "./pages/Issue";
import Reviewers from "./pages/Reviewers";
import ReviewForm from "./pages/ReviewForm";
import AuthorGuidelines from "./pages/AuthorGuidelines";
import Copyright from "./pages/Copyright";
import Contact from "./pages/Contact";
import PasswordGate from "./components/auth/PasswordGate";

export default function App() {
  return (
    <PasswordGate>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Profile />} />
            <Route index path="journal/profile" element={<Profile />} />
            <Route path="journal/editorial-team" element={<EditorialTeam />} />
            <Route
              path="journal/scientific-board"
              element={<ScientificBoard />}
            />
            <Route path="journal/policy" element={<Policy />} />
            <Route path="archive/:slug" element={<Issue />} />{" "}
            <Route path="reviewers/:slug" element={<Reviewers />} />
            <Route path="reviewers/review-form" element={<ReviewForm />} />
            <Route path="authors/guidelines" element={<AuthorGuidelines />} />
            <Route path="authors/copyright" element={<Copyright />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </HashRouter>
    </PasswordGate>
  );
}
