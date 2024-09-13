import {Routes, Route} from 'react-router-dom'

import { MediaQueryProvider } from "./MediaQueryContext";
import NavbarContainer from "./Components/Navigation/NavbarContainer";
import HomeContainer from "./Components/Home/HomeContainer";
import CareerContainer from "./Components/Career/CareerContainer";
import ProjectsContainer from "./Components/Projects/ProjectsContainer";
import ContactsContainer from "./Components/Contacts/ContactsContainer";

import './global.css'
import './font.scss'

const App=()=> {
  return (
    <MediaQueryProvider>
      <NavbarContainer />
        <Routes>
          <Route>
            <Route path="/" element={<HomeContainer />}/>
            <Route path="/Career" element={<CareerContainer />}/>
            <Route path="/Projects" element={<ProjectsContainer />}/>
            <Route path="/Contacts" element={<ContactsContainer />}/>
          </Route>
        </Routes>
    </MediaQueryProvider>
  );
}

export default App;
