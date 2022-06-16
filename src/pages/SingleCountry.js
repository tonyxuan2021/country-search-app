import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import "./SingleCountry.scss";
import uniqid from "uniqid";

const countryIdUrl = "https://restcountries.com/v2/callingcode/";

const SingleCountry = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`${countryIdUrl}${id}`).then((data) => {
      const countryData = data.data[0];
      const {
        name,
        nativeName,
        region,
        population,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
        flag,
      } = countryData;

      const newCountry = {
        name,
        nativeName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
        flag,
      };
      setCountry(newCountry);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!country) {
    return <h3>No countires to display</h3>;
  }

  const {
    name,
    nativeName,
    region,
    population,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    flag,
  } = country;

  return (
    <div className="single__wrapper">
      <div className="single__img__wrapper">
        <img className="single__img" src={flag}></img>
      </div>
      <div className="single__btm">
        <div className="single--tp">
          <h2 className="single__name">{name}</h2>
          <p>
            <span>Native Name: </span> {nativeName}
          </p>
          <p>
            <span>Polulation: </span>
            {population}
          </p>
          <p>
            <span>Region: </span>
            {region}
          </p>
          <p>
            <span>Sub Region: </span>
            {subregion}
          </p>
          <p className="single__capital">
            <span>Capital: </span>
            {capital}
          </p>
        </div>

        <div className="single--down">
          <p>
            <span>Top Level Domain: </span>
            {topLevelDomain[0]}
          </p>
          <p>
            <span>Currenies: </span>
            {currencies[0].name}
          </p>
          <div className="single__lan">
            <span>Languages:</span>
            {languages.map((lan) => {
              return (
                <div key={uniqid()} className="single__arr">
                  {lan.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
