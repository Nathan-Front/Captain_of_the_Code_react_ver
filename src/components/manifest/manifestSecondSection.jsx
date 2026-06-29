import "./manifestSecondSection.css";
import { Fragment } from "react";
import { secondSection } from "./data/manifestSecondSection.js";

function ManifestSecondSection() {
  return (
    <>
      <section className="profile-second-section">
        {secondSection.map((item, index) => (
          <div className={item.container} key={index}>
            <img src={item.seal} alt="seal image" className="seal" />
            {item.tack.map((tack, a) => (
              <img
                className={tack.tack}
                src={item.tackImg}
                alt="brass tack image"
                key={a}
              />
            ))}
            <h3>
              <img src={item.titleImg} alt={"Anchor Icon"} />
              {item.title}
            </h3>

            {item.text && <p>{item.text}</p>}

            {item.traits && (
              <div className={item.traits}>
                {item.subTitle.map((traits, b) => (
                  <div className={traits.subContTitle} key={b}>
                    {traits.subTitleImg && (
                      <div>
                        <img
                          src={traits.subTitleImg}
                          alt={traits.subTItleAlt}
                        />
                      </div>
                    )}
                    {traits.listContent && (
                      <ul>
                        {traits.listContent.map((list, c) => (
                          <li key={c}>{list.text}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {item.voyage && (
              <div className={item.voyage}>
                {item.subTitle.map((voyage, d) => (
                  <div className={voyage.listContent} key={d}>
                    {voyage.subListContent.map((subVoyage, e) => (
                      <div className={subVoyage.subListContainer} key={e}>
                        {subVoyage.datesImg && (
                          <img
                            src={subVoyage.datesImg}
                            alt={subVoyage.datesAlt}
                          />
                        )}
                        {subVoyage.datesText && <p>{subVoyage.datesText}</p>}
                        {subVoyage.header && (
                          <div className={subVoyage.header}></div>
                        )}
                        {subVoyage.detailsText && (
                          <div className={subVoyage.detailsText}>
                            {subVoyage.treasureImg && (
                              <Fragment>
                                <div>
                                  <img
                                    src={subVoyage.treasureImg}
                                    alt={subVoyage.treasureAlt}
                                  />
                                  <div>
                                    <span>{subVoyage.log}</span>
                                    <h4>{subVoyage.company}</h4>
                                  </div>
                                </div>
                                <ul>
                                  {subVoyage.expDetailsList.map((exp, f) => (
                                    <li key={f}>&#10004; {exp.listDetails}</li>
                                  ))}
                                </ul>
                              </Fragment>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {item.academy && (
              <ul className={item.academy}>
                {item.training.map((training, g) => (
                  <li key={g}>
                    <img src={item.dateImg} alt={item.dateAlt} />
                    <span>{training.date}</span>
                    <p>{training.text}</p>
                  </li>
                ))}
              </ul>
            )}

            {item.explore && (
              <ul className={item.explore}>
                {item.exploreList.map((island, h) => (
                  <li className={island.islands} key={h}>
                    <img src={island.siteImg} alt={island.siteAlt} />
                    <h4>{island.site}</h4>
                    <div className="language">
                      {island.lang.map((language, i) => (
                        <span key={i}>{language.tech}</span>
                      ))}
                    </div>
                    <a
                      href={island.siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="logbook-link"
                    >
                      <span className="icon"></span>{" "}
                      <span>{island.LinkText}</span>
                    </a>
                    <div className="location-icon">
                      <img src={item.locationImg} alt={item.locationAlt} />
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>
    </>
  );
}

export default ManifestSecondSection;
