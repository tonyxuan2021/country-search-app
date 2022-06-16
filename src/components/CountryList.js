import React from "react";
import "./CountryList.scss";
import Loading from "./Loading";
import uniqid from "uniqid";
import Country from "./Country";
import { useGlobalContext } from "../context";

const CountryList = () => {
  const { countries, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (countries.length < 1) {
    return <h2>No countries matched</h2>;
  }

  return (
    <div className="countries">
      <h2 className="countries__title">Countires</h2>
      <div className="countries__list">
        {countries.map((country) => {
          return <Country key={uniqid()} {...country} />;
        })}
      </div>
    </div>
  );
};

export default CountryList;
