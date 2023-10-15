import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineContacts,
} from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { MdOutlineSchool } from "react-icons/md";

import "./NavBar.css";

const NavBar = ({selectedNav}) => {
  return (
    <div className="NavOuter">
      <a href="#Home">
        <div className="dropDownMenuItem" id={selectedNav==="Home"?"HomeNav":""}>
          <AiOutlineHome size="2em"/>
        </div>
      </a>
      <a href="#Career">
        <div className="dropDownMenuItem" id={selectedNav==="Career"?"CareerNav":""}>
          <MdOutlineSchool size="2em" />
        </div>
      </a>
      <a href="#Projects">
        <div className="dropDownMenuItem" id={selectedNav==="Projects"?"ProjectsNav":""}>
          <AiOutlineProject size="2em" />
        </div>
      </a>
      <a href="#Contacts">
        <div className="dropDownMenuItem" id={selectedNav==="Contacts"?"ContactsNav":""}>
          <AiOutlineContacts size="2em" />
        </div>
      </a>
      
    </div>
  );
};

export default NavBar;
