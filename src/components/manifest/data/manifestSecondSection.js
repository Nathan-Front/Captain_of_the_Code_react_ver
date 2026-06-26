

export const secondSection = [
    {container: "about-me-container", title: "Captain's Profile", titleImg: "./images/cv/anchor.webp", 
       tackImg: "./images/cv/brassTack.webp", tackAlt: "tack-image", tack: [
        {tack: "tack tl"}, {tack: "tack tr"}, {tack: "tack bl"}, {tack: "tack br"}
       ],
        seal: "./images/cv/captainSeal.webp", sealAlt: "seal-image", 
        text: `A dedicated sailor charting a new course into frontend development. With a
          background in technical training and engineering support, I have spent
          years creating clear and structured learning materials. Now, I navigate
          the world of modern web development, crafting responsive and user-friendly
          applications with the latest technologies.`
    },
    {container: "sub-title-container", title: "Captain's Traits", titleImg: "./images/cv/anchor.webp", 
        tackImg: "./images/cv/brassTack.webp", tackAlt: "tack-image", tack: [
        {tack: "tack tl"}, {tack: "tack tr"}, {tack: "tack bl"}, {tack: "tack br"}
       ], 
        seal: "./images/cv/captainSeal.webp", sealAlt: "seal-image", 
        traits: "traits-container", subTitle: [
            {subContTitle: "sub-title", subTitleImg: "./images/cv/boatwheel.webp", subTItleAlt: "Boat-wheel-image", 
                listContent: [
                    {text: "Master Shipwright"},
                    {text: "Practicing maintainable and scalable code"},
                ]
            },
            {subContTitle: "sub-title", subTitleImg: "./images/cv/compass.webp", subTItleAlt: "compass-image", 
                listContent: [
                    {text: "Master Navigator"},
                    {text: "Turning challenges into opportunities one at a time"},
                ]
            },
            {subContTitle: "sub-title", subTitleImg: "./images/cv/weapon.webp", subTItleAlt: "weapon-image", 
                listContent: [
                    {text: "Trusted First Mate"},
                    {text: "Collaborating to achieve common goals"},
                ]
            },
        ] 
    },
    {container: "voyage-timeline", title: "Voyage Timeline", titleImg: "./images/cv/anchor.webp", 
        tackImg: "./images/cv/brassTack.webp", tackAlt: "tack-image", tack: [
        {tack: "tack tl"}, {tack: "tack tr"}, {tack: "tack bl"}, {tack: "tack br"}
       ], 
        seal: "./images/cv/captainSeal.webp", sealAlt: "seal-image", 
        voyage: "voyage-container", subTitle: [
            {listContent: "voyage-section", 
                subListContent: [
                    {subListContainer: "dates", datesImg: "./images/cv/island.webp", datesAlt: "island-image", datesText: "2016 March- 2017 December"},
                    {subListContainer: "details", header: "details-header-image",
                        detailsText: "details-text-content", treasureImg: "./images/cv/treasurebox.webp", treasureAlt: "treasure-image",
                        log: "Log Entry #01", company: "Japan Engineering Service Co., Ltd.", 
                        expDetailsList: [
                            {listDetails: "Localized training materials for Overseas Training Group"},
                            {listDetails: "Instructional Support on training."}
                        ]
                    }
                ]
            },
            {listContent: "voyage-section", 
                subListContent: [
                    {subListContainer: "dates", datesImg: "./images/cv/island.webp", datesAlt: "island-image", datesText: "2018 - Present"},
                    {subListContainer: "details", header: "details-header-image",
                        detailsText: "details-text-content", treasureImg: "./images/cv/treasurebox.webp", treasureAlt: "treasure-image",
                        log: "Log Entry #02", company: "Hino Motors Ltd.", 
                        expDetailsList: [
                            {listDetails: "Technical instruction for Overseas Training Group"},
                            {listDetails: "Curriculum design advanced systems (DPR, SCR, engine ECU parameter customization, Safety device, electrical etc.)"},
                            {listDetails: "Bilingual facilitation of technical training sessions in Japanese (Nihongo) for both domestic and foreign mechanics based in Japan"},
                            {listDetails: "Hybrid delivery of an orchestrated large-scale international training"},
                            {listDetails: "Development of a custom internal web portal to centralize training resources"}
                        ] 
                    }
                ]
            }
        ]
    },
    {container: "academy-section", title: "Training Academy", titleImg: "./images/cv/anchor.webp", 
        tackImg: "./images/cv/brassTack.webp", tackAlt: "tack-image", tack: [
        {tack: "tack tl"}, {tack: "tack tr"}, {tack: "tack bl"}, {tack: "tack br"}
       ],
        seal: "./images/cv/captainSeal.webp", sealAlt: "seal-image", 
        academy: "academy-container", dateImg: "./images/cv/treasurebox2.webp", dateAlt: "treasure2-image", training: [
            {date: "2014 – 2016", text: "Phil-Nippon Technical College"},
            {date: "2008 - 2012", text: "Baguio College of Technology"}
        ]
    },
    {container: "explore-section", title: "Islands Explored", titleImg: "./images/cv/anchor.webp", 
        tackImg: "./images/cv/brassTack.webp", tackAlt: "tack-image", tack: [
        {tack: "tack tl"}, {tack: "tack tr"}, {tack: "tack bl"}, {tack: "tack br"}
       ],
        seal: "./images/cv/captainSeal.webp", sealAlt: "seal-image", 
        explore: "explore-list", locationImg: "./images/cv/location.webp", locationAlt: "location-image", exploreList: [
            {islands: "explored-islands", site: "Jewelry Website", siteImg: "./images/index/timeline/eigth.webp", siteAlt: "jewelry-page-image", siteLink: "https://nathan-front.github.io/Jewelry_page_react_ver/", LinkText: "View Logbook",
                lang: [
                    {tech: "HTML"},
                    {tech: "CSS"},
                    {tech: "JavaScript"},
                    {tech: "React"}
                ]
            },
            {islands: "explored-islands", site: "Hotel Website", siteImg: "./images/index/timeline/sixth.webp", siteAlt: "hotel-page-image", siteLink: "https://nathan-front.github.io/Hotel_booking_react_ver/", LinkText: "View Logbook",
                lang: [
                    {tech: "HTML"},
                    {tech: "CSS"},
                    {tech: "JavaScript"},
                    {tech: "React"}
                ]
            },
            {islands: "explored-islands", site: "Coffee Website", siteImg: "./images/index/timeline/fifth.webp", siteAlt: "coffee-page-image", siteLink: "https://nathan-front.github.io/Coffee_webpage_react_ver/", LinkText: "View Logbook",
                lang: [
                    {tech: "HTML"},
                    {tech: "CSS"},
                    {tech: "JavaScript"},
                    {tech: "React"}
                ]
            },
            {islands: "explored-islands", site: "E-commerce Webpage", siteImg: "./images/index/timeline/fourth.webp", siteAlt: "ecommerce-page-image", siteLink: "https://nathan-front.github.io/Ecommerce_react_ver/", LinkText: "View Logbook",
                lang: [
                    {tech: "HTML"},
                    {tech: "CSS"},
                    {tech: "JavaScript"},
                    {tech: "React"}
                ]
            },
        ]
    },
];