import { HashRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Suspense, useEffect, useState, lazy } from "react";
import { useLocation } from "react-router-dom";
import Nav from "./components/navigation/nav.jsx";
import Foot from "./components/footer/foot.jsx";

const Voyage = lazy(() => import("./components/voyage/voyage.jsx"));
const Manifest = lazy(() => import("./components/manifest/manifest.jsx"));
const DropAnchor = lazy(() => import("./components/contact/dropAnchor.jsx"));
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
        <Suspense>
          <Routes>
            <Route path="/" element={<Voyage />} />
            <Route path="/manifest" element={<Manifest />} />

            <Route path="/dropAnchor" element={<DropAnchor />} />
          </Routes>
        </Suspense>
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
