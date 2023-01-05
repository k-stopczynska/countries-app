import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import ThemeContext from "../contexts/theme-context";
import { HeaderProps } from "../types";
import classes from "./Header.module.css";

const Header = (props: HeaderProps) => {
  const themeCtx = useContext(ThemeContext);
  const onChangingRoute = () => {
    props.onChangeFilter("");
    props.onSearch("");
  };

  return (
    <>
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
    </>
  );
};

export default Header;
