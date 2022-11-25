import React, { useState } from "react";
import Header from "./components/Header";
import InputSearch from "./components/InputSearch";
import InputFilter from "./components/InputFilter";
import CountriesList from "./components/CountriesList";
import "./App.css";

function App() {
  const [region, setRegion] = useState("");
  const [countriesList, setCountriesList] = useState([]);

  const onLoadCountriesList = (countries) => {
    setCountriesList(countries);
  };

  const onChangingFilter = (filteredRegion) => {
    setRegion(filteredRegion);
    const filteredList = countriesList.filter((countryItem) => countryItem.region === filteredRegion);
    console.log(filteredList)
  };

  return (
    <div className="App">
      <Header />
      <main>
        <InputSearch />
        <InputFilter onChangingFilter={onChangingFilter}></InputFilter>
        <CountriesList toFilterByRegion={onLoadCountriesList}></CountriesList>
      </main>
    </div>
  );
}

export default App;
