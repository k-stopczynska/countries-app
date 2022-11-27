import React from "react";
import classes from "./CountryCard.module.css";

const CountryCard = (props) => {
    console.log('trying to render')
  return (
    <div className={classes.card}>
      <button>Back</button>
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
          Languages: <span>languages</span>
        </p>
        <h3>Border countries</h3>
        <button>border</button>
      </div>
    </div>
  );
};

export default CountryCard;
