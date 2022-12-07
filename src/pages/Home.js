import { Fragment } from "react";
import InputFilter from "../components/InputFilter";
import InputSearch from "../components/InputSearch";
import CountriesList from "../components/CountriesList";
import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <Fragment>
      <div className={classes.inputs__container}>
        <InputSearch onSearching={props.onSearching} />
        <InputFilter onChangingFilter={props.onChangingFilter}></InputFilter>
      </div>
      <CountriesList
        filterRegion={props.region}
        searchedCountry={props.country}
        isLoading={props.isLoading}
        countries={props.countries}
        onClicking={props.onClicking}
      ></CountriesList>
    </Fragment>
  );
};

export default Home;
