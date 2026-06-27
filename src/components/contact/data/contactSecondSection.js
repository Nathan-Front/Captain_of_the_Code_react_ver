
export const secondSection = [
    {container: "contact-left-container", 
        subContent: [
            {headerContainer: "contact-left-container-title", header: "Send a Message", headerImg: "./images/contact/ornamentalDivider2.webp", headerImgAlt: "divider-image",
                formContainer: "contact-form", 
                    inputContent: [
                        {inputContainer: "input-container", type: "text", name: "name", placeHolder: "Your Name", inputId: "fname", inputImg: "./images/contact/person.svg", inputImgAlt: "person-image", imageClass: "input-image"},
                        {inputContainer: "input-container", type: "email", name: "email", placeHolder: "Your Email", inputId: "fmail", inputImg: "./images/contact/mail.svg", inputImgAlt: "mail-image", imageClass: "input-image"},
                        {inputContainer: "input-container", type: "text", name: "subject", placeHolder: "Subject", inputId: "fsubject", inputImg: "./images/contact/anchor.svg", inputImgAlt: "anchor-image", imageClass: "input-image"},
                        {inputContainer: "input-container", textArea: "true", name: "message", placeHolder: "Your Message", inputId: "fmessage", inputImg: "./images/contact/feather.svg", inputImgAlt: "feather-image", imageClass: "textarea-image"},
                    ]
            }
        ],
    },
    {container: "contact-right-container", 
        subContent: [
            {headerContainer: "contact-right-container-title", header: "Other Ways To Contact The Captain", headerImg: "./images/contact/ornamentalDivider3.webp", headerImgAlt: "divider-image",
                listContent: [
                    {title: "By Bottle", text: "Email", image: "./images/contact/pirateBottle.webp", imageAlt: "bottle-image"},
                    {title: "At the Tavern", text: "Github", image: "./images/contact/pirateParrot.webp", imageAlt: "parrot-image"},
                    {title: "On the Horizon", text: "LinkedIn", image: "./images/contact/pirateMonocular.webp", imageAlt: "monocular-image"},
                    {title: "Signal Flag", text: "Typically signals within 24-48 hours", image: "./images/contact/pirateCoin.webp", imageAlt: "coin-image"},
                ]
            }
        ],
    }
];