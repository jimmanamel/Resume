import { MdOutlineSchool,MdWorkOutline } from "react-icons/md";
import { BsWrenchAdjustableCircle } from "react-icons/bs";

import './EduWork.css'

const EduWork = () => {
  return (
    <div className='eduContainer'>
        <div className='careerOuterContainer'>
          <div className='careerHeader'>
            <h2>Career Summary</h2>
          </div>
            <p>A comprehensive summary of education, career and skills</p>
          </div>
        <div className='careerInnerContainer'>
          <div className='eachCareerItem'>
            <MdOutlineSchool  size="4em" />
            <p>B.Tech graduate in computer science and engineering, from college of engineering Chengannur in the year of 2020</p>
          </div>
          <div className='eachCareerItem'>
            <MdWorkOutline size="4em"/>
            <p>Currently, Working as a project engineer at Wipro Technologies Limited in Chennai, Tamil Nadu</p>
          </div>
          <div className='eachCareerItem'>
            <BsWrenchAdjustableCircle  size="4em" />
            <p>Has 3 years of Professional experience in Technologies like HTML, CSS, Javascript, React JS, Next JS, MERN stack, SQL ..etc</p>
          </div>
      </div>
    </div>
  );
};

export default EduWork;
