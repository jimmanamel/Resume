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
  { route: "/Resume/Contact", icon: <IoMdContacts />, label: "Contact" },
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
  { id: 3, imgSrc: "", name: comingSoonText },
  { id: 4, imgSrc: "", name: comingSoonText },
  { id: 5, imgSrc: "", name: comingSoonText },
  { id: 6, imgSrc: "", name: comingSoonText },
];

const experiences = [
  {
    id: 1,
    title: "Graduation",
    description:
      "Completed my Bachelor's degree in Computer Science and Engineering from College of Engineering, Chengannur in the year of 2020.",
    icon: "https://twemoji.maxcdn.com/v/latest/svg/1f393.svg",
  },
  {
    id: 2,
    title: "Project Engineer",
    description:
      "Started my career with Wipro & Apple in the year 2020, right after college.",
    icon: "https://twemoji.maxcdn.com/v/latest/svg/1f4bc.svg",
  },
  {
    id: 3,
    title: "Analyst",
    description:
      "Switched to Accenture in 2023, to a senior position with more roles and responsibilities.",
    icon: "https://twemoji.maxcdn.com/v/latest/svg/1f9d1-200d-1f4bb.svg",
  },
];

export { menuItems, cards, socialLinks, experiences };
