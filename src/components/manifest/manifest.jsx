import { lazy, Suspense } from "react";
const ManifestFirstSection = lazy(() => import("./manifestFirstSection.jsx"));
const ManifestSecondSection = lazy(() => import("./manifestSecondSection.jsx"));
function Manifest() {
  return (
    <Suspense>
      <div id="app">
        <ManifestFirstSection />
        <ManifestSecondSection />
      </div>
    </Suspense>
  );
}

export default Manifest;
