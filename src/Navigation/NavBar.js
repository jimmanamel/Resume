import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineContacts,
} from "react-icons/ai";
import { BsWrenchAdjustableCircle } from "react-icons/bs";
import { MdOutlineSchool } from "react-icons/md";

import "./NavBar.css";

const NavBar = ({selectedNav}) => {
  console.log(selectedNav)
  return (
    <div>
      <a href="#Home">
        <div className="dropDownMenuItemInitial" id={selectedNav==="Home"?"HomeNav":""}>
          <AiOutlineHome size="2em" />
        </div>
      </a>
      {/* <div className="dropDownMenuItem"> <AiOutlineUser  size="2em" /></div> */}
      <a href="#Career">
        <div className="dropDownMenuItem" id={selectedNav==="Career"?"CareerNav":""}>
          <MdOutlineSchool size="2em" />
        </div>
      </a>
      {/* <a href="#Career">
        <div className="dropDownMenuItem" id={selectedNav==="Career"?"CareerNav":""}>
          <BsWrenchAdjustableCircle size="2em" />
        </div>
      </a> */}
      <a href="#Projects">
        <div className="dropDownMenuItem" id={selectedNav==="Projects"?"ProjectsNav":""}>
          <AiOutlineProject size="2em" />
        </div>
      </a>
      <a href="#Contacts">
        <div className="dropDownMenuItemLast" id={selectedNav==="Contacts"?"ContactsNav":""}>
          <AiOutlineContacts size="2em" />
        </div>
      </a>
    </div>
  );
};

export default NavBar;
