import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();
const APIURL = "https://restcountries.com/v2/name/";

const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("afri");

  useEffect(() => {
    axios.get(`${APIURL}${searchTerm}`).then((data) => {
      const countries = data.data;
      if (countries) {
        const newCountries = countries.map((country) => {
          const { name, population, region, capital, flag } = country;
          return { name, population, region, capital, flag };
        });
        setCountries(newCountries)
      } else {
        setCountries([])
      }
    });
  },[searchTerm]);

  return <AppContext.Provider value={{countries,setSearchTerm}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
