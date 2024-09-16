import Carousel from "./Carousel";

import "./Projects.scss";

const ProjectsContainer = () => {
  return (
    <div className="projectContainer">
      <div className="projectsHeader">
        <h2 className="header">Projects</h2>
        <span className="tabbedHeader">
          <span>Application</span>
          <span>Design</span>
        </span>
        <span className="orderSelector">
          {/* <select name="order" id="Projects">
            <option value="Recent">Recent</option>
            <option value="Alphabetical">Alphabetical</option>
          </select> */}
        </span>
      </div>
      <Carousel />
    </div>
  );
};

export default ProjectsContainer;
