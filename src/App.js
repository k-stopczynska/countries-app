import React, { useState } from "react";
import Header from "./components/Header";
import InputSearch from "./components/InputSearch";
import InputFilter from "./components/InputFilter";
import CountriesList from "./components/CountriesList";
import "./App.css";

function App() {
  const [region, setRegion] = useState("");

  const onChangingFilter = (filteredRegion) => {
    setRegion(filteredRegion);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <InputSearch />
        <InputFilter onChangingFilter={onChangingFilter}></InputFilter>
        <CountriesList filterRegion={region}></CountriesList>
      </main>
    </div>
  );
}

export default App;
