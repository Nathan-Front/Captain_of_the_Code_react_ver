import { HashRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Nav from "./components/navigation/nav.jsx";
import Foot from "./components/footer/foot.jsx";
import Voyage from "./components/voyage/voyage.jsx";
import Manifest from "./components/manifest/manifest.jsx";
import DropAnchor from "./components/contact/dropAnchor.jsx";

function Loading() {
  return (
    <div className="loading">
      <div className="pageSpinner"></div>
      <p>Loading your voyage...</p>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let page = location.pathname.replace("/", "");
    if (page === "") {
      page = "voyage"; //default first page
    }
    document.body.dataset.page = page;
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => {
      delete document.body.dataset.page;
      clearTimeout(timer);
    };
  }, [location]);

  return (
    <>
      <Nav />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Voyage />} />
          <Route path="/manifest" element={<Manifest />} />
          <Route path="/dropAnchor" element={<DropAnchor />} />
        </Routes>
      )}
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
