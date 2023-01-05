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
  const [countryName, setCountryName] = useState("");
  const [selectedCountryname, setSelectedCountryName] = useState("");
  const { isLoading, error, countries } = useFetch();
  const onChangeFilter = (filteredRegion: string) => {
    setRegion(filteredRegion);
    setCountryName("");
  };
  //onSearch
  const onSearch = (searchedCountry: string) => {
    setCountryName(searchedCountry);
    setRegion("");
  };
  //onClick
  const onClick = (id: any) => {
    setSelectedCountryName(id);
  };

  return (
    <div id="App" className={themeCtx.lightMode ? "lightMode" : ""}>
      <>
        {error && <h1>{(error as Error).message}</h1>}
        <Header onSearch={onSearch} onChangeFilter={onChangeFilter} />
      </>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                countries={countries}
                isLoading={isLoading}
                region={region}
                country={countryName}
                onChangeFilter={onChangeFilter}
                onSearch={onSearch}
                onClick={onClick}
              />
            }
          />
          <Route
            path={`/${countryName}`}
            element={countries
              .filter((country) => country.name === countryName)
              .map((country) => (
                <CountryCard
                  key={country.name}
                  onClick={onClick}
                  countries={countries}
                  {...country}
                ></CountryCard>
              ))}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
