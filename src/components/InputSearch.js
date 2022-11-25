import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import classes from "./InputSearch.module.css";

const InputSearch = (props) => {
  const [userInput, setUserInput] = useState("");

  const getUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onSearching(userInput);
    setUserInput('');
  };

  return (
    <form
      type="submit"
      onSubmit={onSubmitHandler}
      className={classes.form__control}
    >
      <label className={classes.label__control} htmlFor="search">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </label>
      <input
        onChange={getUserInput}
        value={userInput}
        className={classes.input__control}
        type="text"
        id="search"
        name="search"
        placeholder="Search for a country..."
      />
    </form>
  );
};

export default InputSearch;
