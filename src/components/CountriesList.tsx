import CountryItem from "./CountryItem";
import classes from "./CountriesList.module.css";
import { Puff } from  'react-loader-spinner';
import Country from '../types';

const CountriesList: React.FC<{
  filterRegion: string,
  searchedCountry: string,
  isLoading: boolean,
  countries: Country[],
  onClick: (arg0: string) => void
}> = (props) => {

  const countryCardHandler = (e: any) => {
    const countryId = e.currentTarget.id;
   props.onClick(countryId);
  };

  return (
    <ul className={classes.list}>
      {props.isLoading && (
        <Puff
        ariaLabel="puff-loading"
          wrapperClass={classes.loader}
          visible={true}
        />
      )}
      {!props.isLoading &&
        props.filterRegion === "" &&
        props.searchedCountry === "" &&
        props.countries.map((country: Country) => (
          <CountryItem
            countryCardHandler={countryCardHandler}
            flag={country.flag}
            key={country.name}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          ></CountryItem>
        ))}

      {!props.isLoading &&
        props.filterRegion !== "" &&
        props.countries
          .filter((country: Country) => country.region === props.filterRegion)
          .map((country: Country) => (
            <CountryItem
              countryCardHandler={countryCardHandler}
              flag={country.flag}
              key={country.name}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
            ></CountryItem>
          ))}

      {!props.isLoading &&
        props.searchedCountry !== "" &&
        props.countries
          .filter((country: Country) =>
            country.name
              .toLowerCase()
              .includes(props.searchedCountry.trim().toLowerCase())
          )
          .map((country) => (
            <CountryItem
              countryCardHandler={countryCardHandler}
              flag={country.flag}
              key={country.name}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
            ></CountryItem>
          ))}
    </ul>
  );
};

export default CountriesList;
