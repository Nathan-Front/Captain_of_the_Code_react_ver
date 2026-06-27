import { secondSection } from "./data/contactSecondSection.js";
import { Fragment } from "react";
function ContactSecondSection() {
  return (
    <>
      <section className="contact-second-section">
        {secondSection.map((item, index) => (
          <div className={item.container} key={index}>
            {item.subContent.map((subCon, i) => (
              <Fragment key={i}>
                <div className={subCon.headerContainer} key={i}>
                  <h2>{subCon.header}</h2>
                  <img src={subCon.headerImg} alt={subCon.headerImgAlt} />
                </div>
                {subCon.formContainer && (
                  <form id={subCon.formContainer}>
                    {subCon.inputContent.map((inputTags, j) => (
                      <div className={inputTags.inputContainer} key={j}>
                        <img
                          src={inputTags.inputImg}
                          alt={inputTags.inputImgAlt}
                          className={inputTags.imageClass}
                        />
                        {inputTags.textArea ? (
                          <textarea
                            name={inputTags.name}
                            placeholder={inputTags.placeHolder}
                            id={inputTags.inputId}
                          />
                        ) : (
                          <input
                            type={inputTags.type}
                            name={inputTags.name}
                            placeholder={inputTags.placeHolder}
                            id={inputTags.inputId}
                          />
                        )}
                      </div>
                    ))}
                    <input type="text" name="website" className="honeypot" />
                    <button type="submit" className="send-button">
                      <span className="spinner"></span>
                    </button>
                  </form>
                )}
                {subCon.listContent && (
                  <ul>
                    {subCon.listContent.map((listItem, h) => (
                      <li key={h}>
                        <img src={listItem.image} alt={listItem.imageAlt} />
                        <div>
                          <h4>{listItem.title}</h4>
                          <p>{listItem.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </Fragment>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}

export default ContactSecondSection;
