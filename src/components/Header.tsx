import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import ThemeContext from "../contexts/theme-context";
import classes from "./Header.module.css";

const Header: React.FC<{
  onSearching: (arg0: string) => void,
  onChangingFilter: (arg0: string) => void
}> = (props) => {
  const themeCtx = useContext(ThemeContext);
  const onChangingRoute = () => {
    props.onChangingFilter("");
    props.onSearching("");
  };

  return (
    <React.Fragment>
      <header className={classes.header}>
        <Link to="/">
          <h1 className={classes.main__heading} onClick={onChangingRoute}>
            Where in the world?
          </h1>
        </Link>
        <button
          onClick={themeCtx.onChange}
          className={`${themeCtx.lightMode ? classes.lightMode : ""}`}
        >
          {themeCtx.lightMode ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
          {themeCtx.lightMode ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
    </React.Fragment>
  );
};

export default Header;
