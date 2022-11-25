import React, { useState, useEffect } from "react";
import CountryItem from "./CountryItem";
import classes from "./CountriesList.module.css";

const CountriesList = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  async function fetchCountries() {
    setIsLoading(true);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error("something went wrong...");
      }
      const data = await response.json();
      const countriesToRender = [];
      for (const country of data) {
        countriesToRender.push({
          flag: country.flags.png,
          name: country.name.official,
          population: country.population,
          region: country.region,
          capital: country.capital,
        });
        setCountries(countriesToRender);
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <ul className={classes.list}>
      {!isLoading &&
        props.filterRegion === "" &&
        props.searchedCountry === "" &&
        countries.map((country) => (
          <CountryItem
            flag={country.flag}
            key={country.name}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          ></CountryItem>
        ))}

      {!isLoading &&
        props.filterRegion !== "" &&
        countries
          .filter((country) => country.region === props.filterRegion)
          .map((country) => (
            <CountryItem
              flag={country.flag}
              key={country.name}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
            ></CountryItem>
          ))}

      {!isLoading &&
        props.searchedCountry !== "" &&
        countries
          .filter(
            (country) =>
              country.name.toLowerCase().includes(
              props.searchedCountry.trim().toLowerCase())
          )
          .map((country) => (
            <CountryItem
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
