import { useState, useEffect, useRef } from "react";
import { Fragment } from "react";
import { description, timelineContent } from "./data/voyageSecondSection.js";

function VoyageSecondSection() {
  const [isTimelineSlide, setIsTimelineSlide] = useState({});
  const timelineContentRef = useRef([]);
  const isMobile = window.innerWidth <= 845;
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.dataset.index;

          setIsTimelineSlide((prev) => ({
            ...prev,
            [index]: entry.isIntersecting,
          }));
        });
      },
      {
        threshold: isMobile ? 0.05 : 0.2,
        rootMargin: "100px 0px 300px 0px",
      },
    );
    timelineContentRef.current.forEach((item) => {
      if (item?.left) observer.observe(item.left);
      if (item?.right) observer.observe(item.right);
    });
    return () => observer.disconnect();
  }, []);

  const [timelineActive, setTimelineActive] = useState(false);
  const timelineRef = useRef(null);
  //Equivalent of timelineIntersecting()
  useEffect(() => {
    const element = timelineRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimelineActive(true);
        } else {
          setTimelineActive(false);
        }
      },
      {
        threshold: 0,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);
  const text = "Captain's Voyage";
  const [letters] = useState(() =>
    [...text].map((char, index) => ({
      char,
      index,
      style: {
        "--x": `${Math.floor(Math.random() * 600) - 300}px`,
        "--y": `${Math.floor(Math.random() * 600) - 300}px`,
        "--rotate": `${Math.floor(Math.random() * 360) - 180}deg`,
      },
    })),
  );

  const [boatPosition, setBoatPosition] = useState(50);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const scrollPercent =
        currentScrollY / (document.body.scrollHeight - window.innerHeight);
      setBoatPosition(50 + scrollPercent);
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section className="timeline-section" id="projects">
        <div className="timeline-upper-container">
          <div className="timeline-upper-sub-container">
            <div className="timeline-upper-sub-inner-container">
              <div className="padding-vertical">
                <div className="timeline-upper-sub-inner-content">
                  <h2
                    id="my-journey"
                    className={`fly-text ${timelineActive ? "active" : ""}`}
                    ref={timelineRef}
                  >
                    {letters.map(({ char, index, style }) => (
                      <span key={index} style={style}>
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </h2>
                  {description.map((item, index) => (
                    <p key={index}>{item.text}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline-lower-container">
          <div className="timeline-lower-sub-container">
            <div className="padding-top"></div>
            <div className="timeline-component">
              <div className="timeline-progress">
                <div className={`timeline-progress-bar ${scrollDirection}`}>
                  <div
                    className={`voyage-ship ${scrollDirection}`}
                    style={{ top: `${boatPosition}vh` }}
                  >
                    <img
                      src="./images/index/boat.webp"
                      className="boat"
                      style={{
                        transform:
                          scrollDirection === "up"
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                      alt="Voyage Ship"
                    />
                  </div>
                </div>
              </div>
              {timelineContent.map((item, index) => (
                <div
                  className="timeline-item last-timeline-container"
                  key={index}
                >
                  <div
                    ref={(el) => {
                      timelineContentRef.current[index] = {
                        ...timelineContentRef.current[index],
                        trigger: el,
                      };
                    }}
                    data-index={index}
                    className="timeline-trigger"
                  />
                  <div
                    ref={(el) => {
                      timelineContentRef.current[index] = {
                        ...timelineContentRef.current[index],
                        left: el,
                      };
                    }}
                    className={`timeline-left ${isTimelineSlide[index] ? "dateSlide " : ""}`}
                    data-index={index}
                  >
                    <div className="timeline-date">
                      <p className="timeline-date-text">
                        {item.date}
                        <br />
                        {item.dateTitle}
                      </p>
                    </div>
                  </div>
                  <div className="timeline-center"></div>
                  <div
                    ref={(el) => {
                      timelineContentRef.current[index] = {
                        ...timelineContentRef.current[index],
                        right: el,
                      };
                    }}
                    className={`timeline-right ${isTimelineSlide[index] ? "textSlide " : ""}`}
                    data-index={index}
                  >
                    <div className="margin-bottom">
                      <div className="timeline-text">
                        <h3>
                          <img
                            src="./images/index/timeline/theme.webp"
                            alt="theme-icon"
                          />
                          <span>{item.themeTitle}</span>
                        </h3>
                        <div>
                          <img
                            src="./images/index/timeline/technologies.webp"
                            alt="tech-icon"
                            className="tech-icon"
                          />
                          <ul>
                            {item.tech.map((lang, langIndex) => (
                              <li key={langIndex}>
                                <span className={`${Object.values(lang)}-tag`}>
                                  {Object.values(lang)}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="log-section">
                          <img
                            src="./images/index/timeline/captainLog.webp"
                            alt="log icon"
                            className="log-icon"
                          />
                          <p className="log-text collapsed">{item.log}</p>
                          <button className="read-more-btn">Read More</button>
                        </div>
                        <div>
                          <img
                            src="./images/index/timeline/acquired.webp"
                            alt="skills icon"
                            className="skills-icon"
                          />
                          <p>{item.acquired}</p>
                        </div>
                        <div>
                          <img
                            src="./images/index/timeline/treasureGain.webp"
                            alt="treasure-icon"
                            className="treasure-icon"
                          />
                          <p>{item.treasure}</p>
                        </div>
                        <div>
                          <img
                            src="./images/index/timeline/weathered.webp"
                            alt="weathered icon"
                            className="weathered-icon"
                          />
                          <p>{item.weathered}</p>
                        </div>
                        <p></p>
                      </div>
                    </div>
                    <div className="timeline-image-wrap">
                      <p>{item.explore}</p>
                      <a
                        href="https://nathan-front.github.io/Ecommerce/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="timeline-images"
                      >
                        <img
                          src="./images/index/timeline/first.webp"
                          alt="page-link-image"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="timeline-component last-timeline-container">
              <div className="timeline-item">
                <div className="timeline-left">
                  <div className="timeline-date">
                    <p>
                      Future
                      <br />
                      The Next
                    </p>
                  </div>
                </div>
                <div className="timeline-center"></div>
                <div className="timeline-right">
                  <div className="margin-bottom">
                    <div className="timeline-text">
                      <h3>
                        <img
                          src="./images/index/timeline/theme.webp"
                          alt="theme icon"
                        />
                        <span>Future Projects</span>
                      </h3>
                      <div>
                        <img
                          src="./images/index/timeline/technologies.webp"
                          alt="tech icon"
                          className="tech-icon"
                        />
                        <span className="unknown-tag">Unknown</span>
                      </div>
                      <div className="log-section">
                        <img
                          src="./images/index/timeline/captainLog.webp"
                          alt="log icon"
                          className="log-icon"
                        />
                        <p className="log-text collapsed">
                          I am currently seeking Junior Frontend Developer
                          positions where I can deploy my skills, join a crew,
                          and continue growing as a professional. I plan to keep
                          upgrading this portfolio vault, though I may keep
                          future proprietary projects under lock and key once I
                          officially enter the web development industry. My
                          ultimate horizon stretches further: I am planning to
                          conquer backend development and transition into a Full
                          Stack Developer. To achieve this, I will be setting
                          sail toward backend-related projects just as soon as I
                          have fully mastered the intricacies of the frontend
                          workflow. This is not a final anchor drop, but rather
                          a 'see you on the next horizon.'
                        </p>
                        <button className="read-more-btn">Read More</button>
                      </div>
                      <div>
                        <img
                          src="./images/index/timeline/acquired.webp"
                          alt="skills icon"
                          className="skills-icon"
                        />
                        <p>
                          Staying consistent with studying, even when tired,
                          even if it is only for an hour each day.
                        </p>
                      </div>
                      <div>
                        <img
                          src="./images/index/timeline/treasureGain.webp"
                          alt="challenges icon"
                          className="challenges-icon"
                        />
                        <p>
                          Maintaining consistency while working a full-time job.
                        </p>
                      </div>
                      <div>
                        <img
                          src="./images/index/timeline/weathered.webp"
                          alt="challenges icon"
                          className="challenges-icon"
                        />
                        <p>Having an impostor syndrome all the time.</p>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-image-wrap">
                    <p>Explore the Island</p>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="timeline-images"
                    >
                      <img
                        src="./images/index/timeline/future.webp"
                        alt="jewelry website project image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>*/}

            <div className="padding-bottom"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VoyageSecondSection;
