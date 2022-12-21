
import React, { useEffect, useState } from "react";

const ThemeContext = React.createContext({
  lightMode: false,
  onChange: () => {},
});

export const ThemeContextProvider  = (props: any) => {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const mode: any = JSON.parse(localStorage.getItem("lightMode") || "");
    setLightMode(mode);
  }, []);

  useEffect(() => {
    localStorage.setItem("lightMode", JSON.stringify(lightMode));
  }, [lightMode]);

  const switchModeHandler = () => {
    setLightMode((prevMode: boolean) => !prevMode)
  };
  return (
    <ThemeContext.Provider
      value={{ lightMode: lightMode, onChange: switchModeHandler }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;