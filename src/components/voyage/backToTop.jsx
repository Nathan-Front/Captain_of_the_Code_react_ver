import { useState, useEffect, useRef } from "react";
function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const timeoutRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 2000) {
        setShowBackToTop(true);
        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
          setShowBackToTop(false);
        }, 5000);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <button
        id="backToTop"
        className={showBackToTop ? "back-to-top show" : "back-to-top"}
        onClick={() => backToTop()}
      ></button>
    </>
  );
}

export default BackToTop;
