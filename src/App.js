import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { MediaQueryProvider } from "./MediaQueryContext";
import { useBodyClass } from "./CustomHooks";
import NavbarContainer from "./Components/Navigation/NavbarContainer";
import { Dna } from "react-loader-spinner";
import routes from "./routes";

import "./App.scss";

const App = () => {
  useBodyClass();
  return (
    <MediaQueryProvider>
      <NavbarContainer />
      <Suspense
        fallback={
          <div className="loader">
            <Dna visible={true} height="250" width="250" />
          </div>
        }
      >
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </MediaQueryProvider>
  );
};

export default App;
