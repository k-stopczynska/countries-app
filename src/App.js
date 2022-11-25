import React, { useState, useContext } from "react";
import Header from "./components/Header";
import InputSearch from "./components/InputSearch";
import InputFilter from "./components/InputFilter";
import CountriesList from "./components/CountriesList";
import ThemeContext from "./contexts/theme-context";
import "./App.css";

function App() {
  const themeCtx = useContext(ThemeContext)
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
    <div id="App" className={themeCtx.lightMode ? 'lightMode' : ''}>
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
