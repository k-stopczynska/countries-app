import React from 'react';
import { Link } from 'react-router-dom';
import classes from './CountryItem.module.css';

const CountryItem = (props) => {

    return (
        <li onClick={props.countryCardHandler} className={classes.list__item} id={props.name}>
            <Link to={`/${props.name}`}>
            <div className={classes.image__container}><img src={props.flag} alt="flag"></img></div>
            <div className={classes.country__description__container}>
            <h2 className={classes.country__heading}>{props.name}</h2>
            <p className={classes.country__desc}>Population: <span>{props.population}</span></p>
            <p className={classes.country__desc}>Region: <span>{props.region}</span></p>
            <p className={classes.country__desc}>Capital: <span>{props.capital}</span></p>
            </div>
            </Link>
        </li>
    )
}

export default CountryItem;