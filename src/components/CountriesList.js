import React, { useState, useEffect } from "react";
import CountryItem from "./CountryItem";
import CountryCard from "./CountryCard";
import classes from "./CountriesList.module.css";

const CountriesList = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [id, setId] = useState('');


  async function fetchCountries() {
    setIsLoading(true);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error("something went wrong...");
      }
      const data = await response.json();
      console.log(data);
      const countriesToRender = [];
      for (const country of data) {
        countriesToRender.push({
          flag: country.flags.png,
          name: country.name.official,
          nativeName: country.name.nativeName,
          population: country.population,
          region: country.region,
          subregion: country.subregion,
          capital: country.capital,
          languages: country.languages,
          currencies: country.currencies,
          borders: country.borders,
          topLevelDomain: country.tld,
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


{!isLoading && id &&
countries.filter((country) => (country.name === id)).map((country) => (
        <CountryCard
          flag={country.flag}
          key={country.name}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          nativeName={country.name.nativeName}
          subregion={country.subregion}
        //   languages={country.languages}
          currencies={country.currencies.name}
          //borders={country.borders}
          topLevelDomain={country.tld}
        ></CountryCard>
        ))}
        </ul>
  );
};

export default CountriesList;
