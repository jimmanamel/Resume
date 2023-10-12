import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineContacts,
} from "react-icons/ai";
import { BsWrenchAdjustableCircle } from "react-icons/bs";
import { MdOutlineSchool } from "react-icons/md";

import "./NavBar.css";

const NavBar = () => {
  return (
        <div>
         <div className="dropDownMenuItemInitial"> <AiOutlineHome  size="2em" /></div>
         {/* <div className="dropDownMenuItem"> <AiOutlineUser  size="2em" /></div> */}
         <div className="dropDownMenuItem"><MdOutlineSchool  size="2em" /></div>
         <div className="dropDownMenuItem"><BsWrenchAdjustableCircle  size="2em" /></div>
         <div className="dropDownMenuItem"><AiOutlineProject  size="2em" /></div>
         <div className="dropDownMenuItemLast"><AiOutlineContacts  size="2em" /></div>
        </div>
  );
};

export default NavBar;
