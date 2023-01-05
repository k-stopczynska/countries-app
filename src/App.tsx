import { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import ThemeContext from "./contexts/theme-context";
import useFetch from "./hooks/use-fetch";
import Header from "./components/Header";
import Home from "./pages/Home";
import CountryCard from "./pages/CountryCard";
import "./App.css";

function App() {
  const themeCtx = useContext(ThemeContext);
  const [region, setRegion] = useState("");
  const [countryName, setCountryName] = useState("");
  const [selectedCountryName, setSelectedCountryName] = useState("");
  const { isLoading, error, countries } = useFetch();

  const onChangeFilter = (filteredRegion: string) => {
    setRegion(filteredRegion);
    setCountryName("");
  };
  const onSearch = (searchedCountry: string) => {
    setCountryName(searchedCountry);
    setRegion("");
  };
  const onClick = (id: string) => {
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
            path={`/${selectedCountryName}`}
            element={countries
              .filter((country) => country.name === selectedCountryName)
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
