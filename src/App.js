import { Routes, Route } from "react-router-dom";
import { MediaQueryProvider } from "./MediaQueryContext";
import { useBodyClass } from "./CustomHooks";

import NavbarContainer from "./Components/Navigation/NavbarContainer";
import HomeContainer from "./Components/Home/HomeContainer";
import CareerContainer from "./Components/Career/CareerContainer";
import ProjectsContainer from "./Components/Projects/ProjectsContainer";
import ContactsContainer from "./Components/Contacts/ContactsContainer";

import "./App.scss";
import "./global.css";
import "./font.scss";

const App = () => {
  useBodyClass();
  return (
    <MediaQueryProvider>
      <NavbarContainer />
      <Routes>
        <Route>
          <Route path="/Resume/" element={<HomeContainer />} />
          <Route path="/Resume/Career" element={<CareerContainer />} />
          <Route path="/Resume/Projects" element={<ProjectsContainer />} />
          <Route path="/Resume/Contacts" element={<ContactsContainer />} />
        </Route>
      </Routes>
    </MediaQueryProvider>
  );
};

export default App;
