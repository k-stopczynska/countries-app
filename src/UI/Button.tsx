import React from "react";
import classes from "./Button.module.css";

const Button: React.FC<{
  children?: React.ReactNode,
  onClick?: (e: any) => void,
  type?: "button" | "submit",
  className?: string,
}> = (props) => {
  return (
    <button
      className={classes.button}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
