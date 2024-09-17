import Carousel from "./Carousel";

import "./Projects.scss";

const ProjectsContainer = () => {
  return (
    <div className="projectContainer">
      <div className="projectContainer__HeaderSection">
        <h2 className="projectContainer__header">Projects</h2>
        <span className="projectContainer__orderSelector">
          <select name="order" id="Projects">
            <option value="Recent">Recent</option>
            <option value="Alphabetical">Alphabetical</option>
          </select>
        </span>
      </div>
      <Carousel />
    </div>
  );
};

export default ProjectsContainer;
