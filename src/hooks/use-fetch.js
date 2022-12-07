import { useState, useEffect, useCallback } from "react";

const useFetch = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState(null);

    const getArray = (array) => {
        return array === undefined ? "No border countries" : array.join(", ");
      };

      const getNestedObject = (object) => {
        return object === null || object === undefined
          ? ""
          : Object.values(object).join(", ");
      };

      const getDeepNestedObject = (object) => {
        return object === null || object === undefined
          ? ""
          : Object.values(object)
              .map((entry) => Object.values(entry)[0])
              .join(", ");
      };

     const fetchCountries = useCallback(async() => {
        setIsLoading(true);
        try {
          const response = await fetch("https://restcountries.com/v3.1/all");
          if (!response.ok) {
            throw new Error("something went wrong...");
          }
          const data = await response.json();
          const countriesToRender = [];
          for (const country of data) {
            countriesToRender.push({
              key: country.name.official,
              flag: country.flags.png,
              name: country.name.common,
              nativeName: getDeepNestedObject(country.name.nativeName),
              population: country.population,
              region: country.region,
              subregion: country.subregion,
              capital: country.capital,
              languages: getNestedObject(country.languages),
              currencies: getDeepNestedObject(country.currencies),
              borders: getArray(country.borders),
              topLevelDomain: getNestedObject(country.tld),
              fifa: country.fifa,
            });
            setCountries(countriesToRender);
          }
        } catch (error) {
          setError(error.message);
          return error;
        }
        setIsLoading(false);
      }, [])

      useEffect(() => {
        fetchCountries();
      }, [fetchCountries]);

      return (
        {countries, error, isLoading}
      )
}

export default useFetch;