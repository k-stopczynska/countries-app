import InputFilter from "../components/InputFilter";
import InputSearch from "../components/InputSearch";
import CountriesList from "../components/CountriesList";
import classes from "./Home.module.css";
import Country from '../types';
import React from "react";

const Home: React.FC<{
  //HomeProps
  countries: Country[],
isLoading: boolean,
region: string,
country: string,
onChangeFilter: (arg0: string) => void,
onSearch: (arg0: string) => void,
onClick: (id: any) => void
}> = (props) => {
  return (
    <>
      <div className={classes.inputs__container}>
        <InputSearch onSearch={props.onSearch} />
        <InputFilter onChangeFilter={props.onChangeFilter} region={props.region}></InputFilter>
      </div>
      <CountriesList
        filterRegion={props.region}
        searchedCountry={props.country}
        isLoading={props.isLoading}
        countries={props.countries}
        onClick={props.onClick}
     / >
    </>
  );
};

export default Home;
