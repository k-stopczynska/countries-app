import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import classes from "./InputSearch.module.css";

const InputSearch: React.FC<{ onSearch: (arg0: string) => void }> = (
  props
) => {
  const [userInput, setUserInput] = useState("");
//debouncer
  const getUserInput = (e: React.FormEvent<HTMLInputElement>) => {
    setUserInput((e.target as HTMLInputElement).value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSearch(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes.form__control}>
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
