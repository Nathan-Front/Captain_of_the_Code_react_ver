import {
  captain,
  captainInfo,
  taverns,
  finest,
  tongues,
} from "./data/manifestFirstSection.js";
function ManifestFirstSection() {
  return (
    <>
      <section className="profile-first-section">
        <div className="avatar-container">
          <img
            src="./images/cv/roundFrame.webp"
            alt="frame image"
            className="frame-image"
          />
          <img
            src="./images/cv/avatar.webp"
            alt="avatar image"
            className="avatar-image"
          />
        </div>
        {captain.map((item, index) => (
          <div className="name-container" key={index}>
            <h1 className="name">{item.name}</h1>
            <p className="about-me">{item.aboutMe}</p>
          </div>
        ))}

        <ul className="info-container">
          {captainInfo.map((item, a) => (
            <li key={a}>
              <span>{item.title}</span>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>

        <ul className="contact-container">
          {taverns.map((item, b) => (
            <li key={b}>
              {item.titleImg && <img src={item.titleImg} alt={item.titleAlt} />}
              {item.title && <h3 className="contact-title">{item.title}</h3>}

              {item.tavern && (
                <>
                  <img src={item.images} alt={item.alt} />
                  <span>{item.tavern}: </span>
                  <a
                    href={item.links}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.text}
                  </a>
                </>
              )}
            </li>
          ))}
        </ul>

        <ul className="portfolio-container">
          {finest.map((item, c) => (
            <li key={c}>
              {item.images && <img src={item.images} alt={item.alt} />}
              {item.title && <h3 className="portfolio-title">{item.title}</h3>}
              {item.web && <span>{item.web}</span>}
              {item.links && (
                <a href={item.links} target="_blank" rel="noopener noreferrer">
                  {item.links}
                </a>
              )}
              {item.text && <p className="tags">{item.text}</p>}
            </li>
          ))}
        </ul>

        <ul className="language-container">
          {tongues.map((item, d) => (
            <li key={d}>
              {item.titleImg && <img src={item.titleImg} alt={item.titleAlt} />}
              {item.title && <h3>{item.title}</h3>}
              {item.lang && (
                <>
                  <img src={item.images} alt={item.alt} />
                  <p>{item.lang}</p>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default ManifestFirstSection;
