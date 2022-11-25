import React from "react";
import classes from "./InputFilter.module.css";

const InputFilter = (props) => {

  const filterHandler = (e) => {
    props.onChangingFilter(e.target.value);
  };

  return (
    <form
      type="submit"
      onChange={filterHandler}
      className={classes.form__control}
    >
      <select
        className={classes.select__control}
        type="select"
        name="filter"
        id="filter"
      >
        <option className={classes.option__control} value="">Filter By Region</option>
        <option className={classes.option__control} value="Africa">
          Africa
        </option>
        <option className={classes.option__control} value="Americas">
          America
        </option>
        <option className={classes.option__control} value="Asia">
          Asia
        </option>
        <option className={classes.option__control} value="Europe">
          Europe
        </option>
        <option className={classes.option__control} value="Oceania">
          Oceania
        </option>
      </select>
      <div className={classes.arrow}></div>
    </form>
  );
};

export default InputFilter;
