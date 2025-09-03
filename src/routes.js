import { lazy } from "react";
import { Navigate } from "react-router-dom";

//const Homer = lazy(() => import("./Components/Home/Home"));
const CareerContainer = lazy(() =>
  import("./Components/Career/CareerContainer")
);
const ProjectsContainer = lazy(() =>
  import("./Components/Projects/ProjectsContainer")
);
const ContactContainer = lazy(() =>
  import("./Components/Contact/ContactContainer")
);
// TODO: Remove the delay after testing
const Home = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./Components/Home/Home")), 800)
    )
);

const routes = [
  { path: "/Resume/", element: <Home /> },
  { path: "/Resume/Career", element: <CareerContainer /> },
  { path: "/Resume/Projects", element: <ProjectsContainer /> },
  { path: "/Resume/Contact", element: <ContactContainer /> },
  { path: "*", element: <Navigate to="/Resume" replace /> },
];

export default routes;
