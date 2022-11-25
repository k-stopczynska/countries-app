import React, { useState } from "react";
import Header from "./components/Header";
import InputSearch from "./components/InputSearch";
import InputFilter from "./components/InputFilter";
import CountriesList from "./components/CountriesList";
import "./App.css";

function App() {
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");

  const onChangingFilter = (filteredRegion) => {
    setRegion(filteredRegion);
    setCountry('');
  };

  const onSearching = (searchedCountry) => {
    setCountry(searchedCountry);
    setRegion('');
  };

  return (
    <div className="App">
      <Header />
      <main>
        <InputSearch onSearching={onSearching} />
        <InputFilter onChangingFilter={onChangingFilter}></InputFilter>
        <CountriesList filterRegion={region} searchedCountry={country}></CountriesList>
      </main>
    </div>
  );
}

export default App;
