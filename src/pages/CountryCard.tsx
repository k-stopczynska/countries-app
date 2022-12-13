import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../UI/Button";
import Country from "../types";
import classes from "./CountryCard.module.css";

const CountryCard: React.FC<{
  countries: Country[];
  onClicking: (e: any) => void;
  key: string;
  flag: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  languages: string;
  currencies: string;
  borders: string;
  topLevelDomain: string;
}> = (props) => {
  const borders: string[] = props.borders.split(",");
  const mappedBorders: string[] = [];
  const mappingBordersNames = (borders: string[], countries: Country[]) => {
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

  const showAnotherCardHandler = (e: any) => {
    props.onClicking(e.target.innerText);
  };

  return (
    <div className={classes.transition__wrapper}>
      <div className={classes.button__wrapper}>
        <Link to={"/"}>
          <Button type="button" className={classes.button__close}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Back
          </Button>
        </Link>
      </div>
      <div className={classes.card__container}>
        <div className={classes.country__flag__wrapper}>
          <div className={classes.image__container}>
            <img src={props.flag} alt="flag"></img>
          </div>
        </div>
        <section className={classes.country__description__container}>
          <h2 className={classes.country__heading}>{props.name}</h2>
          <div className={classes.description__facts}>
            <div className={classes.description__wrapper}>
              <p className={classes.country__desc}>
                Native Name: <span>{props.nativeName}</span>
              </p>
              <p className={classes.country__desc}>
                Population:{" "}
                <span>{props.population.toLocaleString("en-US")}</span>
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
            </div>
            <div className={classes.description__wrapper}>
              <p className={classes.country__desc}>
                Top Level Domain: <span>{props.topLevelDomain}</span>
              </p>
              <p className={classes.country__desc}>
                Currencies: <span>{props.currencies}</span>
              </p>
              <p className={classes.country__desc}>
                Languages: <span>{props.languages}</span>
              </p>
            </div>
          </div>
          <div className={classes.description__wrapper}>
            <h3>Border countries: </h3>
            <div className={classes.buttons__container}>
              {mappedBorders.length === 0 && <p>Looks like it's an island</p>}
              {mappedBorders.map(
                (border) =>
                  border && (
                    <Link to={`/${border}`}>
                      {" "}
                      <Button onClick={showAnotherCardHandler}>{border}</Button>
                    </Link>
                  )
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CountryCard;
