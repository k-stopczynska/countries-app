import React from "react";
import Button from '../UI/Button';
import Modal from './Modal';
import classes from "./CountryCard.module.css";

const CountryCard = (props) => {
    const borders = props.borders.split(',');

    const closeModal = () => {
        props.open(false);
      };

  return (
    <Modal>
              <Button
        type="button"
        className={classes.button__close}
        onClick={closeModal}
      >
        Back
      </Button>
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
        <div className={classes.buttons__container}>
       {borders.map((border) => (<Button>{border.trim()}</Button>))}
       </div>
      </div>
    </Modal>
  );
};

export default CountryCard;
