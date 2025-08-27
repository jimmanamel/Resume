import sentimentImg from "../../Images/senti3.png";
import resumeImg from "../../Images/Resume.png";
import login from "../../Images/login.avif";
import { FiHome } from "react-icons/fi";
import { MdWorkOutline } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { IoMdContacts } from "react-icons/io";

const menuItems = [
  { route: "/Resume/", icon: <FiHome />, label: "Home" },
  { route: "/Resume/Career", icon: <MdWorkOutline />, label: "Career" },
  { route: "/Resume/Projects", icon: <GoProjectSymlink />, label: "Projects" },
  { route: "/Resume/Contacts", icon: <IoMdContacts />, label: "Contacts" },
];

const comingSoonText = "Coming Soon... ";

const cards = [
  {
    id: 1,
    imgSrc: resumeImg,
    name: "My Portfolio",
    description: "Portfolio app created using React JS, SCSS with vite. Gives a broad view of my education, career and personal projects.",
  },
  { id: 2, imgSrc: login, name: "Authentication App", description: 'Login security application created using React Js with front end and Node Js backend. Authentication is done using JWT token, by following HTTP cookie machanism.' },
  { id: 3, imgSrc: sentimentImg, name: "Sentiment Chat App", description: 'Sentiment chat app that shows emoji based on text input. Creted using React Js and Python.' },
  { id: 4, imgSrc: "", name: comingSoonText },
  { id: 5, imgSrc: "", name: comingSoonText },
  { id: 6, imgSrc: "", name: comingSoonText },
  // { id: 7, imgSrc: "", name: comingSoonText },
  // { id: 8, imgSrc: "", name: comingSoonText },
  // { id: 9, imgSrc: "", name: comingSoonText },
  // { id: 10, imgSrc: "", name: comingSoonText },
  // { id: 11, imgSrc: "", name: comingSoonText },
  // { id: 12, imgSrc: "", name: comingSoonText },
];

export { menuItems, cards };
