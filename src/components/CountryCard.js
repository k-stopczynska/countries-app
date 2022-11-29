import React from "react";
import Button from '../UI/Button';
import classes from "./CountryCard.module.css";

const CountryCard = (props) => {
    const borders = props.borders.split(',');
    console.log(borders)
  return (
    <React.Fragment>
      <div className={classes.image__container}>
        <img src={props.flag} alt="flag"></img>
      </div>
      <div className={classes.country__description__container}>
        <h2 className={classes.country__heading}>{props.name}</h2>
        <p className={classes.country__desc}> Native Name: 
          <span>{props.nativeName}</span>
        </p>
        <p className={classes.country__desc}>
          Population: <span>{props.population}</span>
        </p>
        <p className={classes.country__desc}>
          Region: <span>{props.region}</span>
        </p>
        <p className={classes.country__desc}>
          Subregion: <span>{props.subregion}</span>
        </p>
        <p className={classes.country__desc}>
          Capital: <span>{props.capital}</span>
        </p>
        <p className={classes.country__desc}>
          Top Level Domain: <span>{props.topLevelDomain}</span>
        </p>
        <p className={classes.country__desc}>
          Currencies: <span>{props.currencies}</span>
        </p>
        <p className={classes.country__desc}>
          Languages: <span>{props.languages}</span>
        </p>
        <h3>Border countries</h3>
       {borders.map((border) => (<Button>{border.trim()}</Button>))}
      </div>
    </React.Fragment>
  );
};

export default CountryCard;
