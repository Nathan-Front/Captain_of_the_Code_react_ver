import { lazy, Suspense } from "react";
const VoyageFirstSection = lazy(() => import("./voyageFirstSection.jsx"));
const VoyageSecondSection = lazy(() => import("./voyageSecondSection.jsx"));
const BackToTop = lazy(() => import("./backToTop.jsx"));
function Voyage() {
  return (
    <Suspense>
      <VoyageFirstSection />
      <VoyageSecondSection />
      <BackToTop />
    </Suspense>
  );
}

export default Voyage;
