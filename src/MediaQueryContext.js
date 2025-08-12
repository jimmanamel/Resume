import React, { createContext, useContext } from "react";
import { useMediaQuery } from "react-responsive";

const mediaQueryContext = createContext();

export const MediaQueryProvider = ({ children }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <mediaQueryContext.Provider value={{ isDesktop, isTablet, isMobile }}>
      {children}
    </mediaQueryContext.Provider>
  );
};

export const useMediaQueryContext = () => {
  return useContext(mediaQueryContext);
};
