import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const APIURL = "https://restcountries.com/v2/name/";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("b");

  useEffect(() => {
    axios.get(`${APIURL}${searchTerm}`).then((data) => {
      const countries = data.data;
      if (countries) {
        //   console.log(countries)
        const newCountries = countries.map((country) => {
          const { name, population, region, capital, flag, callingCodes} = country;
          return { name, population, region, capital, flag, id:callingCodes};
        });
        setCountries(newCountries)
      } else {
        setCountries([])
      }
      setLoading(false)
    });
  },[searchTerm]);

  return <AppContext.Provider value={{countries,setSearchTerm, loading}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
