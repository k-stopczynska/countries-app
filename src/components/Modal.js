import React, { useContext } from "react";
import ReactDOM from "react-dom";
import ThemeContext from "../contexts/theme-context";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const themeCtx = useContext(ThemeContext);

  const closeModal = () => {
    props.open(false);
  };

  return ReactDOM.createPortal(
    <div id="modal" className={themeCtx.lightMode ? "lightMode" : ""}>
      <div className={classes.overlay}></div>
      <button
        type="button"
        className={classes.button__close}
        onClick={closeModal}
      >
        Back
      </button>
      <div className={classes.modal}>{props.children}</div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
