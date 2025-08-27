import sentimentImg from "../../Images/senti3.png";
import resumeImg from "../../Images/Resume.png";
import login from "../../Images/login.avif";
import { FiHome } from "react-icons/fi";
import { MdWorkOutline } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { IoMdContacts } from "react-icons/io";
import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { BiLogoWhatsapp } from "react-icons/bi";

const menuItems = [
  { route: "/Resume/", icon: <FiHome />, label: "Home" },
  { route: "/Resume/Career", icon: <MdWorkOutline />, label: "Career" },
  { route: "/Resume/Projects", icon: <GoProjectSymlink />, label: "Projects" },
  { route: "/Resume/Contacts", icon: <IoMdContacts />, label: "Contacts" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/jim-joseph-96940b175/",
    icon: <AiOutlineLinkedin />,
    label: "LinkedIn",
  },
  {
    href: "https://www.facebook.com/login.php/",
    icon: <AiOutlineFacebook />,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/accounts/login/",
    icon: <AiOutlineInstagram />,
    label: "Instagram",
  },
  {
    href: "https://x.com/?lang=en-in",
    icon: <CiTwitter />,
    label: "Twitter",
  },
  {
    href: "https://web.whatsapp.com/",
    icon: <BiLogoWhatsapp />,
    label: "WhatsApp",
  },
];

const comingSoonText = "Coming Soon... ";

const cards = [
  {
    id: 1,
    imgSrc: resumeImg,
    name: "My Portfolio",
    description:
      "Portfolio app created using React JS, SCSS with vite. Gives a broad view of my education, career and personal projects.",
  },
  {
    id: 2,
    imgSrc: login,
    name: "Authentication App",
    description:
      "Login security application created using React Js with front end and Node Js backend. Authentication is done using JWT token, by following HTTP cookie machanism.",
  },
  {
    id: 3,
    imgSrc: sentimentImg,
    name: "Sentiment Chat App",
    description:
      "Sentiment chat app that shows emoji based on text input. Creted using React Js and Python.",
  },
  { id: 4, imgSrc: "", name: comingSoonText },
  { id: 5, imgSrc: "", name: comingSoonText },
  { id: 6, imgSrc: "", name: comingSoonText },
];

export { menuItems, cards, socialLinks };
