import React, { createContext, useContext } from "react";
import { useMediaQuery } from "react-responsive";

const mediaQueryContext = createContext();

export const MediaQueryProvider = ({ children }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <mediaQueryContext.Provider value={{ isDesktop }}>
      {children}
    </mediaQueryContext.Provider>
  );
};

export const useMediaQueryContext = () => {
  return useContext(mediaQueryContext);
};
