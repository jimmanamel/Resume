import { createContext, useContext, useMemo } from "react";
import { useMediaQuery } from "react-responsive";

const MediaQueryContext = createContext();

export const MediaQueryProvider = ({ children }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const value = useMemo(() => ({ isDesktop, isTablet, isMobile }), [
    isDesktop,
    isTablet,
    isMobile,
  ]);

  return (
    <MediaQueryContext.Provider value={value}>
      {children}
    </MediaQueryContext.Provider>
  );
};

export const useMediaQueryContext = () => useContext(MediaQueryContext);
