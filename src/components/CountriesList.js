import React from "react";
import CountryItem from "./CountryItem";
import classes from "./CountriesList.module.css";
import { Puff } from  'react-loader-spinner'

const CountriesList = (props) => {

  // const [open, setOpen] = useState(false);
  // const [id, setId] = useState("");


  // const mappedBorders = [];
  // const mappingBordersNames = (borders, countries) => {
  //   if (borders.split("").length > 0) {
  //     for (const border of borders) {
  //       for (const country of countries) {
  //         if (border.trim() === country.fifa) {
  //           mappedBorders.push(country.name.official);
  //         }
  //       }
  //     }
  //   }
  //   return getArray(mappedBorders);
  // };



  const countryCardHandler = (e) => {
    const countryId = e.currentTarget.id;
   props.onClicking(countryId);
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
        props.countries.map((country) => (
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
          .filter((country) => country.region === props.filterRegion)
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

      {!props.isLoading &&
        props.searchedCountry !== "" &&
        props.countries
          .filter((country) =>
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
