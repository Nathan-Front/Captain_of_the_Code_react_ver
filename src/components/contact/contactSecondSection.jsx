import "./contactSecondSection.css";
import { secondSection } from "./data/contactSecondSection.js";
import { Fragment } from "react";
import { useState } from "react";
import { sendMessage } from "../../assets/script/contactForm.js";
import { validateEmail } from "../../assets/script/emailValidator.js";
function ContactSecondSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });
  const [emailError, setEmailError] = useState(false);
  const [spinner, setSpinner] = useState(false);

  async function inputHandler(e) {
    e.preventDefault();
    if (formData.website !== "") {
      return;
    }
    if (!validateEmail(formData.email)) {
      setEmailError(true);
      alert("Enter correct email format.");
      return;
    }
    setEmailError(false);
    setSpinner(true);
    const result = await sendMessage(formData);

    if (!result.success) {
      alert(result.message);
      setSpinner(false);
      return;
    }
    //sendMessage(formData);
    alert(result.message);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      website: "",
    });
    setSpinner(false);
  }

  return (
    <>
      <section className="contact-second-section">
        {secondSection.map((item, index) => (
          <div className={item.container} key={index}>
            {item.subContent.map((subCon, i) => (
              <Fragment key={i}>
                <div className={subCon.headerContainer} key={i}>
                  <h2>{subCon.header}</h2>
                  <img
                    src={subCon.headerImg}
                    alt={subCon.headerImgAlt}
                    loading="lazy"
                  />
                </div>
                {subCon.formContainer && (
                  <form id={subCon.formContainer} onSubmit={inputHandler}>
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
                            value={formData[inputTags.name]}
                            id={inputTags.inputId}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                [inputTags.name]: e.target.value,
                              })
                            }
                          />
                        ) : (
                          <input
                            type={inputTags.type}
                            name={inputTags.name}
                            placeholder={inputTags.placeHolder}
                            value={formData[inputTags.name]}
                            id={inputTags.inputId}
                            className={
                              inputTags.name === "email" && emailError
                                ? "error"
                                : ""
                            }
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                [inputTags.name]: e.target.value,
                              })
                            }
                          />
                        )}
                      </div>
                    ))}
                    <input
                      type="text"
                      name="website"
                      className="honeypot"
                      aria-hidden="true"
                      tabIndex="-1"
                    />
                    <button
                      type="submit"
                      className="send-button"
                      aria-label="send-button"
                      disabled={spinner}
                    >
                      <span
                        className={
                          spinner ? "spinner activeSpinner" : "spinner"
                        }
                      ></span>
                    </button>
                  </form>
                )}
                {subCon.listContent && (
                  <ul>
                    {subCon.listContent.map((listItem, h) => (
                      <li key={h}>
                        <img
                          src={listItem.image}
                          alt={listItem.imageAlt}
                          loading="lazy"
                        />
                        <div>
                          <h3>{listItem.title}</h3>
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
