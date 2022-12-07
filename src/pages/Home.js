import { Fragment } from "react";
import InputFilter from "../components/InputFilter";
import InputSearch from "../components/InputSearch";
import CountriesList from "../components/CountriesList";

const Home = (props) => {
  return (
    <Fragment>
      <InputSearch onSearching={props.onSearching} />
      <InputFilter onChangingFilter={props.onChangingFilter}></InputFilter>
      <CountriesList
        filterRegion={props.region}
        searchedCountry={props.country}
        isLoading={props.isLoading}
        countries={props.countries}
      ></CountriesList>
    </Fragment>
  );
};

export default Home;
