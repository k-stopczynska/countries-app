import React from "react";
import CountryItem from "./CountryItem";
import classes from "./CountriesList.module.css";

const countries = [
  { name: "Poland", population: 38000000, region: "Europe", capital: "Warsaw" },
  {
    name: "United States",
    population: 323947000,
    region: "America",
    capital: "Washington",
  },
];

const CountriesList = () => {
  return (
    <ul className={classes.list}>
      {countries.map((country) => (
        <CountryItem
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
