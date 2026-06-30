import { HashRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Suspense, useEffect, lazy } from "react";
import { useLocation } from "react-router-dom";
import Nav from "./components/navigation/nav.jsx";

const Foot = lazy(() => import("./components/footer/foot.jsx"));
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

  useEffect(() => {
    let page = location.pathname.replace("/", "");
    if (page === "") {
      page = "voyage"; //default first page
    }
    document.body.dataset.page = page;

    return () => {
      delete document.body.dataset.page;
    };
  }, [location]);

  return (
    <>
      <header>
        <Nav />
      </header>
      <Suspense fallback={<Loading />}>
        <main>
          <Routes>
            <Route path="/" element={<Voyage />} />
            <Route path="/manifest" element={<Manifest />} />
            <Route path="/dropAnchor" element={<DropAnchor />} />
          </Routes>
        </main>
        <footer>
          <Foot />
        </footer>
      </Suspense>
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
