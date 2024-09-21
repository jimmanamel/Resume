import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useBodyClass() {
    const location = useLocation();
  
    useEffect(() => {
      const bodyClass = () => {
        switch (location.pathname) {
          case "/Resume/Projects":
            return "body__grey";
          case "/Resume/Contacts":
            return "body__lightBlue";
          default:
            return "__noColor";
        }
      };
  
      const currentClass = bodyClass();
      document.body.classList.add(currentClass);
  
      return () => {
        document.body.classList.remove(currentClass);
      };
    }, [location.pathname]);
  }

export {useBodyClass}