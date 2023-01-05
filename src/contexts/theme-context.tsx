import React, { useEffect, useState } from "react";

const ThemeContext = React.createContext({
  lightMode: false,
  onChange: () => {},
});

type ThemeProps = {
  children?: React.ReactNode;
};

export const ThemeContextProvider = (props: ThemeProps) => {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const mode: boolean = JSON.parse(
      localStorage.getItem("lightMode") || "false"
    );
    setLightMode(mode);
  }, []);

  useEffect(() => {
    localStorage.setItem("lightMode", JSON.stringify(lightMode));
  }, [lightMode]);

  const switchModeHandler = () => {
    setLightMode((prevMode: boolean) => !prevMode);
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
