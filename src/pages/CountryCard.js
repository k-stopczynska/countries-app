import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../UI/Button";
import classes from "./CountryCard.module.css";

const CountryCard = (props) => {
  const borders = props.borders.split(",");
  const mappedBorders = [];
  const mappingBordersNames = (borders, countries) => {
    if (borders.length > 0) {
      for (const border of borders) {
        for (const country of countries) {
          if (border.trim() === country.fifa) {
            mappedBorders.push(country.name);
          }
        }
      }
    }
    return mappedBorders;
  };
  mappingBordersNames(borders, props.countries);

  const closeCard = () => {
    window.history.back();
  };

  const showAnotherCardHandler = (e) => {
    props.onClicking(e.target.innerText);
  };

  return (
    <React.Fragment>
      <div className={classes.button__wrapper}>
        <Button
          type="button"
          className={classes.button__close}
          onClick={closeCard}
        >
          <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
          Back
        </Button>
      </div>
      <div className={classes.image__container}>
        <img src={props.flag} alt="flag"></img>
      </div>
      <div className={classes.country__description__container}>
        <h2 className={classes.country__heading}>{props.name}</h2>
        <p className={classes.country__desc}>
          Native Name:
          <span>{props.nativeName}</span>
        </p>
        <p className={classes.country__desc}>
          Population: <span>{props.population.toLocaleString()}</span>
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
        <h3>Border countries: </h3>
        <div className={classes.buttons__container}>
          {mappedBorders.length === 0 && <p>Looks like it's an island</p>}
          {mappedBorders.map((border) => ( border &&
          <Link to={`/${border}`}> <Button onClick={showAnotherCardHandler}>{border}</Button></Link>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CountryCard;
