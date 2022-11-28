import React, { useState, useEffect } from "react";
import CountryItem from "./CountryItem";
import CountryCard from "./CountryCard";
import classes from "./CountriesList.module.css";

const CountriesList = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [id, setId] = useState("");

  const getArray = (array) => {
    return array === undefined ? null : array.join(', ')
  }

  const getNestedObject = (object) => {
    return object === null || object === undefined ? '' : Object.values(object).join(', ');
  }

  const getDeepNestedObject = (object) => {
    return object === null || object === undefined ? '' : Object.values(object).map((entry) => Object.values(entry)[0]).join(', ')
  }

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
          nativeName: getDeepNestedObject(country.name.nativeName),
          population: country.population,
          region: country.region,
          subregion: country.subregion,
          capital: country.capital,
          languages: getNestedObject(country.languages),
          currencies: getDeepNestedObject(country.currencies),
          borders: getArray(country.borders),
          topLevelDomain: getNestedObject(country.tld),
        });
        setCountries(countriesToRender);
        console.log([...countriesToRender])
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

  const countryCardHandler = (e) => {
    const countryId = e.currentTarget.id;
    setId(countryId);
    console.log(id);
  };

  return (
    <ul className={classes.list}>
      {!isLoading &&
        props.filterRegion === "" &&
        props.searchedCountry === "" &&
        countries.map((country) => (
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
          .filter((country) =>
            country.name
              .toLowerCase()
              .includes(props.searchedCountry.trim().toLowerCase())
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

      {!isLoading &&
        id &&
        countries
          .filter((country) => country.name === id)
          .map((country) => (
            <CountryCard
              flag={country.flag}
              key={country.name}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              nativeName={country.nativeName}
              subregion={country.subregion}
               languages={country.languages}
              currencies={country.currencies}
              borders={country.borders}
              topLevelDomain={country.topLevelDomain}
            ></CountryCard>
          ))}
    </ul>
  );
};

export default CountriesList;
