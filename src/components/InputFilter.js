import React, { useState } from "react";
import classes from "./InputFilter.module.css";

const InputFilter = (props) => {
  const [selected, setSelected] = useState(false);
  const filterHandler = (e) => {
    if (e.target.innerText === 'America') {
      props.onChangingFilter('Americas')
    } else {
    props.onChangingFilter(e.target.innerText);
    }
  };

  const clickHandler = () => {
    setSelected(!selected);
  };

  return (
    <div className={classes.filter__container}>
      <button onClick={clickHandler} className={classes.form__control}>{props.region ? props.region : 'Filter By Region'}
      <div className={selected ? classes.arrow__open : classes.arrow}></div>
      </button>
        <div className={selected ? classes.select__control__open : classes.select__control} onClick={clickHandler}>
          <div
            className={classes.option__control}
            onClick={filterHandler}
          >
            Africa
          </div>
          <div
            className={classes.option__control}
            onClick={filterHandler}
          >
            America
          </div>
          <div
            className={classes.option__control}
            onClick={filterHandler}
          >
            Asia
          </div>
          <div
            className={classes.option__control}
            onClick={filterHandler}
          >
            Europe
          </div>
          <div
            className={classes.option__control}
            onClick={filterHandler}
          >
            Oceania
          </div>
        </div>

    </div>
  );
};

export default InputFilter;
