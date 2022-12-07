import React, { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/use-fetch";
import Header from "./components/Header";
import Home from "./pages/Home";
import CountryCard from "./pages/CountryCard";
import ThemeContext from "./contexts/theme-context";
import "./App.css";

function App() {
  const themeCtx = useContext(ThemeContext);
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const { isLoading, error, countries } = useFetch();

  const onChangingFilter = (filteredRegion) => {
    setRegion(filteredRegion);
    setCountry("");
  };

  const onSearching = (searchedCountry) => {
    setCountry(searchedCountry);
    setRegion("");
  };

  const onClicking = (id) => {
    setName(id);
  };

  return (
    <div id="App" className={themeCtx.lightMode ? "lightMode" : ""}>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                countries={countries}
                isLoading={isLoading}
                region={region}
                country={country}
                onChangingFilter={onChangingFilter}
                onSearching={onSearching}
                onClicking={onClicking}
              />
            }
          />
          <Route
            path={`/${name}`}
            element={
              countries.filter((country) => country.name === name).map((country) =>
              <CountryCard
              onClicking={onClicking}
              countries={countries}
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
            ></CountryCard>)
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
