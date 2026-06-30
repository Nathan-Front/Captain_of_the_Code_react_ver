import { lazy, Suspense } from "react";
const ContactFirstSection = lazy(() => import("./contactFirstSection.jsx"));
const ContactSecondSection = lazy(() => import("./contactSecondSection.jsx"));
function DropAnchor() {
  return (
    <Suspense>
      <ContactFirstSection />
      <ContactSecondSection />
    </Suspense>
  );
}

export default DropAnchor;
