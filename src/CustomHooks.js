import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useBodyClass() {
  const location = useLocation();

  useEffect(() => {
    const classMap = {
      "/Resume/Projects": "body__grey",
      "/Resume/Contacts": "body__lightBlue",
    };
    const currentClass = classMap[location.pathname] || "__noColor";

    document.body.classList.add(currentClass);

    return () => {
      document.body.classList.remove(currentClass);
    };
  }, [location.pathname]);
}

export { useBodyClass };
