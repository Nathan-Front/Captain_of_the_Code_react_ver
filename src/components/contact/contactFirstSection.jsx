import "./contactFirstSection.css";
import { contactFirst, contactText } from "./data/contactFirstSection.js";

function ContactFirstSection() {
  return (
    <>
      <section className="contact-first-section">
        {contactFirst.map((item, index) => (
          <div className={item.container} key={index}>
            {item.imageList && (
              <>
                {item.imageList.map((imgList, i) => (
                  <img
                    src={imgList.images}
                    alt={imgList.imagesAlt}
                    key={i}
                    loading="lazy"
                  />
                ))}
              </>
            )}
            {item.title && (
              <>
                <h1>{item.title}</h1>
                <img
                  src={item.titleImg}
                  alt={item.titleImgAlt}
                  loading="lazy"
                />
              </>
            )}
          </div>
        ))}
        {contactText.map((item, index) => (
          <p key={index}>{item.text}</p>
        ))}
      </section>
    </>
  );
}

export default ContactFirstSection;
