import { BsPersonCircle } from "react-icons/bs";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <BsPersonCircle size="7em" />
      <br />
      <text className="aboutHeading">About Me</text>
      <div className="aboutDetails">
        <p>Hi,</p>
        <p> I am passionate software engineer, Frontend/Backend developer. </p>
        <p>Currently working as a Project Engineer in Wipro Technologies.</p>
        <p>Has 3 of experience and worked on many different project.</p>
        <p>It was good meeting you, have a great tour and share your experience!</p>
      </div>
    </div>
  );
};

export default About;
