import React from "react";
import { Link } from "react-router-dom";
import "./Country.scss";

const Country = ({ capital, flag, name, population, region, id }) => {
  return (
    <div className="country">
      <div className="country__img__wrapper">
        <img className="country__img" src={flag}></img>
      </div>
      <div className="country__desc">
        <h3 className="country__name">{name}</h3>
        <p>
          <span className="country__subhead">Population: </span>
          {population}
        </p>
        <p>
          <span className="country__subhead">Region:</span> {region}
        </p>
        <p>
          <span className="country__subhead">Capital:</span> {capital}
        </p>
        <a href={`/country/${id[0]}`} className="country__btn">More Details</a>
      </div>
    </div>
  );
};

export default Country;
