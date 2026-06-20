import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
function Nav() {
  const [hideNav, setHideNav] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    function handleScroll() {
      if (mobileNav) return;
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
  }, []);

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
              <img src="/images/nav/closeButton.webp" alt="close-button" />
              Close
            </button>
          </li>
          <li className="nav-links">
            <Link to="index.html">
              <img src="./images/nav/compassLink.webp" alt="anchor Icon" />
              VOYAGE
            </Link>
          </li>
          <li className="nav-links">
            <Link to="profile.html">
              <img src="./images/nav/bagLink.webp" alt="bag Icon" />
              MANIFEST
            </Link>
          </li>
          <li className="nav-links">
            <Link to="contact.html">
              <img src="./images/nav/anchorLink.webp" alt="anchor Icon" />
              DROP ANCHOR
            </Link>
          </li>
          <li className="mobile-footer">
            <p>Captain's Taverns</p>
            <ul>
              <li>
                <a
                  href="https://github.com/Nathan-Front"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <img
                  src="./images//footer/github-round-svgrepo-com.svg"
                  alt="github"
                />
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jonathan-tindungan-8072691a1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <img
                  src="./images//footer/linkedin-round-svgrepo-com.svg"
                  alt="linkedIn"
                />
              </li>
              <li>
                <a
                  href="mailto:jonathantindungan3@gmail.com?subject=Inquire"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email
                </a>
                <img
                  src="./images/footer/google-logo-fill-svgrepo-com.webp"
                  alt="linkedIn"
                />
              </li>
            </ul>
            <span>© 2026 Jonathan. All rights reserved.</span>
          </li>
        </ul>
        <button className="mobile-nav-open" onClick={toggleMobileNav}>
          <img src="./images/nav/telescopeLink.webp" alt="mobile-nav" />
          Menu
        </button>
        <div className="main-title-container">
          <h2>CAPTAIN OF THE CODE</h2>
        </div>
        <div className={`overlay ${mobileNav ? "overlayActive" : ""}`}></div>
      </nav>
    </>
  );
}

export default Nav;
