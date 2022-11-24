import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classes from './InputSearch.module.css';

const InputSearch = () => {
    return (
        <form type="submit" className={classes.form__control}>
            <label className={classes.label__control} htmlFor="search"><FontAwesomeIcon icon= { faMagnifyingGlass } /></label>
            <input className={classes.input__control} type="text" id="search" name="search" placeholder="Search for a country..."/>
        </form>
    )
}

export default InputSearch;