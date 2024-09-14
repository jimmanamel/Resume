import ComingSoonContainer from "../ComingSoon/ComingSoonContainer";
import { tempProjects } from "../Constants/constant";

import "./projects.scss";

const ProjectsContainer = () => {
  return (
    <ComingSoonContainer/>
    // <div className="projectContainer">
    //   <div className="projectsHeader">
    //     <h2 className="header">Projects</h2>
    //     <span className="tabbedHeader">
    //       <span>Application</span>
    //       <span>Design</span>
    //     </span>
    //     <span className="orderSelector">
    //       <select name="order" id="Projects">
    //         <option value="Recent">Recent</option>
    //         <option value="Alphabetical">Alphabetical</option>
    //       </select>
    //     </span>
    //   </div>
    //   <div className="projectCardHolder">
    //     {tempProjects.map((project) => (
    //       <div className="projectCard">{project.name}</div>
    //     ))}
    //   </div>
    //   <div className="dotNavigator">
    //     <span class="dot" onclick="currentSlide(1)"></span>
    //     <span class="dot" onclick="currentSlide(2)"></span>
    //     <span class="dot" onclick="currentSlide(3)"></span>
    //   </div>
    // </div>
  );
};

export default ProjectsContainer;
