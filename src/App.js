import React from 'react';
import Header from './components/Header';
import InputSearch from './components/InputSearch';
import InputFilter from './components/InputFilter';
import CountriesList from './components/CountriesList';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <main>
      <InputSearch/>
    <InputFilter></InputFilter>
    <CountriesList></CountriesList>
     </main>
    </div>
  );
}

export default App;
