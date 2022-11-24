import React, { useState, useEffect } from "react";
import CountryItem from "./CountryItem";
import classes from "./CountriesList.module.css";

const CountriesList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  async function fetchCountries() {
    setIsLoading(true);
    const response = await fetch("https://restcountries.com/v3.1/all");
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
      console.log(countriesToRender);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <ul className={classes.list}>
      {!isLoading &&
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
    </ul>
  );
};

export default CountriesList;
