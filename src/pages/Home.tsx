import InputFilter from "../components/InputFilter";
import InputSearch from "../components/InputSearch";
import CountriesList from "../components/CountriesList";
import { HomeProps } from "../types";
import classes from "./Home.module.css";

const Home = (props: HomeProps) => {
  return (
    <>
      <div className={classes.inputs__container}>
        <InputSearch onSearch={props.onSearch} />
        <InputFilter
          onChangeFilter={props.onChangeFilter}
          region={props.region}
        ></InputFilter>
      </div>
      <CountriesList
        filterRegion={props.region}
        searchedCountry={props.country}
        isLoading={props.isLoading}
        countries={props.countries}
        onClick={props.onClick}
      />
    </>
  );
};

export default Home;
