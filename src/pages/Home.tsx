import InputFilter from "../components/InputFilter";
import InputSearch from "../components/InputSearch";
import CountriesList from "../components/CountriesList";
import classes from "./Home.module.css";
import Country from '../types';
import React from "react";

const Home: React.FC<{
  countries: Country[],
isLoading: boolean,
region: string,
country: string,
onChangingFilter: (arg0: string) => void,
onSearching: (arg0: string) => void,
onClicking: (id: any) => void
}> = (props) => {
  return (
    <>
      <div className={classes.inputs__container}>
        <InputSearch onSearching={props.onSearching} />
        <InputFilter onChangingFilter={props.onChangingFilter} region={props.region}></InputFilter>
      </div>
      <CountriesList
        filterRegion={props.region}
        searchedCountry={props.country}
        isLoading={props.isLoading}
        countries={props.countries}
        onClicking={props.onClicking}
      ></CountriesList>
    </>
  );
};

export default Home;
