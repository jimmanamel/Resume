import Carousel from "./Carousel";

import "./Projects.scss";

const ProjectsContainer = () => {
  return (
    <div className="projectContainer">
      <h2>Case Study</h2>
      <p>
        Every project is a unique endeavor. See what I have accomplished so far!
      </p>
      <Carousel />
    </div>
  );
};

export default ProjectsContainer;
