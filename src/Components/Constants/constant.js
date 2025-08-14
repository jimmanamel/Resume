import sentimentImg from "../../Images/senti3.png";
import resumeImg from "../../Images/Resume.png";
import login from "../../Images/login.avif";

const navbarMapper = {
  "/Resume/": "Home",
  "/Resume/Career": "Career",
  "/Resume/Projects": "Projects",
  "/Resume/Contacts": "Contacts",
};

const comingSoonText = "Coming Soon... ";

const cards = [
  {
    id: 1,
    imgSrc: resumeImg,
    content: "My Portfolio",
  },
  { id: 2, imgSrc: login, content: "Authentication App" },
  { id: 3, imgSrc: sentimentImg, content: "Sentiment Chat App" },
  { id: 4, imgSrc: "", content: comingSoonText },
  { id: 5, imgSrc: "", content: comingSoonText },
  { id: 6, imgSrc: "", content: comingSoonText },
  { id: 7, imgSrc: "", content: comingSoonText },
  { id: 8, imgSrc: "", content: comingSoonText },
  { id: 9, imgSrc: "", content: comingSoonText },
  { id: 10, imgSrc: "", content: comingSoonText },
  { id: 11, imgSrc: "", content: comingSoonText },
  { id: 12, imgSrc: "", content: comingSoonText },
];

export { navbarMapper, cards };
