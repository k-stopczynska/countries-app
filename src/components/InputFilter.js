import React from "react";
import classes from './InputFilter.module.css';

const InputFilter = () => {
  return (
    <form type="submit" className={classes.form__control}>
      <select className={classes.select__control}
        type="select"
        name="filter"
        id="filter"
      >
        <option className={classes.option__control} value="filter">Filter By Region</option>
        <option className={classes.option__control} value="Africa">Africa</option>
        <option className={classes.option__control} value="America">America</option>
        <option className={classes.option__control} value="Asia">Asia</option>
        <option className={classes.option__control} value="Europe">Europe</option>
        <option className={classes.option__control} value="Oceania">Oceania</option>
      </select><div className={classes.arrow}></div>
    </form>
  );
};

export default InputFilter;
