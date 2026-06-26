import { HashRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "./components/navigation/nav.jsx";
import Foot from "./components/footer/foot.jsx";
import Voyage from "./components/voyage/voyage.jsx";
import Manifest from "./components/manifest/manifest.jsx";
function AppContent() {
  const location = useLocation();

  useEffect(() => {
    let page = location.pathname.replace("/", "");

    if (page === "") {
      page = "voyage"; // default first page
    }

    document.body.dataset.page = page;

    return () => {
      delete document.body.dataset.page;
    };
  }, [location]);
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Voyage />} />
        <Route path="/manifest" element={<Manifest />} />
      </Routes>
      <Foot />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
