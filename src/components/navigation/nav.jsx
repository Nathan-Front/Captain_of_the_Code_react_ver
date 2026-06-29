import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { linkImages } from "./data/nav.js";
function Nav() {
  const [hideNav, setHideNav] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    function handleScroll() {
      if (mobileNav) {
        return;
      }
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }
      lastScrollY.current = currentScrollY;
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileNav]);

  function toggleMobileNav() {
    setMobileNav((prev) => !prev);
  }
  useEffect(() => {
    if (mobileNav) {
      document.documentElement.classList.add("no-scroll");
      document.body.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.documentElement.classList.remove("no-scroll");
      document.body.classList.remove("no-scroll");
    };
  }, [mobileNav]);

  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleTitleScroll = () => {
      let currentScroll = window.scrollY;

      if (currentScroll > lastScrollY) {
        setShowTitle(true);
      } else {
        setShowTitle(false);
      }
      lastScrollY = currentScroll;
    };
    window.addEventListener("scroll", handleTitleScroll);
    return () => {
      window.removeEventListener("scroll", handleTitleScroll);
    };
  }, []);
  return (
    <>
      <nav className={`navbar ${hideNav ? "hide" : ""}`}>
        <img src="./images/nav/logo.webp" alt="logo" className="logo" />
        <span className="my-name">JT</span>
        <ul className={`nav-links-wrapper  ${mobileNav ? "openNav" : ""}`}>
          <li>
            <button
              className="close-mobile-nav"
              onClick={() => setMobileNav(false)}
            >
              <img
                src="./images/nav/closeButton.webp"
                alt="close-button"
                loading="lazy"
              />
              Close
            </button>
          </li>
          <li className="nav-links">
            <Link to="/" onClick={() => setMobileNav(false)}>
              <img
                src="./images/nav/compassLink.webp"
                alt="anchor Icon"
                loading="lazy"
              />
              VOYAGE
            </Link>
          </li>
          <li className="nav-links">
            <Link to="/manifest" onClick={() => setMobileNav(false)}>
              <img
                src="./images/nav/bagLink.webp"
                alt="bag Icon"
                loading="lazy"
              />
              MANIFEST
            </Link>
          </li>
          <li className="nav-links">
            <Link to="/dropAnchor" onClick={() => setMobileNav(false)}>
              <img
                src="./images/nav/anchorLink.webp"
                alt="anchor Icon"
                loading="lazy"
              />
              DROP ANCHOR
            </Link>
          </li>
          <li className="mobile-footer">
            <p>Captain's Taverns</p>
            <ul>
              {linkImages.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.textLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.text}
                  </a>
                  <img
                    src={item.textImg}
                    alt={item.textImgAlt}
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
            <span>© 2026 Jonathan. All rights reserved.</span>
          </li>
        </ul>
        <button className="mobile-nav-open" onClick={toggleMobileNav}>
          <img
            src="./images/nav/telescopeLink.webp"
            alt="mobile-nav"
            loading="lazy"
          />
          Menu
        </button>
        <div
          className={
            showTitle
              ? "main-title-container hideBanner"
              : "main-title-container"
          }
        >
          <h2>CAPTAIN OF THE CODE</h2>
        </div>
        <div className={`overlay ${mobileNav ? "overlayActive" : ""}`}></div>
      </nav>
    </>
  );
}

export default Nav;
