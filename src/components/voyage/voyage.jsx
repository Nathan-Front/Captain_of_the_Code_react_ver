import { lazy, Suspense } from "react";
import VoyageFirstSection from "./voyageFirstSection.jsx";
const VoyageSecondSection = lazy(() => import("./voyageSecondSection.jsx"));
const BackToTop = lazy(() => import("./backToTop.jsx"));
function Voyage() {
  return (
    <>
      <VoyageFirstSection />
      <Suspense>
        <VoyageSecondSection />
        <BackToTop />
      </Suspense>
    </>
  );
}

export default Voyage;
